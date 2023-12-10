const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    company_name: {type: String,required: true},
    logo_url: {type: String,required: true},
    job_position: {type: String,required: true},
    monthy_salary: {type: String,required: true},
    job_type: {type: String,enum: ["Part-Time", "Full-Time"],required: true},
    work_location: {type: String,required: true},
    remote: {type: String,enum: ["Remote", "In-Office"], required: true},
    company_description: {type: String,required: true},
    skills_required: {type: [String],required: true},
    information: {type: String,required: true},

},{timestamps: true})

module.exports = mongoose.model("Job",JobSchema);