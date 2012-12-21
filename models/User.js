var db = require('../lib/db.js');

var UserSchema = new db.Schema({
    username : {type: String, unique: true}
  , password : String
  , comments : String
})

var MyUser = db.mongoose.model('User', UserSchema);

// Exports
module.exports.addUser = addUser;

// Add user to database
function addUser(username, password, comments, callback) {
  var instance = new MyUser();
  instance.username = username;
  instance.password = password;
  instance.comments = comments;
  instance.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(null, instance);
    }
  });
}