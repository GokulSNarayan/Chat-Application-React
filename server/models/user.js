var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    user_name:{type:String},
    phone:{type:Number},
    profile_pic:{type:String},
    password_reset_token: { type: String, default: "" },
    reset_password_expires:{type: Date},
    acc_balance:{type:Number,default:0},
    transaction_history:{type:Array},
})

userSchema.statics.verifyEmailBeforeRegister = (data,cb) => {
    return this.find({
        email:data
    }, cb)
}

module.exports = mongoose.model('NewUsers',userSchema,'new_users')