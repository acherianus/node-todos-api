//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb server');


  //delete one
  client.db('TodoApp').collection('Todos').deleteOne({text:'eat lunch'}).then((result) => {
    console.log(result);
  });

  //delete many
  client.db('TodoApp').collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
    console.log(result);
  });

  //findOneAndDelete
  client.db('TodoApp').collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    console.log(result);
  });

  //delete many
  client.db('TodoApp').collection('Users').deleteMany({name:'Alex'}).then((result) => {
    console.log(result);
  });

  //findOneAndDelete
  client.db('TodoApp').collection('Users').findOneAndDelete({_id:new ObjectID("5a693ee7f89f541bac64c57a")}).then((result) => {
    console.log(result);
  });


  //client.close();
});
