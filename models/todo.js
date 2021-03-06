var mongoose = require('mongoose');

// Schema
var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cant be blank"
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date:{
    type: Date,
    default: Date.now
  }
});

// Complie Schema to models
var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;
