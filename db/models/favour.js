'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Sock, { foreignKey: 'sock_id' });
    }
  }
  Favour.init({
    user_id: DataTypes.INTEGER,
    sock_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favour',
  });
  return Favour;
};
