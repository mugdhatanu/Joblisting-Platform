import styles from './Header.module.css'
import Rectangle1 from './../../assets/rectangle_1.png'
import Rectangle2 from './../../assets/rectangle_2.png'
import Rectangle3 from './../../assets/rectangle_3.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className= {styles["header"]}>
      <Link to = "/">Jobfinder</Link>
      <div className= {styles["buttons"]}>
        <button>Login</button>
        <button>Register</button>
      </div>
      <img src = {Rectangle1} alt = "Design" className= {`${styles["rectangle"]} ${styles["rectangle1"]}`}/>
      <img src = {Rectangle2} alt = "Design" className= {`${styles["rectangle"]} ${styles["rectangle2"]}`}/>
      <img src = {Rectangle3} alt = "Design" className= {`${styles["rectangle"]} ${styles["rectangle3"]}`}/>
    </div>
  )
}

export default Header
