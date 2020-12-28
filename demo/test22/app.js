let Article = require("./model/article");
let User = require("./model/user");
let ArticleCate = require("./model/articlecate");

// 多表关联
Article.findOne({}).populate("cid").populate("author_id").exec(function (err, docs) {
    console.log(docs);
})