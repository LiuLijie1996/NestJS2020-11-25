const mongoose = require("./db");

// 定义 Schema
let UserSchema = mongoose.Schema({
    name: {
        type: String,
        default: "小明",//默认值
    },
    age: {
        type: Number,
        required: true,//是否必填
    },
    status: Number,
});

module.exports = mongoose.model("User", UserSchema, "users");