const { Model } = require('sequelize')
const sequelize = require('../sequelize')

class Provincia extends Model {}

Provincia.init({

    codigoProvincia: DataTypes.STRING,
    nombre: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'provincia',
    tableName: 'provincias'
})

module.exports = Provincia