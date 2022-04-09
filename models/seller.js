const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: false
    },
    first_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "first_name",
      autoIncrement: false
    },
    last_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "last_name",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "seller",
    comment: "",
    indexes: []
  };
  const SellerModel = sequelize.define("seller_model", attributes, options);
  return SellerModel;
};