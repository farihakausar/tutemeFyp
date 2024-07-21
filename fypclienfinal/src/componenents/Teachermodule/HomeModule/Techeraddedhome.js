import React ,{useState,useEffect} from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import axios from "axios";
import { useParams } from 'react-router-dom'; 
import { Tabs } from "antd";
import { RiDeleteBin6Line } from 'react-icons/ri'; 
export default function Techeraddedhome() {
  
   
      
 
        return (
          <>
          <Header/>
          <div className="p-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-xl font-bold tracking-tight text-customBlue text-center sm:text-4xl">My services</h2>
              
            </div>
            <div className='text-center'>
          
        <Tabs defaultActiveKey="1" >
          <Tabs.TabPane tab="ApprovedServices" key="1">
            <ApprovedServices/>
          </Tabs.TabPane>
          <Tabs.TabPane tab=" PendingServices" key="2">
            <PendingServices />
          </Tabs.TabPane>
         
          {/* <Tabs.TabPane tab=" add Room" key="3">
            <Addrooms />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Users" key="4">
            <User />
          </Tabs.TabPane> */}
        </Tabs>
         </div>
      </div>
       
<Footer/>
          </>
        )
      }
      
      export function ApprovedServices() {
        const { teacherId } = useParams(); 
        const posts = [
          {
            id: 1,
            title: 'Boost your conversion rate',
            href: '#',
            description:
              'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
              name: 'Michael Foster',
              role: 'Co-Founder / CTO',
              href: '#',
              imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          },
          // More posts...
        ]
        const [teacher, setTeacher] = useState([]);
        const [teacherIdd, setTeacherIdd] = useState([]);

        useEffect(() => {
          async function fetchMyAPI() {
            try {
              // setloading(true)
            
              const response  = await (await axios.get( `/api/teacher/teacher-requestsapprove/${teacherId}`));
              const data = response.data.serviceRequests; // Access the array of service requests
              console.log("Received data:", data);
              // Iterate over the array and set each item individually
              data.forEach(request => {
                setTeacher(prevState => [...prevState, request]); // Add the request to the teacher state
                setTeacherIdd(prevState => [ request._id]); // Add the request to the teacher state
                // setTeacherIdd(data._id);  Add the request to the teacher state
              });
              
            } catch (err) {
            
              console.log(err);
             
            }
          }
      
          fetchMyAPI();
        }, []);
        return (
          <div className="bg-white  ">
          <div className="mx-auto  px-2">
            
            <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {teacher.length &&
                teacher.map((post) => {
                  return (
                    <>
                
              <a href={`/specificService/${teacherIdd}`}> <article className="flex max-w-xl  rounded-lg border-dashed border-2 p-4 flex-col items-start justify-between bg-customBlue text-white transition-transform duration-300 transform hover:scale-105">
  <div className="flex items-center gap-x-4 text-xs">
    <a
  
      className="relative z-10 rounded-full bg-gray-50 px-3 font-medium text-black hover:bg-gray-100"
    >
      {post.status}
    </a>
  </div>
  <div className="group relative">
    <h3 className="mt-3 text-lg  leading-6 text-white group-hover:text-gray-600 italic font-bold">
    
        <span className="absolute inset-0" />
        {post.course}
      
    </h3>
    <p className="line-clamp-3 text-sm leading-6 text-white ">
      {post.educationDetail}
    </p>
    <p className="line-clamp-3 text-sm leading-6 text-white font-bold">
      Price: {post.price}
    </p>
    <p className="line-clamp-3 text-sm leading-6 text-white font-bold">
      Address: {post.address}
    </p>
    <p className="line-clamp-3 text-sm leading-6 text-white italic font-bold">
      Timing: {post.timing}
    </p>
  </div>
</article>
</a> 
                </>
                  );
                })}
            </div>
            <div className="mt-10">
        <button
          type="submit"
          className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
       {/*  <a href={`/addhomeservice/${teacherId}`}>  Add more course </a>  */}
       <a href={`/addhomeservice/${teacherId}`}>  Add more course </a> 
        </button>
          </div>
          </div>
        </div>
        )
      }
      
      
      export function PendingServices () {
        const { teacherId } = useParams(); 
        const [teache, setTeache] = useState([]);
        useEffect(() => {
          async function fetchMyAPI() {
            try {
              // setloading(true)
              const response  = await (await axios.get( `/api/teacher/teacher-requestspending/${teacherId}`));
              const data = response.data.serviceRequests; // Access the array of service requests
              console.log("Received data:", data);
              // Iterate over the array and set each item individually
              data.forEach(request => {
                setTeache(prevState => [...prevState, request]); // Add the request to the teacher state
              });
             console.log(data,"datahkhkljhk")
            } catch (err) {
            
              console.log(err);
             
            }
          }
      
          fetchMyAPI();
        }, []);
        const posts = [
          {
            id: 1,
            title: 'Boost your conversion rate',
            href: '#',
            description:
              'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
              name: 'Michael Foster',
              role: 'Co-Founder / CTO',
              href: '#',
              imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          },
          // More posts...
        ]
        return (
          <div className="bg-white  ">
          <div className="mx-auto  px-2">
            
            <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* {teache.map((post) => ( */}
            {teache.length &&
                teache.map((post) => {
                  return (
                    <>
                
                <article className="flex max-w-xl  rounded-lg border-dashed border-2 p-4 flex-col items-start justify-between bg-customBlue text-white transition-transform duration-300 transform hover:scale-105">
                {/* <button
    // onClick={() => handleDelete(post._id)} // Call handleDelete function with post ID
    className="absolute top-2 right-2 text-white hover:text-red-500"
  >
    <RiDeleteBin6Line />
  </button> */}
  <div className="flex items-center gap-x-4 text-xs">
    <a
      // href='/specificService'
      className="relative z-10 rounded-full bg-gray-50 px-3 font-medium text-black hover:bg-gray-100"
    >
      {post.status}
    </a>
  </div>
  <div className="group relative">
    <h3 className="mt-3 text-lg  leading-6 text-white group-hover:text-gray-600 italic font-bold">
      <a href='/specificService'>
        <span className="absolute inset-0" />
        {post.course}
      </a>
    </h3>
    <p className="line-clamp-3 text-sm leading-6 text-white ">
      {post.educationDetail}
    </p>
    <p className="line-clamp-3 text-sm leading-6 text-white font-bold">
      Price: {post.price}
    </p>
    <p className="line-clamp-3 text-sm leading-6 text-white font-bold">
      Address: {post.address}
    </p>
    <p className="line-clamp-3 text-sm leading-6 text-white italic font-bold">
      Timing: {post.timing}
    </p>
  </div>
</article>

                </>
                  );
                })}
             
            </div>
            <div className="mt-10">
        <button
          type="submit"
          className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
       {/*  <a href={`/addhomeservice/${teacherId}`}>  Add more course </a>  */}
       <a href={`/addhomeservice/${teacherId}`}>  Add more course </a> 
        </button>
          </div>
          </div>
        </div>
        )
      }