const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PostLinks', {
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
    RelatedPostId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LinkTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PostLinks',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PostLinks__Id",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
