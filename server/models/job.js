const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobSchema = new Schema({
    company_name: {type: String,required: true},
    logo_url: {type: String,required: true},
    job_position: {type: String,required: true},
    monthy_salary: {type: Number,required: true},
    job_type: {type: String,required: true},
    work_location: {type: String,required: true},
    job_allocation: {type: String,required: true},
    company_description: {type: String,required: true},
    skills_required: {type: String,required: true},
    information: {type: String,required: true},

},{timestamps: true})

module.exports = mongoose.model("Job",JobSchema);