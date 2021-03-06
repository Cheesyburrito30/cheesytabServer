const fs = require ('fs')
const path = require('path')
const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	logging: false,
	dialectOptions: { ssl : true }
})

fs
	.readdirSync(__dirname)
	.filter((file) =>
		file !== 'index.js'
	)
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, file))
		db[model.name] = model 
	})
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db