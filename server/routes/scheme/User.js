const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  login: String,
  password: String,
  type: String,
  // studentId: mongoose.Schema.Types.ObjectId
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
