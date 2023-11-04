const express = require("express");
const detallesPedidoRoute = express.Router();
const protegerRutas = require('../middlewares/protegerRutas');
const {
  obtenerDetallesPedido,
  obtenerDetallePedido,
  crearDetallePedido,
  actualizarDetallePedido,
  eliminarDetallePedido
} = require("../controllers/administrador.controller");

detallesPedidoRoute.get("/detalles-pedido", protegerRutas, obtenerDetallesPedido);
detallesPedidoRoute.get("/detalles-pedido/:id", protegerRutas, obtenerDetallePedido);
detallesPedidoRoute.post("/detalles-pedido", protegerRutas, crearDetallePedido);
detallesPedidoRoute.put("/detalles-pedido/:id", protegerRutas, actualizarDetallePedido);
detallesPedidoRoute.delete("/detalles-pedido/:id", protegerRutas, eliminarDetallePedido);

module.exports = detallesPedidoRoute;