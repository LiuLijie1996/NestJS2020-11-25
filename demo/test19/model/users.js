const mongoose = require("./db");

// 定义 Schema
let UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,//必传属性
        maxLength: 6,//最大长度
    },
    age: {
        type: Number,
        max: 150,//最大数值
        min: 0,//最小数值
    },
    sex: {
        type: Number,
        default: 1,//默认值
        enum: [1, 2],//sex的值必须在对应的数组里面
    },
    phone: {
        type: Number,
        match: /^1/,//正则表达式
    },
    desc: {
        type: String,
        // 自定义验证规则
        validate(value) {
            // 返回true表示验证通过
            return value.length >= 10;
        }
    }
});

// 定义数据库模型，操作数据库
let User = mongoose.model("User", UserSchema, "users");

module.exports = User;