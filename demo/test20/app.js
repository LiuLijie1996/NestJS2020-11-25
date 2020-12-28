let mongoose = require("mongoose");
let Order = require("./model/order");
let OrderItem = require("./model/orderItem");


Order.aggregate(
    [
        {
            $lookup: {
                from: 'order_item',//需要关联的表的名称

                // 查找 order_item 表中 order_id 和 order 表中的 order_id 的相同的数据
                localField: "order_id",//order表的字段
                foreignField: "order_id",//order_item表的字段
                as: "items",//将查询到数据保存在items字段中
            }
        },
        {
            // 要求查找 order 只返回文档中 trade_no 、all_price 、items 字段
            $project: {
                trade_no: 1,
                all_price: 1,
                items: 1,
            }
        }
    ],
    function (err, body) {
        // console.log(body);
    }
);



OrderItem.aggregate(
    [
        {
            $lookup: {
                from: 'order',//需要关联的表的名称

                // 查找 order表中的order_id 等于 order_item表中的order_id 的数据
                localField: "order_id",//order_item表的字段
                foreignField: "order_id",//order表的字段
                as: "order_info"
            }
        },
        {
            $match: {
                title: "矿泉水"
            }
        }
    ],
    function (err, body) {
        console.log(body);
    }
);