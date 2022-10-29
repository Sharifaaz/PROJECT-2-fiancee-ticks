'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.reservation.belongsTo(models.service)
      models.reservation.belongsTo(models.client)
    }
  }
  reservation.init({
    serviceId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    reservationDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reservation',
  });
  return reservation;
};