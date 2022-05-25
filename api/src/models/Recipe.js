const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING, //** para pocas palabras
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.FLOAT //** float es para numeros con coma
    },
    steps:{
      type: DataTypes.TEXT  //** para textos largos
    },
    image: {
      type: DataTypes.STRING
    }
  },{timestamps: false});
};
