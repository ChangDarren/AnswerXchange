var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  //User id, serves as the primary key
  id: {type: String, required: true},
  //The usernmame, should be 8 to 24 characters long
  username: {type: String, min: 8, max: 24, required: true},
  //The password for the user,should be 8 to 24 characters long
  password: {type: String, min: 8, max: 24, required: true},
  //The major for the individual, used for personalisation
  major: {type: String},
});

//Virtual to get the url for the user page
UserSchema.virtual("url").get(function() {
  return "/user/" + this.id;
});

module.exports = mongoose.model("User", UserSchema);