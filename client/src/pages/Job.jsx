import { useEffect } from "react"
import Header from "../components/header/Header"
import Content from "../components/job/Content"
import styles from './Job.module.css'
import { getJobDetails, toastError } from './../apis/jobs';
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast"



const Job = ({job,setJob,user,setUser}) => {
  const {jobId} = useParams();
  useEffect(() => {
    const jobDetails = async () => {
      try {
        const jobData = await getJobDetails(jobId);
        setJob(jobData);
      } catch(err) {
        toastError("Error fetching job details")
      }
    }
    jobDetails();
  },[]);
  return (
    <div className={styles["job"]}>
      <Header user = {user} setUser = {setUser}/>
      <Toaster />
      <div className={styles["main-content"]}>
        <div className={styles["title"]}>
          <h3>
          {job?.job_position} work from {job?.remote === "Remote" ? 'home': 'office'} job/internship at {job?.company_name}
          </h3>
        </div>
        <Content job = {job} user = {user} />
      </div>
      
    </div>
  )
}

export default Job
