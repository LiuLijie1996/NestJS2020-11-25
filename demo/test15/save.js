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

// 3、定义Schema  Schema里面的对象和数据库表里面的字段需要一一对应
let UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    status: Number,
});

// 4、定义数据库模型，操作数据库
let User = mongoose.model('User', UserSchema, "users");

// 5、增加数据；1实例化Model（通过实例化User Model 创建增加的数据） 2实例.save()
// 实例化 Model
let u = new User({
    name:"肉丝",
    age: 20,
    status: 1,
});

//执行增加操作
u.save(function (err, doc) {
    if (err) {
        console.log(err);
        return ;
    }

    console.log('增加成功', doc);
});
