const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express');
// 规则对象
var Schema = mongoose.Schema;
var userSchema = new Schema({
    // 单号
    bumber:{
        type:String,
        required:true
    },
    // 地址
    address:{
        type:String,
        required:true
    },
    // 状态
    status:{
        type:String,
        required:true
    },
    // 取货码
    getNumber:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model('Good',userSchema);

