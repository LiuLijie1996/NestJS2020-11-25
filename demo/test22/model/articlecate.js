let mongoose = require("./db");

// 文章分类
let ArticleCateSchema = mongoose.Schema({
   title:{
       type: String,
       unique: true,
   },
   descripton: String,
   add_time:{
       type: Date,
   },
});


module.exports = mongoose.model("ArticleCate", ArticleCateSchema, "articlecate");