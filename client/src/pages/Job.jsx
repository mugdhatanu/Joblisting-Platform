import Header from "../components/header/Header"
import Content from "../components/job/Content"
import styles from './Job.module.css'

const Job = () => {
  return (
    <div className={styles["job"]}>
      <Header />
      <div className={styles["title"]}>
        <h3>
        WordPress Development work from home job/internship at Adyaka Infosec Private Limited
        </h3>
      </div>
      <Content />
    </div>
  )
}

export default Job
