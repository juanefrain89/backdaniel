module.exports = (sequelize, DataType) => {
    const login = sequelize.define("login", {
        correo: {
            type: DataType.STRING,
            allowNull: false,
        },
        contrasena :{
            type: DataType.STRING,
            allowNull: false,
        },
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
    }, {
        tableName: 'usuarios',
        timestamps: false 
    });

    return login;
};
