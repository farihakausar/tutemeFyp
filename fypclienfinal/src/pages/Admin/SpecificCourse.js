import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import {
   
  useParams
} from "react-router-dom";
import Header from "./Header";
import axios from 'axios'
export default function SpecificCourse() {

  const [room, setRoom] = useState(null);
  const { roomid } = useParams();

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await axios.get(`/api/admin/courses/${roomid}`);
        setRoom(response.data)
        console.log(response,"hijlkjlkm")
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchCourse();
  }, [roomid]);
 
  return (
    <>
      <Header/>
      <div className="flex h-screen">
  <Sidebar />
  <div className="flex-1 bg-gray-20">
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">


          <div className="">
            <div className="mb-2 md:mb-3">
            {room ? (
              <>
              
          <div className="space-y-4">
            <div className=" overflow-hidden rounded-lg bg-gray-100">
              <img src={room.photo} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full  " />
             
            </div>
          </div>
        <span className="mb-0.5 inline-block text-customBlue font-bold text-lg lg:text-3xl">{room.courseName}</span>
        <div className="mb-8 md:mb-10">
              <span className="  font-semibold text-customBlue mb-2">Languages</span>
             
              <div className="flex flex-wrap gap-3">
                <button type="button" className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">{room.language}</button>
              
              </div>
            </div>

         

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <div className="  font-semibold text-customBlue">Technologies:</div>
              <span className="font-semibold">{room.tech}</span>
              <br />
              <div className="font-semibold text-customBlue ">Tools:</div>
              <span className="font-semibold">{room.tool}</span>
            </div>

            <div className="mt-10 md:mt-16 lg:mt-20">
              <div className="mb-3 text-lg font-semibold text-customBlue">Description</div>
              <p className="text-gray-500 italic">
               {room.courseDesc}
              </p>
             
            </div>
          {/* <p>{course.description}</p> */}
          {/* Add any other fields you want to display */}
          </>
      ) : (
        <p>Loading...</p>
      )}
           
            </div>

           

            {/* <div className="flex gap-2.5">
              <a  href={`/editcourse/`}className="inline-block flex-1  my-2 rounded-lg bg-customBlue px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Edit Course</a>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
