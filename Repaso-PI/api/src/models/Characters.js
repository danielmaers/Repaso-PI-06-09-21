const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require("uuid");
const episodes = require('./episodes');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('characters', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: uuidv4() 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,      
    },
    image:{
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.TEXT
    },
    
  });
};


