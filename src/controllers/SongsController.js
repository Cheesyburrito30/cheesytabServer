const {Song} = require ('../models')
module.exports = {
	async index (req, res) {
		try{
			let songs = null
			const search = req.query.search
			if(search) {
				songs = await Song.findAll({
					where: {
						$or: [
							'title', 'artist', 'genre', 'album'
						].map(key => ({
							[key]:{
							$like: `%${search}%`
							} 
						}))
					}
				})
			}else{
				songs = await Song.findAll({
					limit: 10
				})
			}
		res.send(songs)
		} catch (err) {
            res.status(500).send({
                error: 'has occured trying to fetch songs'
            })
		}
	},
	async post (req, res) {
		try{
		const song = await Song.create(req.body)
		res.send(song)
		} catch (err) {
            res.status(500).send({
				error: 'Error occured trying to create the song'
            })
		}
	},
	async show (req, res) {
		try{
			const song = await Song.findById(req.params.songId)
			res.send(song)
		}catch(err) {
			res.status(500).send({
				error: 'an error has occured trying to fetch the song'
			})
		}
	},
	async userMade (req, res) {
		try {
			console.log(req.params)
			console.log(req.params.userId)
			const songs = await Song.findAll({
				where: {
					madeBy: req.params.userId
				}
			})
			res.send(songs)
		} catch(err) {
			error: "You suck"
		}
	},
	async put (req, res) {
		try {
		  await Song.update(req.body, {
			 where: {
				id: req.params.songId
			 }
		  })
		  res.send(req.body)
		} catch (err) {
		  res.status(500).send({
			 error: 'an error has occured trying to update the song'
		  })
		}
	 }
}