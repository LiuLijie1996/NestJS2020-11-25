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

// 5、修改数据
// updateOne 修改一条符合条件的数据
User.updateOne(
    //查询数据
    {name: "xiaoming"},

    //修改数据
    {name: "小明"},

    async function (err, doc)  {
        if (err) {
            console.log(err);
            return;
        }

        console.log('修改成功', doc);

        let data = await User.find({name:"小明"});
        console.log(data)
    }
);