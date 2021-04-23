const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Votes', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BountyAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VoteTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Votes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Votes__Id",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
