import styles from './JobCard.module.css'
import Logo from './../../assets/logo.png'
import Flag from './../../assets/india.png'


const JobCard = () => {
  return (
    <div className= {styles["card"]}>
      <div className= {styles["left-section"]}>
        <img src = {Logo} alt = "Logo" className= {styles["logo"]}/>
        <div className= {styles["job-info"]}>
          <p className= {styles["title"]}>Frontend Developer</p>
          <div className= {styles["salary-loc"]}>
            <p>&#8377; 50,000</p>
            <div className= {styles["location"]}>
              <img src = {Flag} alt = "Flag" className= {styles["flag"]}/>
              <span>Delhi</span>
            </div>
          </div>
          <div className= {styles["more-info"]}>
            <p>Office</p>
            <p>Full time</p>
          </div>
        </div>
      </div>
      <div className= {styles["right-section"]}>
        <div className= {styles["skills"]}>
          <div>HTML</div>
          <div>CSS</div>
          <div>React</div>
          <div>Javascript</div>
        </div>
        <button>View details</button>
      </div>
    </div>
  )
}

export default JobCard
