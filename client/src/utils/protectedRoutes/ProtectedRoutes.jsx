import { Navigate } from "react-router-dom";
import getFromLocalStorage from "../localstorage/getFromLocal"


const ProtectedRoutes = ({children}) => {
    const token = getFromLocalStorage();
    return token ? children : <Navigate to = "/login" />
}

export default ProtectedRoutes
