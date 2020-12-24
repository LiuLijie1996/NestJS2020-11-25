const mongoose = require("./db");

// 定义 Schema
let NewsSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true, // 定义mongoose模式修饰符，去除两边的空格
    },

    name: String,
    content: String,
});

module.exports = mongoose.model("News", NewsSchema, "news");