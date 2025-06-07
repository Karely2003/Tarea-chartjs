

const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Producto = sequelize.define('product_v6', {
    partNumber: {
        type: DataTypes.TEXT
    },
    productType: {
        type: DataTypes.TEXT
    },
    categorycode: {
        type: DataTypes.TEXT
    },
    brandcode: {
        type: DataTypes.TEXT
    },
    familycode: {
        type: DataTypes.TEXT
    },
    linecode: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.TEXT
    },
    value: {
        type: DataTypes.DOUBLE
    },
    valueCurrency: {
        type: DataTypes.TEXT
    },
    defaultQuantityUnits: {
        type: DataTypes.TEXT
    },
    name: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    plannerCode: {
        type: DataTypes.TEXT
    },
    sourceLink: {
        type: DataTypes.TEXT
    },
}, {
    tableName: 'product_v6',
    timestamps: false
});

module.exports = Producto;
