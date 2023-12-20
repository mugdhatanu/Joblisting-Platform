import Form from "../components/job/Form"
import styles from './CreateJob.module.css'



const CreateJob = () => {
  return (
    <div className= {styles["create-job"]}>
        <div className= {styles["left-section"]}>
            <h1>Add job description</h1>
            <Form />
            <div className= {styles["footer"]}>
              <button className= {styles["cancel"]}>Cancel</button>
              <button className= {styles["add"]}>+Add Job</button>
            </div>
        </div>
        <div className={styles["right-section"]}>
            <h2>Recruiter add job details here</h2>
        </div>
    </div>
  )
}

export default CreateJob
