const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    email: {type: String,required: true},
    password: {type: String,required: true},
    name: {type: String,required: true},
    mobile: {type: String,required: true}
},{timestamps: true})


UserSchema.statics.register = async function (email,password,name,mobile) {
    if(!email || !password || !name || !mobile) {
        throw new Error("Please fill all the fields");
    }
    
    if(!validator.isEmail(email)) {
        throw new Error("Enter valid email");
    }
    const findIfExists = await this.findOne({email});
    if(findIfExists) {
        throw new Error("User already exists");
    } 
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const user = await this.create({email,password: hash,name,mobile});
    return user;
}

UserSchema.statics.login = async function (email,password) {
    if(!email || !password) {
        throw new Error("Please fill all the fields");
    }
    
    if(!validator.isEmail(email)) {
        throw new Error("Enter valid email");
    }
    const user = await this.findOne({email});
    if(!user) {
        throw new Error("User not found");
    }
    const verifyPassword = await bcrypt.compare(password,user.password);
    if(!verifyPassword) {
        throw new Error("Enter valid password");
    }
    return user;
}

module.exports = mongoose.model("User",UserSchema);

