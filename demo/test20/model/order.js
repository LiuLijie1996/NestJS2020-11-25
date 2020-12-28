let mongoose = require("./db");

let OrderSchema = mongoose.Schema({
    order_id: String,
    uid: String,
    all_price: Number,
    all_num: Number,
});


module.exports = mongoose.model("Order", OrderSchema, "order");