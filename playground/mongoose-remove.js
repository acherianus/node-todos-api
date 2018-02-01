const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id:'abc'}).then((doc) => {
  console.log(doc);
});

Todo.findByIdAndRemove('abc').then((doc) => {
  console.log(doc);
});
