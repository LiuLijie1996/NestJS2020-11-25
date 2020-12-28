// db文件主要用来连接数据库

// 引入mongoose
const mongoose = require("mongoose");

// 建立连接
mongoose.connect(
    "mongodb://127.0.0.1:27017/eggcms",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (err) {
        if (err) {
            console.log('数据库连接失败');
            return;
        }

        console.log('数据库连接成功');
    }
);

module.exports = mongoose;