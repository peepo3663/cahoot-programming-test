const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Posts', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AcceptedAnswerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AnswerCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ClosedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CommentCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CommunityOwnedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FavoriteCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastActivityDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastEditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastEditorDisplayName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    LastEditorUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OwnerUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ParentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PostTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Tags: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Title: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ViewCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Posts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Posts__Id",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
