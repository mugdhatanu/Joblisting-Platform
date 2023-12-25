import styles from './Content.module.css'
import Icon from './../../assets/icon.png'
import getTime from '../../utils/timestamp';



const Content = ({job}) => {
  const time = getTime(job.createdAt);
  const skills = job?.skills_required.split(",");
  const displaySkills = skills.map((skill,index) => (
    <li key = {index}>
      {skill}
    </li>
  ))
  return (
    <div className= {styles["content"]}>
      <div className= {styles["intro"]}>
        <div className= {styles["time"]}>
            <p>{time} ago</p>
            <p>{job.job_type}</p>
        </div>
        <div className= {styles["title"]}>
            <h3>{job.job_position}</h3>
            <p>{job.work_location}</p>
        </div>
        <div className= {styles["salary"]}>
            <div className= {styles["stipend"]}>
                <img src = {Icon} alt = "Icon" />
                <p>Stipend</p>
            </div>
            <p>Rs {job.monthly_salary}/month</p>
        </div>
      </div>
      <div className= {styles["about-company"]}>
        <h4>About company</h4>
        <p>{job.company_description}</p>
      </div>
      <div className= {styles["about-job"]}>
        <h4>About the job/internship</h4>
        <p>{job.job_description}</p>
      </div>
      <div className= {styles["skills"]}>
        <h4>Skill(s) required</h4>
        <ul>
          {displaySkills}
        </ul>
      </div>
      <div className= {styles["info"]}>
        <h4>Additional Information</h4>
        <p>{job.information}</p>
      </div>
    </div>
  )
}

export default Content
