import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchOutlined } from '@ant-design/icons';
import Header from "../../componenents/Header";
import bgImage from "../../assests/bg5.jpeg";
import Footer from "../../componenents/Footer";
export default function Courese() {
  const [courses, setCourses] = useState([]);
  const [id, setId] = useState([]);
  const [searchkey, setsearchkey] = useState('')
 
  const [duplicaterooms, setduplicaterooms] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        // setloading(true)
        const data = await (await axios.get("/api/admin/getallcourses")).data;
        setCourses(data);
        setduplicaterooms(data)
        setId(data._id);
       
      } catch (err) {
      
        console.log(err);
       
      }
    }

    fetchMyAPI();
  
  }, []);
  function filterbyserach(){
    const temproom=duplicaterooms.filter(rooms=>rooms.courseName.toLowerCase().includes(searchkey.toLowerCase()))
    setCourses(temproom)
    }
  return (
    <>
    <Header/>
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl ">
    

    <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
     
      <img src={bgImage} loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center" />
     

     
      <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
     
      <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
        {/* <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p> */}
        <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Online courses</h1>

      </div>
  
    </section>
  </div>
</div>
<div className="container mx-auto mt-4">
<div class="relative mb-4">
    <label for="name" class="leading-7 text-sm text-gray-600"></label>
    {/* <div class="flex items-center">
        <input type="text" id="name" name="name" placeholder="Search here" class="w-full bg-white rounded-l-md border italic border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <button type="submit" class="bg-indigo-500 text-white rounded-r-md p-2">
        <SearchOutlined />
        </button>

    </div> */}
       <div class="flex items-center">
         {/* <input type="text" id="name" name="name" placeholder="Search here" class="w-full bg-white rounded-l-md border italic border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}
        <button type="submit" class="bg-indigo-500 text-white rounded-r-md p-2">
        <SearchOutlined />
        </button>
        <input type="text"className="form-control bs"placeholder="Search by subject"  class="w-full bg-white rounded-l-md border italic border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filterbyserach}/>
        
    </div>
</div>
    </div>
 













    
    
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
  
     
     
  
      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
       
      {courses.length &&
  courses.map((course, index) => (
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href={`/coursedetail/${course._id}`}  class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src={course.photo} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href={`/coursedetail/${course._id}`}  class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{course.courseName} </a>
            </h2>
  
            <p class="mb-8 text-gray-500"> {course.courseDesc} </p>
  
            <div class="mt-auto flex items-end justify-between">
              <div class="flex items-center gap-2">
               
  
                <div>
                  <span class="block text-indigo-500"> {course.tech}</span>
                  <span class="block text-sm text-gray-400">{course.tool}</span>
                </div>
              </div>
  
              <span class="rounded border px-2 py-1 text-sm text-gray-500 font-bold">{course.language}</span>
            </div>
          </div>
        </div>
     
    ))
  }
     
       
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}
