const express = require('express');
const {register,login,createJob, editJob, listJobs, jobDetails} = require('./../controllers/userControllers');
const requireAuth = require('./../middleware/requierAuth');

const router = express.Router();

router.get('/getJobs',listJobs);
router.get('/getJob/:jobId',jobDetails);
router.post('/register',register);
router.post('/login',login);
router.post('/create',requireAuth,createJob);
router.put('/edit',requireAuth,editJob);


module.exports = router;