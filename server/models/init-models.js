var DataTypes = require("sequelize").DataTypes;
var _Badges = require("./Badges");
var _Comments = require("./Comments");
var _LinkTypes = require("./LinkTypes");
var _PostLinks = require("./PostLinks");
var _PostTypes = require("./PostTypes");
var _Posts = require("./Posts");
var _Users = require("./Users");
var _VoteTypes = require("./VoteTypes");
var _Votes = require("./Votes");

function initModels(sequelize) {
  var Badges = _Badges(sequelize, DataTypes);
  var Comments = _Comments(sequelize, DataTypes);
  var LinkTypes = _LinkTypes(sequelize, DataTypes);
  var PostLinks = _PostLinks(sequelize, DataTypes);
  var PostTypes = _PostTypes(sequelize, DataTypes);
  var Posts = _Posts(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var VoteTypes = _VoteTypes(sequelize, DataTypes);
  var Votes = _Votes(sequelize, DataTypes);


  return {
    Badges,
    Comments,
    LinkTypes,
    PostLinks,
    PostTypes,
    Posts,
    Users,
    VoteTypes,
    Votes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
