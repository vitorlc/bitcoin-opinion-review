module.exports = (sequelize, DataTypes) => {
  const Opinions = sequelize.define('opinions', {
    author: DataTypes.STRING,
    text: DataTypes.STRING,
    link: DataTypes.STRING,
    opinion: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    avg: DataTypes.INTEGER
  }, {
    tableName: 'opinions'
  })

  return Opinions
}
