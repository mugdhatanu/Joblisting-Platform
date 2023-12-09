const User = require('./../models/user');
const jwt = require('jsonwebtoken');



const createJwtToken = (id) => {
    const token = jwt.sign({id},process.env.SECRET,{expiresIn: '2h'});
    return token;
}

const register = async (req,res) => {
    const {name,email,mobile,password} = req.body;
    try {
        const user = await User.register(email,password,name,mobile);
        const token = createJwtToken(user._id);
        res.status(201).json({msg: "Succesfully registered",token});
    } catch(err) {
        res.status(400).json({msg: "Error registering user",error: err.message});
    }
}

const login = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.login(email,password);
        const token = createJwtToken(user._id);
        res.status(201).json({msg: "Succesfully logged in",token});
    } catch(err) {
        res.status(400).json({msg: "Error logging in",error: err.message});
    }
}

module.exports = {register,login}