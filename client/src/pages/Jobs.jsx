import Header from "../components/header/Header"
import JobCard from "../components/jobcard/JobCard"
import SearchBox from "../components/searchbox/SearchBox"
import styles from './Jobs.module.css'

const Jobs = () => {
  return (
    <div className= {styles["jobs"]}>
      <Header />
      <SearchBox />
      <div>
        <JobCard />
      </div>
    </div>
  )
}

export default Jobs
