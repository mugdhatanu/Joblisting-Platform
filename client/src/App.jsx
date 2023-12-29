import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.module.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Jobs from './pages/Jobs';
import CreateJob from './pages/CreateJob';
import Job from './pages/Job';
import ProtectedRoutes from './middleware/ProtectedRoutes';
import getFromLocalStorage from './utils/localstorage/getFromLocal';
import { useState } from 'react';




function App() {
  const [user,setUser] = useState(getFromLocalStorage());
  const [jobs,setJobs] = useState(null);
  const [job,setJob] = useState(null);
  

  return (
    <Router>
     <Routes>
        <Route path = "/" element = {<Jobs jobs = {jobs} setJobs = {setJobs} user = {user} setUser = {setUser} setJob = {setJob}/>} />
        <Route path = "/createJob" element = {<ProtectedRoutes><CreateJob setJobs = {setJob} /></ProtectedRoutes>} />
        <Route path = "/:jobId" element = {<Job job = {job} setJob = {setJob} user = {user} setUser = {setUser} />} />
        <Route path = "/login" element = {<Login setUser = {setUser}/>}/>
        <Route path = "/register" element = {<Register setUser = {setUser}/>}/>
     </Routes>
    </Router>
  )
}

export default App
