const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userid = '5a6e61a5a3a7b11a440e96a0';

User.findById(userid).then((user) => {
  if (!user) {
    return console.log('id is not found');
  }
  console.log('User by id', user);
}, (e) => {
  console.log(e);
});
//var id = '6a6fe3a77c1acf32bcacde6e';

// if (!ObjectID.isValid()) {
//   console.log('ID is not valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id is not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => {
//   console.log(e);
// });
