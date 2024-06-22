const mysql = require('mysql2/promise');

const conexionDB = async () => {
   try {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3307,
        database: 'leximate',
        user: 'root',
        password: ''
    });
    console.log('Conexion exitosa a la base de datos')
    return connection;
   } catch (error) {
    console.log('Error al conectar', error);
    throw error;
   }
}

module.exports = {
    conexionDB
}