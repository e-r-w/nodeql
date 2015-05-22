var squel = require('squel');
squel.adapter = function(){};
squel.cls.QueryBuilder.prototype.execute = function(cb){
  squel.adapter(this.toString(), cb);
};
module.exports = squel;