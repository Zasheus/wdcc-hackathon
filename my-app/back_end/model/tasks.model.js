const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  dueTime:{
      type:Date,
      required: true
  },
  timeNeed:{
      type:Number,
      required:true
  },
}, {
  timestamps: true,
});

const Tasks = mongoose.model('Task', taskSchema);

module.exports = Tasks;