// Definicion del modelo Quiz:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Quiz',
        {
  //          id: {
  //              type: DataTypes.INTEGER,
  //              primaryKey:'true'

  //          },
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Falta Pregunta"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Falta Respuesta"}}
            }
        });
};
