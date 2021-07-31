const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const selectDaySchema = new Schema({
  cramDay: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
});

const SelectDay = mongoose.model('SelectDay', selectDaySchema);

module.exports = SelectDay;