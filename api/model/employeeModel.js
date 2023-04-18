const Sequelize = require('sequelize');
Sequelize = new Sequelize('database', 'username', 'password', { 
    host: 'localhost',
    dialect: 'mysql'
})

Sequelize.options.database = 'projetociss';
Sequelize.options.username = 'root';
Sequelize.options.password = 'admin';
Sequelize.options.host ='/var/run/mysqld/mysqld.sock';

const Employee = sequelize.define('employee', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    NIS: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

});

module.exports = EmployeeModel;