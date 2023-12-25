import { useState } from "react"
import Header from "../components/header/Header"
import JobCard from "../components/jobcard/JobCard"
import SearchBox from "../components/searchbox/SearchBox"
import styles from './Jobs.module.css'

const jsonJobs = [
  {
    _id: 0,
    company_name:  "Adyaka Infosec Private Limited",
    logo_url:  '',
    job_position:  'Frontend Developer',
    monthly_salary:  '50,000',
    job_type:  'Full Time',
    job_description: `We are looking for a responsible PHP/WordPress/Laravel/Shopify Developer. He/She will be liable for managing services and therefore the interchange of knowledge between the server and the users. The candidate's primary focus is going to be the event of all server-side logic, definition, and maintenance of the central database and ensuring high performance and responsiveness to requests from the front end. Selected intern's day-to-day responsibilities include: 1. Work on the development of theme customization, liquid programming language, and corresponding apps 2. Implement system integrations that are crucial to our success 3. Contribute to the development of HTML5/CSS/JavaScript and standard web technologies integral to building seamless multi-channel experiences 4. Work on speed optimization and making a mobile-friendly website`,
    work_location:  'Delhi',
    remote:  'Remote',
    company_description:  'We provide technology-based services to help businesses and organizations achieve their goals. We offer a wide range of services, including software development, system integration, network and security services, cloud computing, and data analytics. Our primary focus is on leveraging technology to streamline business processes, improve productivity, and enhance overall efficiency.',
    skills_required:  'HTML,CSS,Javascript',
    information:  'Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).',
  }
]

const Jobs = () => {
  const [jobs,setJobs] = useState(jsonJobs);
  const [filterParams,setFilterParams] = useState({title: "", skills: []});

  const filterSkills = (reqd_skills) => {
    const {skills} = filterParams
    const skillsArr = reqd_skills.split(",");
    for(let i = 0; i<skills.length;i++) {
      if(skillsArr.includes(skills[i])) {
        return true
      }
    }
    return false;
  }

   const filterJobs = jobs.filter(job => job.job_position.includes(filterParams.title) || filterSkills(job.skills_required));
  
  const displayJobs = filterJobs?.map((job,index) => (
    <div key = {index}>
        <JobCard job = {job}/>
    </div>
  ));

  
  return (
    <div className= {styles["jobs"]}>
      <Header />
      <SearchBox filterParams = {filterParams} setFilterParams = {setFilterParams}/>
      {displayJobs}
    </div>
  )
}

export default Jobs
