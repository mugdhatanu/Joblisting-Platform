import styles from './JobCard.module.css'
import Logo from './../../assets/logo.png'
import Flag from './../../assets/india.png'
import { Link, useNavigate } from 'react-router-dom'


const JobCard = ({job,user,setJob}) => {
  const navigate = useNavigate();
  const skills = job?.skills_required;
  const displaySkills = skills.map((skill,index) => (
    <div key = {index}>
      {skill}
    </div>
  ))
  const editJob = () => {
    setJob(job);
    localStorage.setItem("edit",JSON.stringify(true));
    localStorage.setItem("job",JSON.stringify(job));
    navigate("/createJob");
  }
  return (
    <div className= {styles["card"]}>
      <div className= {styles["left-section"]}>
        <img src = {Logo} alt = "Logo" className= {styles["logo"]}/>
        <div className= {styles["job-info"]}>
          <p className= {styles["title"]}>{job.job_position}</p>
          <div className= {styles["salary-loc"]}>
            <p>&#8377; {job.monthly_salary}</p>
            <div className= {styles["location"]}>
              <img src = {Flag} alt = "Flag" className= {styles["flag"]}/>
              <span>{job.work_location}</span>
            </div>
          </div>
          <div className= {styles["more-info"]}>
            <p>{job.remote}</p>
            <p>{job.job_type}</p>
          </div>
        </div>
      </div>
      <div className= {styles["right-section"]}>
        <div className= {styles["skills"]}>
          {displaySkills}
        </div>
        <div className= {styles["links"]}>
          {user && <button className= {styles['edit']} onClick={editJob}>Edit Job</button>}
          <Link to = {`/${job._id}`}>View details</Link>
        </div>
      </div>
    </div>
  )
}

export default JobCard
