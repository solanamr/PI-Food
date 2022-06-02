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
      type: DataTypes.FLOAT //** para numeros con coma
    },
    steps:{
      type: DataTypes.TEXT  //** para textos largos
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://img.myloview.es/fotomurales/continuous-line-drawing-of-french-chef-showing-ok-sign-700-177320101.jpg"
    },
    creadoEnDb: {
      type: DataTypes.BOOLEAN,  
      defaultValue: true
    }
  },{timestamps: false});
};
