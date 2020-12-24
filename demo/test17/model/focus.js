const mongoose = require("./db");

// 定义 Schema
let FocusSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true, // 定义mongoose模式修饰符，去除两边的空格
    },

    pic_link: {
        type: String,

        // 增加数据时对 pic_link 字段的值进行处理
        set(value) {
            // value可以获取 pic_link 的值，返回的数据就是pic_link在数据库实际保存的值

            if (!value.trim()) {
                return value;
            } else {
                // 判断存储的数据是否有 http 如果有直接保存，如果没有则加上 http 再保存
                if (/^https?/.test(value)) {
                    return value;
                } else {
                    return 'http://' + value;
                }
            }
        }
    },
});

module.exports = mongoose.model("Focus", FocusSchema, "focus");