const express = require('express')
const sequelize = require('./conexion/database')

const Producto = require('./modelos/producto');

const app = express()

app.use(express.json())

var puerto = 5000;


app.get('/productos-por-categoria', async (req, res) => {
    try {
        const resultado = await Producto.findAll({
            attributes: [
                'categorycode',
                [sequelize.fn('COUNT', sequelize.col('*')), 'total']
            ],
            group: ['categorycode']
        });

        res.status(200).send(resultado);
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener productos por categoría: ' + error });
    }
})


app.get('/valor-total-por-tipo', async (req, res) => {
    try {
        const resultado = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('SUM', sequelize.col('value')), 'valor_total']
            ],
            group: ['productType']
        });

        res.status(200).send(resultado);
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener valor total por tipo: ' + error });
    }
})

app.get('/productos-por-marca', async (req, res) => {
    try {
        const resultado = await Producto.findAll({
            attributes: [
                'brandcode',
                [sequelize.fn('COUNT', sequelize.col('*')), 'total']
            ],
            group: ['brandcode']
        });

        res.status(200).send(resultado);
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener productos por marca: ' + error });
    }
})



app.listen(puerto, () => {
    console.log('Aplicacion ejecutando en el puertp' + puerto)
})