const mongoose = require("./db");

// 定义 Schema
let NewsSchema = mongoose.Schema({
    name: {
        type: String,
        default: "小明",//默认值
    },
    content: {
        type: String,
        required: true,//是否必填
    },
});

module.exports = mongoose.model("News", NewsSchema, "news");