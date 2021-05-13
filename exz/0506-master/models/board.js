const Sequelize = require('sequelize'); // class 
const moment = require('moment');

module.exports = class board extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            idx:{
                type:Sequelize.INTEGER(11),
                allowNull:false, // NOT NULL 
                unique:true, // UNIQUE 
            },
            subject:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            name:{
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            content:{ 
                type:Sequelize.text,
                allowNull:false,
            },
            today:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDateValue('userdt')).format('YYYY-MM-DD')
                }        //패키지필요        //class에서 가져옴    foramt이용
            },
            hit:{
               type:Sequelize.INTEGER(11),
               defaultValue:0,
               auto_increment=1,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User',
            tableName:'users',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
}
