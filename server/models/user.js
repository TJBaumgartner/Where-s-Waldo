const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true},
    time: {type: Number, required: true},
});

// UserSchema.virtual("url").get(function () {
//     return `/users/${this.id}`;
// });

module.exports = mongoose.model("User", UserSchema);