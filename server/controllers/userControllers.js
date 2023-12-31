const User = require('./../models/user');
const jwt = require('jsonwebtoken');
const Job = require('./../models/job');


const createJwtToken = (id) => {
    const token = jwt.sign({id},process.env.SECRET,{expiresIn: '2h'});
    console.log(token);
    return token;
}

const register = async (req,res,next) => {
    const {name,email,mobile,password} = req.body;
    try {
        const user = await User.register(email,password,name,mobile);
        const token = createJwtToken(user._id);
        res.status(201).json({msg: "Succesfully registered",token,name});
    } catch(err) {
        next(err);
    }
}

const login = async (req,res,next) => {
    const {email,password} = req.body;
    try {
        const user = await User.login(email,password);
        const token = createJwtToken(user._id);
        res.status(200).json({msg: "Succesfully logged in",token,name: user.name});
    } catch(err) {
        next(err);
    }
}

const createJob = async(req,res,next) => {
    const {company_name,logo_url,job_position,monthly_salary,job_type,work_location,remote,company_description,skills_required,information,job_description} = req.body;
    if(
        !company_name ||
        !logo_url || 
        !job_position || 
        !monthly_salary || 
        !job_type || 
        !work_location || 
        !remote || 
        !job_description || 
        !company_description || 
        !skills_required || 
        !information 
    ) { 
        const error = new Error("Please fill the required fields");
        error.status = 400;
        next(error);
    } else {
        const skills = skills_required.split(",");
        const job = {company_name,logo_url,job_description,job_position,monthly_salary,job_type,work_location,remote,company_description,skills_required: skills,information};
        try {
            await Job.create(job);
            res.status(201).json({msg: "Job added sucessfully"})
        } catch(err) {
            next(err);
        }
    }
}

const editJob = async(req,res,next) => {
    const {_id,company_name,logo_url,job_position,monthly_salary,job_type,work_location,remote,company_description,skills_required,information} = req.body;
    try {
        const job = Job.findOne({_id});
        if(job) {
            const updatedJob = {
                company_name: company_name || job.company_name,
                logo_url: logo_url || job.logo_url,
                job_position: job_position || job.job_position,
                monthly_salary: monthly_salary || job.monthly_salary,
                job_type: job_type || job.job_type,
                work_location: work_location || job.work_location,
                remote: remote || job.remote,
                company_description: company_description || job.company_description,
                skills_required: skills_required || job.skills_required,
                information: information || job.information
            }
            try {
                await Job.findByIdAndUpdate(_id,updatedJob,{new: true});
                res.status(200).json({msg: "Job updated sucessfully"});
            } catch(err) {
                next(err);
            }
        } else {
            res.status(404).json({sg: "Job not found"})
        }
    } catch(err) {
        next(err);
    }
}

const listJobs = async(req,res,next) => {
    const {skills,job_title} = req.body;
    let query = {};

    if(job_title) {
        query.job_position = job_title;
    }
    
    let skillsArr = [];
    
    if(skills) {
        skillsArr = skills.split(",");
        query.skills_required = { $in : skillsArr};
    }
   
    try {
        const jobs = await Job.find(query);
        res.status(200).json(jobs)
    } catch(err) {
        next(err);
    }
}

const jobDetails = async(req,res,next) => {
    const {jobId} = req.params;
    try {
        const job = await Job.findOne({_id: jobId});
        res.status(200).send(job);
    } catch(err) {
        next(err);
    }
}

module.exports = {register,login,createJob,editJob,listJobs,jobDetails}