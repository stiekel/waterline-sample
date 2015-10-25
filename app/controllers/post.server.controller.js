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
    var pagestart = parseInt(req.query.pagestart, 1) ? parseInt(req.query.pagestart, 1) : 1;
    var pagesize = parseInt(req.query.pagesize, 1) ? parseInt(req.query.pagesize, 1) : 1;
    req.models.post.find().exec(function(err, docs){
      res.json(docs);
    });
  },
};