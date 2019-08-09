const Sequelize = require('sequelize');
const databaseName = "w4d5-demo";

 console.log('Opening database connection');

 const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, { logging: false });

 // Export our singleton connection to our local database, which will be modified with models;
module.exports = db; 