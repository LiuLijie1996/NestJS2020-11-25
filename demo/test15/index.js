// 1、引入mongose
const mongoose = require("mongoose");

// 2、建立连接
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

// 3、操作users表（集合）  定义Schema  Schema里面的对象和数据库表里面的字段需要一一对应
let UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    status: Number,
});



// 4、定义数据库模型，操作数据库
// model里面的第一个参数要注意：1首字母大写，2要和数据库表（集合）名称对应


// 如果传入 2 个参数的话:这个模型会和模型名称相同的复数的数据库建立连接：如通过下面 方法创建模型，那么这个模型将会操作 users 这个集合。
// let User = mongoose.model('User', UserSchema);


// 如果传入 3 个参数的话:模型默认操作第三个参数定义的集合名称
let User = mongoose.model('User', UserSchema, "users");