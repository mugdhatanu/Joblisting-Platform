import styles from './Header.module.css'
import Rectangle1 from './../../assets/rectangle_1.png'
import Rectangle2 from './../../assets/rectangle_2.png'
import Rectangle3 from './../../assets/rectangle_3.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import getFromLocalStorage from '../../utils/localstorage/getFromLocal'
import UserImg from './../../assets/user.png'





const Header = ({user,setUser}) => {
  const logout = () => {
    localStorage.removeItem("token");
    setUser(false);
  }
  return (
    <div className= {styles["header"]}>
      <Link to = "/" className= {styles['home']}>Jobfinder</Link>
      {!user ?
      
      <div className= {styles["buttons"]}>
        <Link to = "/login">Login</Link>
        <Link to = "/register">Register</Link>
      </div>: 
      <div className= {styles["user"]}>
        <button onClick={logout}>Logout</button>
        <p>Hello! Recruiter</p>
        <div className= {styles["image-container"]}>
          <img src = {UserImg} alt = "User" />
        </div>
      </div>}
      <img src = {Rectangle1} alt = "Design" className= {`${styles["rectangle"]} ${styles["rectangle1"]}`}/>
      <img src = {Rectangle2} alt = "Design" className= {`${styles["rectangle"]} ${styles["rectangle2"]}`}/>
      <img src = {Rectangle3} alt = "Design" className= {`${styles["rectangle"]} ${styles["rectangle3"]}`}/>
    </div>
  )
}

export default Header
