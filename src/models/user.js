const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname:{type:String, required:true},
  lastname:{type:String, required:true},
  // username: { type: String, minlenght: 5, maxlenght: 16, unique: true },
  email: { type: String, unique: true, required:true },
  password: { type: String, minlenght: 8, required:true },
  name:{type:String},
  author:{type: String},
  content:{type:String},
  Date_of_creation:{type:String},
  Upvotes:{type:Number},
  downvotes:{type:Number}
});
// userSchema.set('toJSON', {
//   transform:(doc, user)=>{
//     user.id= user_id.toString()
//     delete user._id
//     delete user._v
//     delete user._password
//   }
// })

const User = mongoose.model("user", userSchema);
module.exports = User;
