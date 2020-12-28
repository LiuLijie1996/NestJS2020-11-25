const { Schema } = require("mongoose");
let mongoose = require("./db");

// 文章
let ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },

    // 新闻分类id
    cid: {
        type: Schema.Types.ObjectId,
    },

    // 用户id
    author_id: {
        type: Schema.Types.ObjectId,
    },

    // 用户名
    author_name: {
        type: String,
    },

    // 新闻简介
    descripton: String,

    // 新闻内容
    content: String,
});


module.exports = mongoose.model("Article", ArticleSchema, "article");