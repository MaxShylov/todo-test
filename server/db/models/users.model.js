const mongoose = require('../index');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  id: Schema.Types.ObjectId,
  username: String,
  password: String,
  createAt: { type: Date, default: new Date().toISOString() },
  updateAt: Number,
  tasks: [{
    id: Number,
    content: String,
    status: String,
  }],
  token: String
}, {
  collection: 'UsersCollection'
});


const UsersModel = mongoose.model('UsersModel', UsersSchema);

module.exports = UsersModel;
