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
        ref: "ArticleCate",// cid 和 文章分类建立关系。model
    },

    // 用户id
    author_id: {
        type: Schema.Types.ObjectId,
        ref: "User",// author_id 和 用户表建立关系。model
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