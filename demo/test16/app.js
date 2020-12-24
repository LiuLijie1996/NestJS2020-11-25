let UserModel = require("./model/user");
let NewsModel = require("./model/news");

// 查找 users 表中的数据
UserModel.find({}, function(err, doc) {
    console.log(doc);
});


// 增加 news 表的数据
NewsModel.create(
    {content: "我是增加的新闻内容"},
    function (err, doc) {
        console.log(doc);
    }
)