import styles from './JobCard.module.css'
import Logo from './../../assets/logo.png'
import Flag from './../../assets/india.png'
import { Link } from 'react-router-dom'


const JobCard = ({job}) => {
  const skills = job?.skills_required.split(",");
  const displaySkills = skills.map((skill,index) => (
    <div key = {index}>
      {skill}
    </div>
  ))
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
        <Link to = {`/${job._id}`}>View details</Link>
      </div>
    </div>
  )
}

export default JobCard
