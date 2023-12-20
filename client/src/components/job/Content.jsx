import styles from './Content.module.css'
import Icon from './../../assets/icon.png'



const Content = () => {
  return (
    <div className= {styles["content"]}>
      <div className= {styles["intro"]}>
        <div className= {styles["time"]}>
            <p>1w ago</p>
            <p>Full Time</p>
        </div>
        <div className= {styles["title"]}>
            <h3>WordPress Development</h3>
            <p>Bangalore | India</p>
        </div>
    <div className= {styles["salary"]}>
            <div className= {styles["stipend"]}>
                <img src = {Icon} alt = "Icon" />
                <p>Stipend</p>
            </div>
            <p>Rs 25000/month</p>
        </div>
      </div>
      <div className= {styles["about-company"]}>
        <h4>About company</h4>
        <p>We provide technology-based services to help businesses and organizations achieve their goals. We offer a wide range of services, including software development, system integration, network and security services, cloud computing, and data analytics. Our primary focus is on leveraging technology to streamline business processes, improve productivity, and enhance overall efficiency.</p>
      </div>
      <div className= {styles["about-job"]}>
        <h4>About the job/internship</h4>
        <p>We are looking for a responsible PHP/WordPress/Laravel/Shopify Developer. He/She will be liable for managing services and therefore the interchange of knowledge between the server and the users. The candidate's primary focus is going to be the event of all server-side logic, definition, and maintenance of the central database and ensuring high performance and responsiveness to requests from the front end. Selected intern's day-to-day responsibilities include: 1. Work on the development of theme customization, liquid programming language, and corresponding apps 2. Implement system integrations that are crucial to our success 3. Contribute to the development of HTML5/CSS/JavaScript and standard web technologies integral to building seamless multi-channel experiences 4. Work on speed optimization and making a mobile-friendly website</p>
      </div>
      <div className= {styles["skills"]}>
        <h4>Skill(s) required</h4>
        <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>React</li>
        </ul>
      </div>
      <div className= {styles["info"]}>
        <h4>Additional Information</h4>
        <p>Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).</p>
      </div>
    </div>
  )
}

export default Content
