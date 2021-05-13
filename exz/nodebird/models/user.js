const Sequelize = require('sequelize');

module.exports =class User extends Sequelize.Model {
    static int(sequelize) {
        return super.init({
            email: {
                type:Sequelize.STRING(40),
                allowNull:true,
                uniqueL:true,
            },
            nick:{
                type:Sequelize.WTRING(15),
                allowNull:false,
            },
            password:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            provide:{
                type:Sequelize.STRING(10),
                allowNull:true,
            },
            snsId:{
                type:Sequelize.STRING(30),
                allowNull:true,
            },
        }, {
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'User',
            tableName:'users',
            paranoid:true,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
            
    }
    static associate(db){}
};