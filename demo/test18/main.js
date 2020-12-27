const User = require("./model/users");

// 增加数据
// User.create(
//     {
//         name:"小红",
//         age:20,
//         status:1,
//     },
//     function (err, data) {
//         if(err){
//             console.log(err);
//             return ;
//         }

//         console.log("数据增加成功", data);
//     }
// );


// 使用自己封装的静态方法
User.findByAge(20, function(err, docs){
    console.log(docs);
});





let user = new User({
    name: "小美",
    age: 20,
    status: 1,
});

// 使用自己封装的实例方法
user.print();