import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css'
import {useForm} from 'react-hook-form'
import { createJob, editJob, toastError, toastSuccess } from '../../apis/jobs';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';


const Form = ({setJobs,jobData,setJobData,toEdit}) => {

  const {register,setValue,handleSubmit,formState: { errors }} = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const initializeValues = () => {
      setValue('companyName',jobData.company_name);
      setValue('logoURL',jobData.logo_url);
      setValue('monthlySalary',jobData.monthly_salary);
      setValue('jobType',jobData.job_type);
      setValue('remote',jobData.remote);
      setValue('jobPosition',jobData.job_position);
      setValue('workLocation',jobData.work_location);
      setValue('companyDescription',jobData.company_description);
      setValue('jobDesc',jobData.job_description);
      setValue('skillsRequired',jobData.skills_required);
      setValue('information',jobData.information);
    }
    const setValueChanges = () => {
      register('companyName',{onChange: (e) => setJobData(prev => ({...prev,company_name: e.target.value}))})
      register('logoURL',{onChange: (e) => setJobData(prev => ({...prev,logo_url: e.target.value}))})
      register('monthlySalary',{onChange: (e) => setJobData(prev => ({...prev,monthly_salary: e.target.value}))})
      register('jobType',{onChange: (e) => setJobData(prev => ({...prev,job_type: e.target.value}))})
      register('remote',{onChange: (e) => setJobData(prev => ({...prev,remote: e.target.value}))})
      register('jobPosition',{onChange: (e) => setJobData(prev => ({...prev,job_position: e.target.value}))})
      register('workLocation',{onChange: (e) => setJobData(prev => ({...prev,work_location: e.target.value}))})
      register('companyDescription',{onChange: (e) => setJobData(prev => ({...prev,company_description: e.target.value}))})
      register('jobDesc',{onChange: (e) => setJobData(prev => ({...prev,job_description: e.target.value}))})
      register('skillsRequired',{onChange: (e) => setJobData(prev => ({...prev,skills_required: e.target.value}))})
      register('information',{onChange: (e) => setJobData(prev => ({...prev,information: e.target.value}))})
    }
    initializeValues();
    setValueChanges();
  },[]);

  const create = async() => {
    
    console.log(jobData);
    try {
      await createJob(jobData);
      toastSuccess("Succesfully created job");
      setJobs(prev => prev ? [prev] : [...prev,jobData]);
      setTimeout(() => {
        navigate('/');
      },1000);
    } catch(err) {
      toastError("Error creating job");
    }
  }

  const edit = async () => {
    try {
      await editJob(jobData);
      toastSuccess("Succesfully edited job");
      localStorage.removeItem("job");
      setTimeout(() => {
        navigate('/');
      },1000);
    } catch(err) {
      toastError("Error editing job");
    }
  }

  const cancel = () => {
    localStorage.removeItem("job");
    window.history.back()
  }

  
  return (
    <>
        <Toaster />
        <form className= {styles["form"]}>
          <div>
            <label htmlFor = "name">Company Name</label>
            <div className= {styles["input-section"]}>
              <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder='Enter your company name here'
              {...register("companyName", { required: true})}/>
               {errors.companyName?.type === "required" && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
            )}
            </div>
          </div>
          <div>
            <label htmlFor = "logo">Add logo URL</label>
            <div className= {styles["input-section"]}>
              <input 
              onChange = {(e) => setJobData(prev => ({...prev,logo_url: e.target.value}))} 
              type="text" 
              name="logo" 
              id="logo" 
              placeholder='Enter the link'
              {...register("logoURL", { required: true})}/>
              {errors.logoURL?.type === "required" && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor = "position">Job position</label>
            <div className= {styles['input-section']}>
              <input  
              onChange = {(e) => setJobData(prev => ({...prev,job_position: e.target.value}))} 
              type="text" 
              name="position" 
              id="position" 
              placeholder = 'Enter job position'
              {...register("jobPosition", { required: true})}/>
              {errors.jobPosition?.type === "required" && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
           
          </div>
          <div>
            <label htmlFor = "salary">Monthly salary</label>
            <div className= {styles['input-section']}>
              <input  
              onChange = {(e) => setJobData(prev => ({...prev,monthly_salary: e.target.value}))} 
              type="text" 
              name="salary" 
              id="salary" 
              placeholder = 'Enter Amount in rupees'
              {...register("monthlySalary", { required: true})}/>
               {errors.monthlySalary?.type === "required" && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
            
          </div>
          <div>
            <label htmlFor = "type">Job Type</label>
            <div className= {styles['select-section']}>
              <select 
              className={styles["select1"]}  
              onChange = {(e) => setJobData(prev => ({...prev,job_type: e.target.value}))}
              {...register("jobType", { required: true,validate: value => value !== "Select"})}>
                <option>Select</option>
                <option value="Part-Time">Part Time</option>
                <option value="Full-Time">Full Time</option>
              </select>
              {errors.jobType && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor = "remote">Remote/office</label>
            <div className= {styles['select-section']}>
              <select 
              className={styles["select2"]}  
              onChange = {(e) => setJobData(prev => ({...prev,remote: e.target.value}))}
              {...register("remote", { required: true, validate: value => value !== "Select"})}>
                <option>Select</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In Office</option>
              </select>
              {errors.remote && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
            
          </div>
          <div>
            <label htmlFor = "location">Location</label>
            <div className= {styles['input-section']}>
              <input 
               
              onChange = {(e) => setJobData(prev => ({...prev,work_location: e.target.value}))}
              type="text" 
              name="location" 
              id="location" 
              placeholder = 'Enter Location'
              {...register("workLocation", { required: true})}/>
              {errors.workLocation?.type === "required" && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
            
          </div>
          <div>
            <label htmlFor = "job-desc">Job Description</label>
            <div className= {styles['input-section']}>
              <textarea 
              onChange = {(e) => setJobData(prev => ({...prev,job_description: e.target.value}))} 
              name="job-sec" 
              id="job-desc" 
              placeholder='Type the job description'
              {...register("jobDesc", { required: true})}></textarea>
              {errors.jobDesc?.type === "required" && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
           
          </div>
          <div>
            <label htmlFor = "about-company">About Company</label>
            <div className= {styles['input-section']}>
              <textarea  
              onChange = {(e) => setJobData(prev => ({...prev,company_description: e.target.value}))}
              name="about-company" 
              id="about-company" 
              placeholder='Type the job description'
              {...register("companyDescription", { required: true})}></textarea>
              {errors.companyDescription?.type === "required" && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
           
          </div>
          <div>
            <label htmlFor = "skills-reqd">Skills Required</label>
            <div className= {styles['input-section']}>
              <input 
              onChange = {(e) => setJobData(prev => ({...prev,skills_required: e.target.value}))} 
              type="text" 
              name="skills-reqd" 
              id="skills-reqd" 
              placeholder = 'Enter the must have skills'
              {...register("skillsRequired", { required: true})}/>
              {errors.skillsRequired?.type === "required" && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor = "info">Information</label>
            <div className= {styles['input-section']}>
              <input  
              onChange = {(e) => setJobData(prev => ({...prev,information: e.target.value}))}
              type="text" 
              name="info" 
              id="info" 
              placeholder = 'Enter the additional information'
              {...register("information", { required: true})}/>
              {errors.information?.type === "required" && (
              <p role="alert" className = {styles["error"]}>This field is required</p>
              )}
            </div>
          </div>
        </form>
        <div className= {styles["footer"]}>
            <button className= {styles["cancel"]} onClick={cancel}>Cancel</button>
            <button className= {styles["add"]} onClick={toEdit? handleSubmit(edit): handleSubmit(create)}>{toEdit ? "Edit Job" : "+Add Job"}</button>
        </div>
    </>
   
  )
}

export default Form
