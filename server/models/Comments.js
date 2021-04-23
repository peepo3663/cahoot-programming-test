const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comments', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Text: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Comments',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Comments__Id",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
