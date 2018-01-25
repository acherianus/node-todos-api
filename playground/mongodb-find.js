//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server');

  // client.db('TodoApp').collection('Todos').find({
  //   _id: new ObjectID("5a693896f89f541bac64c3c4")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  client.db('TodoApp').collection('Todos').count().then((count) => {
    console.log(`Todos ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  client.db('TodoApp').collection('Users').find({
    name:'Alex'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });
  //client.close();
});
