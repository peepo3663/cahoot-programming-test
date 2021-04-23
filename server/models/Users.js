const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AboutMe: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DisplayName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    DownVotes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EmailHash: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    LastAccessDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Location: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Reputation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UpVotes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Views: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    WebsiteUrl: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Users_Id",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
