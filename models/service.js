'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.service.hasMany(models.reservation)
    } 
  }
  service.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    phone: DataTypes.STRING,
    location: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'service',
  });
  return service;
};