const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  head: Array,
  level: Number,
  startDate: String,
  contacts: Array,
  skills: Array,
  tasks: Array,
  email: String
});
mongoose.model('Student', StudentSchema);

module.exports = mongoose.model('Student');
