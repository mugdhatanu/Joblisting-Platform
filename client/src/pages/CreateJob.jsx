import { useState } from "react"
import Form from "../components/job/Form"
import styles from './CreateJob.module.css'




const CreateJob = ({setJobs}) => {
  const job = JSON.parse(localStorage.getItem("job"));
  const toEdit = JSON.parse(localStorage.getItem("edit"));
  const [jobData,setJobData] = useState( 
    job ||{company_name: "",
          company_description: "",
          job_description: "",
          job_position: "",
          job_type: "Select",
          logo_url: "",
          monthly_salary: "",
          remote: "Select",
          skills_required: "",
          work_location: "",
          information: ""
          });

  return (
    <div className= {styles["create-job"]}>
        <div className= {styles["left-section"]}>
            <h1>Add job description</h1>
            <Form setJobs = {setJobs} jobData = {jobData} setJobData = {setJobData} toEdit = {toEdit} />
        </div>
        <div className={styles["right-section"]}>
            <h2>Recruiter add job details here</h2>
        </div>
    </div>
  )
}

export default CreateJob
