const express = require('express')
const cors = require('cors')
const { Camionero, Paquete, Provincia } = require('./database/models')
const app = express()

const sequelize = require('./database/sequelize')
require('./database/associations')
//const router = require('./routes')
//require('./database/associations')

const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', router)

app.listen(port, () => {
    console.log(`Servidor alojado en Puerto:  ${port}`)

    sequelize.sync({ force: false }).then(() => {
        console.log('Preparado')
    })
})