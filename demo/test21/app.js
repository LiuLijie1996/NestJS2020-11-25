let Article = require("./model/article");

// 多表关联
Article.aggregate(
    [
        {
            $lookup: {
                from: 'articlecate',//需要关联的表的名称
                localField: "cid",
                foreignField: "_id",
                as: "cate",
            }
        },
        {
            $lookup: {
                from: 'user',//需要关联的表的名称
                localField: "author_id",
                foreignField: "_id",
                as: "user",
            }
        },
    ],
    function (err, body) {
        console.log(body[0].cate);
        console.log(body[0].user);
    }
);