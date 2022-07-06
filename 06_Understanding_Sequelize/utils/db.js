const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'S@riz00na', 
  {
    dialect: 'mysql',
    host: 'localhost',
  }
);

module.exports = sequelize;