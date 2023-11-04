const DetallePedido = require('../models/detalle_de_pedido.model');

const obtenerDetallesPedido = async (req, res) => {
  try {
    const detallesPedido = await DetallePedido.findAll();
    res.json(detallesPedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obtenerDetallePedido = async (req, res) => {
  const { id } = req.params;
  try {
    const detallePedido = await DetallePedido.findByPk(id);
    if (detallePedido) {
      res.json(detallePedido);
    } else {
      res.status(404).json({ message: 'Detalle de pedido no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const crearDetallePedido = async (req, res) => {
  try {
    const nuevoDetallePedido = await DetallePedido.create(req.body);
    res.json(nuevoDetallePedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarDetallePedido = async (req, res) => {
  const { id } = req.params;
  try {
    const [actualizado] = await DetallePedido.update(req.body, { where: { id } });
    if (actualizado) {
      res.json({ mensaje: 'Detalle de pedido actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'Detalle de pedido no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const eliminarDetallePedido = async (req, res) => {
  const { id } = req.params;
  try {
    const eliminado = await DetallePedido.destroy({ where: { id } });
    if (eliminado) {
      res.json({ mensaje: 'Detalle de pedido eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Detalle de pedido no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  obtenerDetallesPedido,
  obtenerDetallePedido,
  crearDetallePedido,
  actualizarDetallePedido,
  eliminarDetallePedido,
};