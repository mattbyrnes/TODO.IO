const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TodoSchema = new Schema({

    item: {
      type: String,
      // trim: true,
      required: true
    },
    complete: {
      type: Boolean,
      require: true,
      default: false
    }
    
});

let Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;