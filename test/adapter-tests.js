var assert = require('assert');
var nodeql = require('..');

describe('adapter tests', function(){

  describe('smoke tests', function(){

    it('adapter should exist', function(){
      assert(nodeql.adapter, 'adapter not available');
    });

    it("adapter should be invoked", function(done){
      nodeql.adapter = function(sql, cb){
        assert.equal(sql, 'SELECT * FROM table_name');
        cb();
      };
      nodeql.select()
        .from('table_name')
        .execute(done);
    });

  });

});