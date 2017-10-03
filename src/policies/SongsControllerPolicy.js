const Joi= require('joi')
module.exports= {
   post (req,res,next){
      const schema = {
         title: Joi.string().required(),
         artist: Joi.string().required(),
         album: Joi.string().required(),
         albumImageUrl: Joi.any().allow(null),
         genre: Joi.string().required(),
         youtubeId: Joi.any().allow(null),
         lyrics: Joi.string().required(),
			tab: Joi.any().allow(null),
			madeBy: Joi.any().allow(null)
		}
		const {error, value} = Joi.validate(req.body, schema)
		if (error) {
			// console.log(req.body)
			switch(error.details[0].context.key){
				case 'title':
					res.status(400).send({
						error: 'You must provide a Title!'
					})
					break
				case 'artist': 
					res.status(400).send({
						error: 'You must provide an Artist!'
					})
					break
				case 'album': 
					res.status(400).send({
						error: 'You must provide an Album!'
					})
					break
				case 'genre': 
					res.status(400).send({
						error: 'You must provide a Genre!'
					})
					break
				case 'lyrics': 
					res.status(400).send({
						error: 'You must provide Lyrics!'
					})
					break
				default:
					console.log(error.details[0].context.key)
					res.status(400).send({
						error:'invalid song info'
					})
			}
		}else{
			next()
		}
	}
}