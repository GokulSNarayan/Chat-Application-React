var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    message:{type:String},
    user_name:{type:String},
    timestamps:true
})

module.exports = mongoose.model('Messages',chatSchema,'messages')