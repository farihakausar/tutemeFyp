import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes,
} from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';

import { Elements } from '@stripe/react-stripe-js';




import HomeSection from "../src/componenents/Homesection"
import Login from './componenents/StudentModule/HomeModule/Login';
import Signin from './componenents/StudentModule/HomeModule/Signin'
import SelectService from './componenents/StudentModule/SelectService';
import CourseDetail from './pages/courseModule/Courseinfo';
import Teacherprofile from './componenents/StudentModule/HomeModule/Teacherprofile';

import HomeTutor from './componenents/StudentModule/HomeTutor';
import OnlineHoem from './componenents/StudentModule/OnlineModule/OnlineHoem';
import Pricngoption from './componenents/StudentModule/Pricngoption';
import Onlineteacherprofile from './componenents/StudentModule/OnlineModule/Onlineteacherprofile';

import Classroom from './componenents/StudentModule/OnlineModule/Classroom';
import Vitualclassroom from './componenents/StudentModule/OnlineModule/Vitualclassroom';

import LoginTeacher from "./componenents/Teachermodule/Login"
import SignupTeacher from "./componenents/Teachermodule/Signup"

import Courese from './pages/courseModule/Courese';
import Courseinfo from './pages/Admin/Courseinfo';

import CourseEnrolled from './pages/courseModule/CourseEnrolled';
import CourseMateril from './pages/courseModule/CourseMateril';
import Teacher from './pages/Admin/Teacher';
import AdminPanelLayout from './pages/Admin/AdminPanelLayout';
import TeacherDeatil from './pages/Admin/TeacherDeatil';
import SpecificCourse from './pages/Admin/SpecificCourse';
import Editcourse from './pages/Admin/Editcourse';
import EditProfile from './componenents/StudentModule/HomeModule/EditProfile';
import HomeClass from './componenents/StudentModule/HomeModule/HomeClass';
import Chat from './componenents/StudentModule/HomeModule/Chat';
import MyHometutor from './componenents/StudentModule/HomeModule/MyHometutor';

import Service from './componenents/Teachermodule/HomeModule/Service';
import AddHomeService from './componenents/Teachermodule/HomeModule/AddHomeService';
import Homeclasses from './componenents/Teachermodule/HomeModule/Homeclasses';
import Techeraddedhome from './componenents/Teachermodule/HomeModule/Techeraddedhome';

import SpecificService from './componenents/Teachermodule/HomeModule/SpecificService';



import PaymentOnlinemodule from './componenents/StudentModule/OnlineModule/PaymentOnlinemodule';
import SpecifcTutor from './componenents/StudentModule/OnlineModule/SpecifcTutor';
import VideoStream from './componenents/StudentModule/OnlineModule/VideoStream';
import AddOnlineService from './componenents/Teachermodule/OnlineModule/AddOnlineService';
import Techeraddedonline from './componenents/Teachermodule/OnlineModule/Techeraddedonline';
import SpecificOnlineService from './componenents/Teachermodule/OnlineModule/SpecificOnlineService';
const stripePromise = loadStripe('pk_test_51Og5cTJ7pz3TsDzfr8KUrFFeovdGHs9Twln1FzSrz5sVjSkMUTCufwvxbBwRpD4ZLlXmcau0lyUvnvL1j7Q8r97Q006SSFMfx3');
function App() {
  return (
    <>
  


 <Elements stripe={stripePromise}> 


    
   
   <Routes>
    {/* student home*/}
        <Route path="/" element={<HomeSection/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/teacherprofile/:id" element={<Teacherprofile/>} />
        <Route path="/onlineteacherprofile/:id" element={<Onlineteacherprofile/>} />
       
    
        
       <Route path="/payment/:userId/:teacherId/:price" element={<Pricngoption/>} />
<Route path="/paymentdone/:userId/:teacherId/:price" element={<PaymentOnlinemodule/>} />
        
         <Route path="/homeclass/:teacherId" element={<HomeClass/>} />
         <Route path="/selectservice" element={<SelectService/>} />
         <Route path="/chat" element={<Chat/>} />
         <Route path="/myhometutors" element={<MyHometutor/>} />
       
         <Route path="/specifiteacher/:teacherIdd" element={<SpecifcTutor/>} />
         <Route path="/chatonline/:teacherIdd" element={<Classroom/>} />
         <Route path="/videostearm" element={<VideoStream/>} />
      {/*  */}
    
      {/* tutor home  */}
      <Route path="/loginTeacher" element={< LoginTeacher/>} />
         <Route path="/signupTeacher" element={<SignupTeacher/>} />
         <Route path="/service" element={<Service/>} />
         <Route path="/addhomeservice/:teacherId" element={<AddHomeService/>} />
         <Route path="/teacheraddedservices/:teacherId" element={<Techeraddedhome/>} />
         <Route path="/homeclasses" element={<Homeclasses/>} />
        
         <Route path="/specificService/:teacherId" element={<SpecificService/>} />


         <Route path="/homeTutor" element={<HomeTutor/>} />
      
         <Route path="/virtualclassroom/:teacherIdd" element={<Vitualclassroom/>} />
    
         <Route path="/onlineHome" element={<OnlineHoem/>} />
      
        {/* tutor online */}
        <Route path="/addonlineservice/:teacherId" element={<AddOnlineService/>} />
      
       <Route path="/teacheronlineservices/:teacherId" element={<Techeraddedonline/>} />
  
       <Route path="/specifconline/:teacherIdd" element={<SpecificOnlineService/>} />
        

     

     
 {/* student course*/}
   
     <Route path="/courese" element={<Courese/>} />
     <Route path="/coursedetail/:id" element={<CourseDetail/>} />
     <Route path="/enrolled" element={<CourseEnrolled/>} />
     <Route path="/coursemat/:id" element={<CourseMateril/>} />
     {/* admin */}
     <Route path="/courseinfo" element={<Courseinfo/>} />
     <Route path="/dashboard" element={<AdminPanelLayout/>} />

     <Route path="/infoteacher" element={<Teacher/>} />
     <Route path="/detailteacher/:id" element={<TeacherDeatil/>} />
     <Route path="/specificCourse/:roomid" element={<SpecificCourse/>} />
     <Route path="/editcourse/:roomid" element={<Editcourse/>} />
     </Routes>     </Elements>
    
     </>
  );
}

export default App;
