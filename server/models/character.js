const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: {type: String, required: true},
    cordX: {type: Number, required: true},
    cordY: {type: Number, required: true},
});

// UserSchema.virtual("url").get(function () {
//     return `/users/${this.id}`;
// });

module.exports = mongoose.model("Character", CharacterSchema);