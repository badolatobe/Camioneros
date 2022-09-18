const { Camionero, Paquete, Provincia } = require('./models')


Camionero.hasMany(Paquete, {foreignKey: 'camioneroDni' })
Paquete.belongsToMany(Camionero, {foreignKey: 'paqueteCodigo' })


Paquete.belongsToMany(Provincia, {foreignKey: 'paqueteCodigo' })
Provincia.hasMany(Paquete, {foreignKey: 'provinciaCodigoProvincia' })