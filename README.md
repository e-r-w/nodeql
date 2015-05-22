# nodeql

A convenience wrapper around [squel.js](https://hiddentao.github.io/squel/), check it out.

## Usage

Use it just like squel, except you can invoke `execute` as well, e.g:

```js
var nodeql = require('nodeql');

nodeql.select()
      .from('my_table_name')
      .where('my_field = my_value')
      .execute(function(data){
      	console.log(data);
      });
```

You need to set an adapter that will handle the invocation of your `execute` callbacks by defining nodeql's `#adapter`, e.g

```js
nodeql.adapter = function(sqlString, callback){
	myDatabaseConnection.query(sqlString).then(function(data){
    	callback(data);
    });
};
```
The adapter will always be invoked with the sql string produced by squel and the callback specified by your execute function.