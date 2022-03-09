'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Cart, { foreignKey: 'sock_id' });
      this.hasMany(models.Favour, { foreignKey: 'sock_id' });
    }
  }
  Sock.init({
    title: DataTypes.STRING,
    color: DataTypes.STRING,
    logo: DataTypes.STRING,
    pattern: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
