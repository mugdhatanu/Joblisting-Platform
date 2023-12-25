import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.module.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Jobs from './pages/Jobs';
import CreateJob from './pages/CreateJob';
import Job from './pages/Job';
import ProtectedRoutes from './middleware/ProtectedRoutes';




function App() {

  return (
    <Router>
     <Routes>
        <Route path = "/" element = {<Jobs />} />
        <Route path = "/createJob" element = {<ProtectedRoutes><CreateJob /></ProtectedRoutes>} />
        <Route path = "/:jobId" element = {<Job />} />
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/register" element = {<Register />}/>
     </Routes>
    </Router>
  )
}

export default App
