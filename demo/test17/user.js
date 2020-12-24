let UserModel = require("./model/user");

// let user = new UserModel({
//     name: "张三",
//     age: 20,
//     status: 789
// });
// user.save(function(err, doc){
//     console.log(err ? '增加失败' : '增加成功');
// });


UserModel.find({}, function(err, doc){
    /*
        [
            {
                _id: 5fe3d9b6fcd0144a9c78f6d7,
                name: '张三',
                age: 20,
                status: 789,
                __v: 0
            }
        ]
    */
    console.log(doc);


    // 只有获取其字段的值时才会改变值
    console.log(doc[0].status);// A001 789
});