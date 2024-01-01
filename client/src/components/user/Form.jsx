import styles from './Form.module.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import {Toaster} from 'react-hot-toast'
import setLocalStorageValue from '../../utils/localstorage/setValueInLocal';
import getFromLocalStorage from '../../utils/localstorage/getFromLocal';
import { login, toastError, _register } from '../../apis/auth';


const Form = ({toRegister,setUser}) => {

    const {register,handleSubmit,formState: { errors }} = useForm();
    const navigate = useNavigate();

    const loginUser = async(data) => {
        const user = {email: data.email,password: data.password}
        try {
            const userData = await login(user);
            setLocalStorageValue("token",userData.token);
            setUser(getFromLocalStorage());
            setTimeout(() => {
                navigate("/");
            },1000);
        } catch(err) {
            toastError("Error logging in");
        }
    }

    const registerUser = async(data) => {
        const user = {email: data.email,password: data.password,name: data.name, mobile: data.mobile}
        try {
            const userData = await _register(user);
            setLocalStorageValue("token",userData.token);
            setUser(getFromLocalStorage());
            setTimeout(() => {
                navigate("/");
            },1000);
        } catch(err) {
            toastError("Error registering user");
        }
    }


     
    return (
        <div className = {styles["form"]}>
            <p>Your personal job finder is here</p>
            <Toaster />
            <form>
                {toRegister && 
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    {...register("name", { required: true})}
                />}
                {errors.name?.type === "required" && (
                    <p role="alert" className = {styles["error"]}>Name is required</p>
                )}
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                    <p role="alert" className = {styles["error"]}>Email is required</p>
                )}
                {errors.email?.type === "pattern" && (
                    <p role="alert" className = {styles["error"]}>Invalid Email</p>
                )}
                {toRegister && <input 
                    type="text" 
                    name="mobile" 
                    id="mobile" 
                    placeholder="Mobile" 
                    {...register("mobile", { required: true})}
                />}
                {errors.mobile?.type === "required" && (
                    <p role="alert" className = {styles["error"]}>Mobile Number is required</p>
                )}
                <input 
                    type="text" 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && (
                    <p role="alert" className = {styles["error"]}>Password is required</p>
                )}
                {toRegister && <div className= {styles["terms"]}>
                    <input type="checkbox"  {...register('yourCheckbox', { required: 'Please agree on terms & conditions' })}/>
                    <span>By creating an account, I agree to our terms of use and privacy policy</span>
                </div>}
                {errors.yourCheckbox && <p className={`${styles["error"]} ${styles["checkbox"]}`}>{errors.yourCheckbox.message}</p>}
                <button onClick = {toRegister ? handleSubmit(registerUser) : handleSubmit(loginUser)}>
                    {toRegister? "Create Account" : "Sign in"}
                </button>
            </form>
        </div>
    
    )
}

export default Form
