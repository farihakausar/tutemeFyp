
import React, { useEffect, useState } from "react";
import img1 from "../.././assests/course.jpeg";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

export default function SelectService() {
  const [userData,setUserData]=useState()
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
    getPdf();
  }, []);
  
 
  return (
  
    <>
      <Header />
      {userData ? (
       <>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            
            <img
              className="rounded-lg w-full h-auto object-cover object-center"
              src={userData.photo}
              alt="Profile"
            />
          </div>

          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl font-medium text-gray-900 mb-4">
              {userData.nameing}
            </h2>
            
            <p className="text-gray-600 mb-4">
            Email: {userData.email}
            </p>
           
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
               About
              </h2>
              <p className="text-gray-600 leading-relaxed">
               {userData.about}
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Interested Subjects :
              </h2>
              <p className="text-gray-600 leading-relaxed">
              {userData.interestedSubjects}
              </p>
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">
                Select Service
              </h2>
              <div className="flex flex-col space-y-4">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg">
                  <a class="text-white" href="/homeTutor">
                    Home Tutor
                  </a>
                </button>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg">
                  <a class="text-white" href="/onlineHome">
                    Online Tutor
                  </a>
                </button>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg">
                  <a class="text-white" href="/courese">
                    Online Course
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </> ):
         <p className='text-black'>losdpkp</p>
            }
  
  <Footer/>
    </>
    
  );
}

