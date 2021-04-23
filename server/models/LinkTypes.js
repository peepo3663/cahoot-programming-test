const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LinkTypes', {
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
    tableName: 'LinkTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_LinkTypes__Id",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
