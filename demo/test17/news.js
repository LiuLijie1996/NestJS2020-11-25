let NewsModel = require("./model/news");

// 实例化 NewsModel
let news = new NewsModel({
    title: "  我是标题  "
});
// 执行保存操作
news.save();


// 查看数据
NewsModel.find({}, function (err, doc) {
    console.log(doc);
});