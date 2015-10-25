var Waterline = require('waterline');
var mongoAdapter = require('sails-mongo');
var config = require('./config');

// models
var Post = require('../app/models/post.server.model');

var orm = new Waterline();
var wlconfig = {
  adapters: {
    'default': mongoAdapter,
    mongo: mongoAdapter
  },
  connections: {
    'mongo': {
      adapter: 'mongo',
      url: config.mongo
    }
  }
};
orm.loadCollection(Post);

exports.orm = orm;
exports.config = wlconfig;