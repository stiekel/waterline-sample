var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
  identity: 'post',
  connection: 'mongo',
  schema: true,
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    content: 'string',
    createTime: 'date',
    lastModifyTime: 'date'
  },
  beforeCreate: function(v, cb){
    v.createTime = new Date();
    return cb();
  },
  print: function(v) {
    console.log('\tTitle:', v.title, 'create at:', v.createTime);
    console.log('\tContent:', v.content);
  }
});