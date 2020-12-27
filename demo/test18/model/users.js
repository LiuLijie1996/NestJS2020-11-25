const mongoose = require("./db");

// 定义 Schema
let UserSchema = mongoose.Schema({
    name: {
        type: String,
        // index: true,//设置普通索引
        unique: true,//设置唯一索引
    },
    age: {
        type: Number,
        required: true,//是否必填
    },
    status: Number,
});


// 方法一：静态方法
UserSchema.statics.findByAge = function(age, callback) {
    // this 指向的是当前的model
    // 通过 this 可以对 Users 进行增删改查操作
    return this.find({age: age}, function(err, docs) {
        callback && callback(err, docs);
    });
}

// 方法二：实例方法
UserSchema.methods.print = function () {
    console.log("这是一个实例方法");
    
    // this 指向的是 model 的实例
    // 通过 this 可以拿到 new User() 中的属性
    console.log(this.name);
}

// 定义数据库模型，操作数据库
let User = mongoose.model("User", UserSchema, "users");

module.exports = User;