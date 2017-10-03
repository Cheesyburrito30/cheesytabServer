const authenticationcontroller = require('./controllers/authenticationcontroller')
const authenticationcontrollerpolicy = require('./policies/authenticationcontrollerpolicy')
const SongsController = require('./controllers/SongsController')
const SongsControllerPolicy = require('./policies/SongsControllerPolicy')
module.exports = (app) => {
	app.post('/register', 
		authenticationcontrollerpolicy.register,
		authenticationcontroller.register)
	app.post('/login', 
		authenticationcontroller.login)
	app.get('/songs',
		SongsController.index)
	app.post('/songs',
		SongsControllerPolicy.post,
		SongsController.post)
	app.get('/songs/:songId', 
		SongsController.show)
	app.put('/songs/:songId',
		SongsController.put)
	app.get('/songs/user/:userId', 
		SongsController.userMade)
}