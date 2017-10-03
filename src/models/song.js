module.exports =(sequelize, DataTypes) => {
	const Song = sequelize.define('Song', {
		title: DataTypes.STRING,
		artist: DataTypes.STRING,
      album: DataTypes.STRING,
      albumImageUrl: DataTypes.STRING,
      genre: DataTypes.STRING,
		youtubeId: DataTypes.STRING,
		lyrics: DataTypes.TEXT,
		tab: DataTypes.TEXT,
		madeBy: DataTypes.STRING
    })
    return Song 
}