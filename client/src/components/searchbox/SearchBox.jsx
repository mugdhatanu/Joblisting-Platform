import Search from './../../assets/Search.png'
import styles from './SearchBox.module.css'

const SearchBox = () => {
  return (
    <div className= {styles["search-box"]}>
        <div className= {styles["search"]}>
            <img src = {Search} alt = "Search" />
            <input placeholder='Type any job title'/>
        </div>
        <div className= {styles["skills"]}>
          <div className= {styles["select-list"]}>
            <select>
              <option>Skills</option>
              <option>HTML</option>
              <option>CSS</option>
              <option>React</option>
            </select>
            <div className= {styles["list-skills"]}>
              <div className= {styles["skill"]}>
                <span>HTML</span>
                <span>X</span>
              </div>
            </div>
          </div>
          <button className= {styles["clear"]}>Clear</button>
        </div>
    </div>
  )
}

export default SearchBox
