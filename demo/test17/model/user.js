const mongoose = require("./db");

// 定义 Schema
let UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    status: {
        type: Number,
        get(value) {
            return "A001 " + value;
        }
    },
});

module.exports = mongoose.model("User", UserSchema, "users");