
const {
    DataTypes
} = require('sequelize');

const db = require('../config/database');

const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "count",
      autoIncrement: false
    },
    description: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    is_made_to_order: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "is_made_to_order",
      autoIncrement: false
    },
    name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    seller_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "seller_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "seller_model"
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "price",
      autoIncrement: false
    },
    image: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: "def.png",
      comment: null,
      primaryKey: false,
      field: "image",
      autoIncrement: false
    }
  };
const options = {
    tableName: "product",
    comment: "",
    indexes: [],
    timestamps: false
  };

const ProductModel = db.define('product_model', attributes, options);
module.exports = ProductModel;
