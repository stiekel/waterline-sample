var PostController = require('../controllers/post.server.controller');

module.exports = function(app){
  app.route('/post')
    .post(PostController.save)
    .get(PostController.list);
};