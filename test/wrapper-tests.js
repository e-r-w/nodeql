var assert = require('assert');
var nodeql = require('..');

describe('wrapper tests', function(){

  describe('smoke tests', function(){
    it('select', function(){
      assert(nodeql.select().execute, 'execute is not available for select');
    });
    it('update', function(){
      assert(nodeql.update().execute, 'execute is not available for update');
    });
    it('delete', function(){
      assert(nodeql.delete().execute, 'execute is not available for delete');
    });
    it('insert', function(){
      assert(nodeql.insert().execute, 'execute is not available for insert');
    });
  });

});