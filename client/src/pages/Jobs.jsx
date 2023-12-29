import { useEffect, useState } from "react"
import Header from "../components/header/Header"
import JobCard from "../components/jobcard/JobCard"
import SearchBox from "../components/searchbox/SearchBox"
import styles from './Jobs.module.css'
import { getAllJobs, toastError } from "../apis/jobs"
import { Toaster } from "react-hot-toast"


const Jobs = ({jobs,setJobs,user,setUser,setJob}) => {
  useEffect(() => {
    const listJobs = async() => {
      try {
        const jobs = await getAllJobs();
        setJobs(jobs);
      } catch(err) {
        toastError("Error fetching jobs")
      }
    } 
    listJobs();
   
  },[])
  const [filterParams,setFilterParams] = useState({title: "", skills: []});

  const filterSkills = (reqd_skills) => {
    const {skills} = filterParams
    const skillsArr = reqd_skills;
    for(let i = 0; i<skills.length;i++) {
      if(skillsArr.includes(skills[i])) {
        return true
      }
    }
    return false;
  }

   const filterJobs = jobs?.filter(job => job.job_position.includes(filterParams.title) || filterSkills(job.skills_required));
  
  const displayJobs = filterJobs?.map((job,index) => (
    <div key = {index}>
        <JobCard job = {job} setJob = {setJob} user = {user}/>
    </div>
  ));

  
  return (
    <div className= {styles["jobs"]}>
      <Header user = {user} setUser = {setUser}/>
      <Toaster />
      <SearchBox filterParams = {filterParams} setFilterParams = {setFilterParams} user = {user}/>
      {displayJobs}
    </div>
  )
}

export default Jobs
