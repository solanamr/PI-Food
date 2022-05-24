const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,  //*el UUID es un identificador universal provisto por sequelize 
      defaultValue: DataTypes.UUIDV4, //** v4 significa version 4 que es la al azar. lo que quiere decir que se genera aleatoriamente
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING, //** para pocas palabras
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: {
      type: DataTypes.FLOAT  //** float es para numeros con coma
    },
    healthScore: {
      type: DataTypes.FLOAT
    },
    steps:{
      type: DataTypes.TEXT  //** para textos largos
    },
    image: {
      type: DataTypes.STRING
    }
  },{timestamps: false});
};
