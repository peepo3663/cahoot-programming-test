const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoteTypes', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'VoteTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_VoteType__Id",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
