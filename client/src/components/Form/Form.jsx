import styles from './Form.module.css'
import axios from 'axios'
import { useForm } from "react-hook-form"



const Form = ({toRegister}) => {

    const {register,handleSubmit,formState: { errors }} = useForm();

    const loginUser = async(data) => {
        const user = {email: data.email,password: data.password}
        try {
            const res = await axios.post('http://localhost:3000/user/login',user);
            console.log(res);
        } catch(err) {
            console.log(err);
        }
    }

    const registerUser = async() => {
        const user = {email: formInputs.email,password: formInputs.password,name: formInputs.name, mobile: formInputs.mobile}
        try {
            const res = await axios.post('http://localhost:3000/user/register',user);
            console.log(res);
        } catch(err) {
            console.log(err);
        }
    }


     
    return (
        <div className = {styles["form"]}>
            <p>Your personal job finder is here</p>
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
