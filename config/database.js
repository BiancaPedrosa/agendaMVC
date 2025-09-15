const { Sequelize } = require('sequelize');
/* opcao 1 - MySQL -  lembre de instalar o mysql2: npm install mysql2  
const sequelize = new Sequelize('restaurante', 'root', 'ifsp', {
  host: 'localhost',
  dialect: 'mysql'
});
*/

// opcao 2 - SQLite tem como vantagem a simplicidade, pois nao precisa de servidor
// lembre de instalar o sqlite3: npm install sqlite3
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'restaurante.sqlite' 
});

module.exports = sequelize;
