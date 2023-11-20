'use strict';
const {
  Model
} = require('sequelize');
const MenuItem = require('./menuitem');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.hasMany(models.MenuItem, { as: 'menuItems' });
    }
  }
  Restaurant.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isOnline: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Default value is offline
    },
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};