const User = require("./model/users");

// 增加数据
User.create(
    {
        name: "恐龙世界",
        age: 20,
        sex: 2,
        phone: 13000000000,
        desc: "我是简介内容我是简介内容我是简介内容"
    },
    function (err, data) {
        if (err) {
            console.log("-----", err, '------');
            return;
        }

        console.log("数据增加成功", data);
    },
);