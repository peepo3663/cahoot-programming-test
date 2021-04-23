const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PostTypes', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PostTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PostTypes__Id",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
