import { useRef } from 'react'
import Search from './../../assets/Search.png'
import styles from './SearchBox.module.css'
import { useNavigate } from 'react-router-dom';


const SearchBox = ({filterParams,setFilterParams,user}) => {
  const selectRef = useRef(null);
  const navigate = useNavigate();

  const addSkill = (skill) => {
    if(skill!== "Skills" && !filterParams.skills.includes(skill)) {
      setFilterParams(prev => ({...prev,skills:[...prev.skills,skill]}))
    }
  }

  const clear = () => {
    setFilterParams(prev =>  ({...prev,skills: []}))
    selectRef.current.value = "Skills"
  }
  const removeSkill = (skill) => {
    const {skills} = filterParams;
    const updatedSkills = skills.filter(existingSkill => existingSkill !== skill);
    setFilterParams(prev => ({...prev,skills: updatedSkills}));
  }
  const skills = filterParams.skills.map((skill,index) => (
    <div className= {styles["skill"]} key = {index}>
      <span>{skill}</span>
      <span onClick={() => removeSkill(skill)}>X</span>
    </div>
  ))

  const addJob = () => {
    localStorage.setItem("edit",JSON.stringify(false));
    localStorage.removeItem("job");
    navigate("/createJob");
  }

  return (
    <div className= {styles["search-box"]}>
        <div className= {styles["search"]}>
            <img src = {Search} alt = "Search" />
            <input placeholder='Type any job title' value = {filterParams.title} onChange={(e) =>setFilterParams(prev => ({...prev,title: e.target.value}))}/>
        </div>
        <div className= {styles["skills"]}>
          <div className= {styles["select-list"]}>
            <select ref = {selectRef} onChange = {(e) => addSkill(e.target.value)}>
              <option>Skills</option>
              <option>HTML</option>
              <option>CSS</option>
              <option>React</option>
            </select>
            <div className= {styles["list-skills"]}>
              {skills}
            </div>
          </div>
          {user ? <button className = {styles["add-job"]} onClick={addJob}>+Add Job</button> : <button className= {styles["clear"]} onClick={clear}>Clear</button>}
        </div>
       {user && <div className= {styles["clear-section"]}>
          <button className= {styles["clear"]} onClick={clear}>Clear</button>
        </div>}
    </div>
  )
}

export default SearchBox
