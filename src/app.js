const express = require('express')
const bodyParser = require('body-parser')
const { sequelize } = require('./models')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const http = require('http').Server(app)


app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.get('/status', (req, res)=> {
	res.send({
		message: 'hello!'
	})
})
require('./routes')(app)

sequelize.sync({force: false})
	.then(() =>{
		http.listen(process.env.PORT, function(){
			console.log('Listening' + process.env.PORT)
		})
	})
