import Form from "../components/user/Form"
import { Link } from "react-router-dom"
import styles from './Login.module.css'

const Login = ({setUser}) => {

    return (
        <div className = {styles["login-page"]}>
            <div className= {styles["left-section"]}>
                <h1>Already have an account?</h1>
                <Form toRegister = {false} setUser = {setUser}/>
                <div className = {styles["login-text"]}>
                    <span>Don't have an account?</span>
                    <Link to = "/register">Sign Up</Link>
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

export default Login
