let FocusModel = require("./model/focus");

// let focus = new FocusModel({
//     title: "  我是有空格的标题   ",
//     pic_link: "www.baidu.com",
// });
// focus.save();



FocusModel.find({}, function(err, doc){
    console.log(doc);
});