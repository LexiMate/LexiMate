const {generarJWT} = require('../../helpers/generarJWT');
const {conexionDB} = require('../db/database');
const bcrypt = require('bcrypt');

const ctrl = {};

ctrl.register = async (req,res) => {
    const {NombreUsuario, ApellidoUsuario, Genero, Email, Contrasenia} = req.body;

    console.log(req.body);

    const conexion = await conexionDB();
    
    const sql = `INSERT INTO usuario (NombreUsuario, ApellidoUsuario, Genero, Email, Contrasenia) VALUES (?,?,?,?,?)`;

    const hashContrasenia = bcrypt.hashSync(Contrasenia, 10);
    
    await conexion.query(sql, [NombreUsuario, ApellidoUsuario, Genero, Email, hashContrasenia]);
    
    res.json({
        msg: 'Registrado correctamente'
    })
}

ctrl.login = async (req,res) => {
    const {Email, Contrasenia} = req.body;

    const connection = await conexionDB();

    const sql = 'SELECT * FROM usuario WHERE Email=? LIMIT 1';

    const [buscarUsuario] = await connection.query(sql, Email);

    if (!buscarUsuario[0]){
        return res.status(400).json({
            msg: 'El usuario no existe'
        })
    }
    console.log(buscarUsuario[0].Contrasenia);
    const validarContrasenia = bcrypt.compareSync(Contrasenia, buscarUsuario[0].Contrasenia);

    if(!validarContrasenia){
        return res.status(401).json({
            msg: 'El usuario o contraseña no coinciden'
        })
    }
    
    const token = await generarJWT({id: buscarUsuario[0].IdUsuario})

    return res.json({
        msg:'Inicio de sesión exitoso',
        token
    })

}

module.exports = ctrl