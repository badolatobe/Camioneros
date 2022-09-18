const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Paquete extends Model {}

Paquete.init({
    
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    destinatario: DataTypes.FLOAT,
}, {
    sequelize,
    modelName: 'paquete',
    tableName: 'paquetes'
})

module.exports = Paquete