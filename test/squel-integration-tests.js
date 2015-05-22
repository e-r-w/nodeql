var assert = require('assert');
var nodeql = require('..');

describe('squel integration tests', function(){

  var actual, expected;
  var error = function(){
    return "Expected: '"+expected+"' but was '"+actual+"'";
  };

  describe('select', function(){
    it('select should be available', function(){
      assert(nodeql.select, "squel select is not available");
    });

    it('select should function', function(){
      expected = 'SELECT column FROM table_name WHERE (column = value)';
      actual = nodeql.select()
        .from('table_name')
        .field('column')
        .where('column = value');
      assert.equal(actual, expected, error());
    });
  });

  describe('update', function(){
    it('update should be available', function(){
      assert(nodeql.update, "squel update is not available");
    });

    it('update should function', function(){
      expected = "UPDATE table_name SET column = 'value'";
      actual = nodeql.update()
        .table('table_name')
        .set('column', 'value');
      assert.equal(actual, expected, error());
    });
  });

  describe('delete', function(){

    it('delete should be available', function(){
      assert(nodeql.delete, "squel update is not available");
    });

    it('delete should function', function(){
      expected = 'DELETE FROM table_name WHERE (column = value)';
      actual = nodeql.delete()
        .from('table_name')
        .where('column = value');
      assert.equal(actual, expected, error());
    });

    it('remove alias should be available', function(){
      assert(nodeql.remove, "squel remove is not available");
    });

    it('remove alias should function', function(){
      expected = 'DELETE FROM table_name WHERE (column = value)';
      actual = nodeql.remove()
        .from('table_name')
        .where('column = value');
      assert.equal(actual, expected, error());
    });

  });

  describe('insert', function(){
    it('insert should be available', function(){
      assert(nodeql.insert, "squel insert is not available");
    });

    it('insert should function', function(){
      expected = "INSERT INTO table_name (column) VALUES ('value')";
      actual = nodeql.insert()
        .into('table_name')
        .set('column', 'value');
      assert.equal(actual, expected, error());
    });
  });

});