var squel = require('squel');
squel.cls.QueryBuilder.prototype.execute = function(cb){
  if(squel.adapter && typeof squel.adapter === "function"){
    squel.adapter(this.toString(), cb);
  }
  return this;
};
module.exports = squel;