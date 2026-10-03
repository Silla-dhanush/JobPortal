import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './cpmponents/layout/Navbar'
import Home from './cpmponents/pages/Home'
import DisplayJobs from './cpmponents/pages/displayJobs'
import Footer from './cpmponents/layout/footer'
import DisplayCourses from './cpmponents/pages/displayCourses'
import JobApplication from './cpmponents/pages/jobApplication'
import Login from './cpmponents/pages/login'
import Register from './cpmponents/pages/register'
import CoursesRegister from './cpmponents/pages/coursesRegister'
import PostJob from './cpmponents/pages/postJob'
import MyPostedJobs from './cpmponents/pages/MyPostedJobs'
import MyAppliedJobs from './cpmponents/pages/MyAppliedJobs'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<DisplayJobs />} />
        <Route path="/courses" element={<DisplayCourses />} />
        <Route path="/apply/:id" element={<JobApplication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses/register/:id" element={<CoursesRegister />} />
        <Route path="/postJob" element={<PostJob/>} />
        <Route path="/myPostedJobs" element={<MyPostedJobs/>} />
        <Route path="/myAppliedJobs" element={<MyAppliedJobs/>} />
      </Routes>
      <Footer />
    </Router>
  )
}


export default App
