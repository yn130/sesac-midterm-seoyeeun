module.exports = (sequelize, DataTypes) => {
    const todo = sequelize.define('todo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        done: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: "false"

        }
    }, {
        tablename: 'todo',
        freezeTableName: true,
        timestamps: true,
    });

    return todo;
};