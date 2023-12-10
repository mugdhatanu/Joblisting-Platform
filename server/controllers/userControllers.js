const User = require('./../models/user');
const jwt = require('jsonwebtoken');
const Job = require('./../models/job');


const createJwtToken = (id) => {
    const token = jwt.sign({id},process.env.SECRET,{expiresIn: '2h'});
    return token;
}

const register = async (req,res,next) => {
    const {name,email,mobile,password} = req.body;
    try {
        const user = await User.register(email,password,name,mobile);
        const token = createJwtToken(user._id);
        res.status(201).json({msg: "Succesfully registered",token});
    } catch(err) {
        next(err);
    }
}

const login = async (req,res,next) => {
    const {email,password} = req.body;
    try {
        const user = await User.login(email,password);
        const token = createJwtToken(user._id);
        res.status(200).json({msg: "Succesfully logged in",token});
    } catch(err) {
        next(err);
    }
}

const createJob = async(req,res,next) => {
    const {company_name,logo_url,job_position,monthy_salary,job_type,work_location,remote,company_description,skills_required,information} = req.body;
    if(
        !company_name ||
        !logo_url || 
        !job_position || 
        !monthy_salary || 
        !job_type || 
        !work_location || 
        !remote || 
        !company_description || 
        !skills_required || 
        !information
    ) { 
        const error = new Error("Please fill the required fields");
        error.status = 400;
        next(error);
    } else {
        const skills = skills_required.split(",");
        const job = {company_name,logo_url,job_position,monthy_salary,job_type,work_location,remote,company_description,skills_required: skills,information};
        try {
            await Job.create(job);
            res.status(201).json({msg: "Job added sucessfully"})
        } catch(err) {
            next(err);
        }
    }
}

module.exports = {register,login,createJob}