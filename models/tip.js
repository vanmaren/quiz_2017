// Definicion del modelo Tips:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Tip',
        {
            text: {
                type: DataTypes.STRING, // la estructura tip de la BBDD solo tiene un texto
                validate: {notEmpty: {msg: "Falta el texto de la Pista."}} //valida que la pista no sea vacia
            },
            accepted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        });
};
