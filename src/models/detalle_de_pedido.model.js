const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const DetallePedido = sequelize.define("detalle_pedido", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pedidoid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productoid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precioUnitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    timestamps: false, // Desactiva la creación automática de campos createdAt y updatedAt
});

sequelize.sync()
    .then(() => {
        console.log('Modelo de detalle_pedido sincronizado con la base de datos');
    })
    .catch((error) => {
        console.error('Error al sincronizar el modelo de detalle_pedido:', error);
    });

module.exports = DetallePedido;