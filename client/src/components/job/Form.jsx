import styles from './Form.module.css'

const Form = () => {
  return (
    <form className= {styles["form"]}>
      <div>
        <label htmlFor = "name">Company Name</label>
        <input type="text" name="name" id="name" placeholder='Enter your company name here'/>
      </div>
      <div>
        <label htmlFor = "logo">Add logo URL</label>
        <input type="text" name="logo" id="logo" placeholder='Enter the link'/>
      </div>
      <div>
        <label htmlFor = "position">Job position</label>
        <input type="text" name="position" id="position" placeholder = 'Enter job position'/>
      </div>
      <div>
        <label htmlFor = "salary">Monthly salary</label>
        <input type="text" name="salary" id="salary" placeholder = 'Enter Amount in rupees'/>
      </div>
      <div>
        <label htmlFor = "type">Job Type</label>
        <select className={styles["select1"]}>
          <option>Select</option>
          <option value="Part-Time">Part Time</option>
          <option value="Full-Time">Full Time</option>
        </select>
      </div>
      <div>
        <label htmlFor = "remote">Remote/office</label>
        <select className={styles["select2"]}>
          <option>Select</option>
          <option value="Remote">Remote</option>
          <option value="In-Office">In Office</option>
        </select>
      </div>
      <div>
        <label htmlFor = "location">Location</label>
        <input type="text" name="location" id="location" placeholder = 'Enter Location'/>
      </div>
      <div>
        <label htmlFor = "job-desc">Job Description</label>
        <textarea name="job-sec" id="job-desc" placeholder='Type the job description'></textarea>
      </div>
      <div>
        <label htmlFor = "about-company">About Company</label>
        <textarea name="about-company" id="about-company" placeholder='Type the job description'></textarea>
      </div>
      <div>
        <label htmlFor = "skills-reqd">Skills Required</label>
        <input type="text" name="skills-reqd" id="skills-reqd" placeholder = 'Enter the must have skills'/>
      </div>
      <div>
        <label htmlFor = "info">Information</label>
        <input type="text" name="info" id="info" placeholder = 'Enter the additional information'/>
      </div>
    </form>
  )
}

export default Form
