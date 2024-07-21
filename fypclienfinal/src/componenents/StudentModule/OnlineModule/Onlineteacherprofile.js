import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'; 
import Header from '../../Header';
import Footer from '../../Footer';
import axios from 'axios'
import { EnvironmentOutlined, ClockCircleOutlined, StarFilled ,DollarOutlined} from '@ant-design/icons';

export default function Onlineteacherprofile() {
  const [teacherRequest, setTeacherRequest] = useState(null);
  const [teacherId,  setTeacherId] = useState();
  const { id } = useParams(); 
  const [userData,setUserData]=useState()
  const [userId,setUserId]=useState()
  const [price,setPrice]=useState()
  const getPdf= async()=>{
    try {
      const resgh=await fetch('/api/users/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },credentials:"include"
      })
      const data =await resgh.json()
      setUserData(data)
      setUserId(data._id)
      console.log(data,"datafromabout")
      if(!res.status===200){
        const error=new Error(res.error)
        throw error

      }
    } catch (error) {
      // history.push("/login")
      console.log("nkljkl")
    }
  }

  useEffect(() => {
    const fetchTeacherRequest = async () => {
      try {
        const response = await axios.get(`/api/teacher/teacher-request/approve/${id}`);
        setTeacherRequest(response.data);
        setTeacherId(response.data._id);
        setPrice(response.data.price);
        console.log("teacher speicf",response.data)
      } catch (error) {
        console.error('Error fetching teacher request:', error);
        // Handle any errors or display error messages here
      }
    };

    // Call the fetchTeacherRequest function when the component mounts
    getPdf();
    fetchTeacherRequest();

    // Clean up function (optional)
    return () => {
      // Any cleanup code here, if needed
    };
  }, []);
  
  return (
  
<>
  <Header />
  {teacherRequest && (
    <>
      <div className="min-w-0 bg-gray-100 flex-1"></div>
      <div class="p-4 lg:w-1/2 rounded-lg">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center  sm:text-left">
          <img
            alt="team"
            class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={teacherRequest.photo}
          />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-customBlue">
              {teacherRequest.name}
            </h2>
            <h2 class="title-font font-medium text-lg text-customBlue">
             {teacherRequest.course}
            </h2>
            <h3 class="text-gray-500 mb-3">
              {/* <StarFilled className="mr-2" />  */}
            </h3>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
             
              
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <DollarOutlined className="mr-2" /> {teacherRequest.price}
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="p-12 mt-4 bg-customBlue rounded-md shadow-lg">
      <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mb-2">About teacher</h2>
        <p class="leading-relaxed mb-8 text-white"> {teacherRequest.educationDetail}
      <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mb-2">About Service</h2>
        <p class="leading-relaxed mb-8 text-white"> {teacherRequest.about}</p>
        
      
       
        </p>
      </div>
    

      <div class="lg:w-1/3 md:w-1/2 flex flex-row md:m-auto w-full md:py-8 mt-8 md:mt-0">
        <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a  href={`/paymentDone/${userId}/${teacherId}/${price}`}>Book</a></button>
       
        {/* <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/createchat'>Chat</a></button> */}
      </div>
      </>
  )}
  <Footer />
</>

  )
}
