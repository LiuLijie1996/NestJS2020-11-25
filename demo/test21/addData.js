let ArticleCate = require("./model/articlecate");
let User = require("./model/user");
let Article = require("./model/article");


// 增加新闻类型
/*
let newNavList = ['国际新闻', '国内新闻', '本地新闻', '本站新闻'];
newNavList.forEach(async (item) => {
    let random = Math.ceil(Math.random()*100000);
    
    await ArticleCate.create({
        title: item,
        descripton: item + "简介",
        content: item + "的内容，此处省略" + random + "个字",
    });
});
*/


//增加用户
/*
let userList = ['小明', '小红', '狗蛋', '小美'];
userList.forEach(async (item) => {
    let random = Math.ceil(Math.random() * 10000000);

    await User.create({
        username: item,
        password: random,
        name: item,
        age: 20,
        sex: random % 2 == 0 ? '男' : '女',
        tel: 1234679,
    });
});
*/



// 增加新闻文章
Article.create({
    title:"文章标题555",
    cid: '5fe9e105d7ab4855a846615c',//关联分类id
    author_id: '5fe9e28598681961384cdec7',//关联用户id
    author_name: '小明',//用户名
    descripton: '文章标题555简介',
    content: "这是文章内容555555",
});