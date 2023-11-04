require("dotenv").config();
const express = require("express");
const app = express();
const administradorRouter = require("./src/routes/administrador.route");
const insertarUsuario =require('./src/seeders/usuario.seeder')

const db = require("./src/config/db.config");

app.use(express.json());

app.use("/administrador", administradorRouter);


app.listen(process.env.PORT, () => {
  console.log(`API escuchando en el puerto ${process.env.PORT}`);
});
  

insertarUsuario;