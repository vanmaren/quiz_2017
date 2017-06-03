'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Tips',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                QuizId: {
                    type: Sequelize.INTEGER
                },
                text: {
                    type: Sequelize.STRING,
                    validate: {notEmpty: {msg: "Falta el texto de la Pista."}}
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },

                AuthorId: {
                    type: Sequelize.INTEGER
                }
            },
            {
                sync: {force: true}
                //indica que hay que forzar los cambios si hay
                //incompatibilidad o error al arrancar
            }
        );
    },
// añades la funcion para eliminar la tabla o deshacer cambios
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Tips');
    }
};
