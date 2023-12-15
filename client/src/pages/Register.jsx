import Form from "../components/Form/Form"
import { Link } from "react-router-dom"
import styles from './Login.module.css'


const Register = () => {
   
    return (
        <div className = {styles["login-page"]}>
            <div className= {`${styles["left-section"]} ${styles["register"]} `}>
                <h1>Create an account</h1>
                <Form toRegister = {true}/>
                <div className = {styles["login-text"]}>
                    <span>Already have an account?</span>
                    <Link to = "/login">Sign in</Link>
                </div>
            </div>
            <div className= {styles["right-section"]}>
                <div>
                    <h2>Your Personal Job Finder</h2>
                </div>
            </div>
        </div>
    )
}

export default Register
