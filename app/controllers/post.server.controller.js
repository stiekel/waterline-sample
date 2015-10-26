module.exports = {
  save: function(req, res, next){
    var title = req.body.title || req.query.title || '';
    var content = req.body.content || req.query.content || '';
    if(!title || !content) {
      return next(new Error('title and content must be required.'));
    }
    req.models.post.create({
      title: title,
      content: content
    }, function(err, docs){
      if(err) return next(err);

      return res.json(docs);
    });
  },
  list: function(req, res, next){
    var page = parseInt(req.query.page, 1) ? parseInt(req.query.page, 1) : 1;
    var limit = parseInt(req.query.limit, 1) ? parseInt(req.query.limit, 1) : 1;
    req.models.post.find().paginate({page: page, limit: limit}).exec(function(err, docs){
      res.json(docs);
    });
  }
};