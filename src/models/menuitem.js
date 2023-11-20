'use strict';
const {
  Model
} = require('sequelize');
const Restaurant = require('./restaurant');

module.exports = (sequelize, DataTypes) => {
  class MenuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MenuItem.belongsTo(models.Restaurant);

    }
  }
  MenuItem.init({
    name: {
      type: DataTypes.STRING,
    allowNull:false
  },
    price:{ 
      type:DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MenuItem',
  });
  return MenuItem;
};