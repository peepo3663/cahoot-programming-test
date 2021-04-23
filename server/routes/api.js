var express = require('express');
var router = express.Router();
const { Op } = require('sequelize')

module.exports = function (models) {

  router.post('/search/posts', (req, res, next) => {
    let searchQuery = req.body.searchKeyword
    let page = req.body.page || 0
    models.Posts.findAll(
      { where: {
        PostTypeId: {
          [Op.or]: [1,2]
        },
        [Op.or]: [{Title: {
            [Op.like]: `%${searchQuery}%`
          }}
          ,
          {Body: {
            [Op.like]: `%${searchQuery}%`
          }}
        ]
      },
        limit: 10,
        offset: page <= 0 ? 0 : page * 10
      }).then(posts => {
      return res.status(200).json(posts)
    }).catch(error => {
      return res.status(500).json(error)
    })
  })

  return router
};
