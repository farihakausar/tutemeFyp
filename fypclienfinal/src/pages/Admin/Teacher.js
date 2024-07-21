import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useParams } from 'react-router-dom'; 
import { Tabs } from "antd";
import Header from "./Header";

function Teacher() {

  return (
    <>
    <Header/>
    <div className="flex h-screen">
     
    <Sidebar />
    <div className="flex-1 bg-gray-200">
    <div className=" text-center">
    <h5  className=" text-center text-customBlue font-medium italic" style={{ fontSize: "50px" }}>Teachers 
      </h5>
   
    
      <div className="p-6">
        
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane  tab={<span style={{ color: '#FF6347',fontStyle:"italic"  }}>RequestTeacher</span>}   key="1">
            <RequestTeacher/>
          </Tabs.TabPane>
          <Tabs.TabPane   tab={<span style={{ color: '#FF6347',fontStyle:"italic"  }}> ApprovedTeacher</span>} key="2">
            <ApprovedTeacher />
          </Tabs.TabPane>
       
        </Tabs>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Teacher;


export function RequestTeacher() {
  
  const [rooms, setrooms] = useState([]);
  const[id,SetId]=useState()
  
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        // setloading(true)
        const data = await (await axios.get("/api/teacher/service-requestpending")).data;
        setrooms(data);
        SetId(data._id);
console.log(id,"jilj;ok;ok;lmk;lk;")
       
      } catch (err) {
      
        console.log(err);
       
      }
    }

    fetchMyAPI();
  }, []);
  return (
    <div className="row">
        <div className="col-md-10">
          
        <h6 className=" text-center mb-2 text-customBlue font-medium italic" style={{ fontSize: "20px" }}>Requested Teacher </h6>
             {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
             <table className="table table-bordered bg-blue-500 rounded-md" style={{   outline: '1px solid #4F46E5',color: 'white', fontWeight: 'bold' }}>
            <thead className="thead-dark">
            <tr style={{ fontFamily: 'Arial', fontStyle: 'italic', color: 'blue', color:"white" }}>
                  <th> Service Name</th>
                  <th> About Service </th>
                  <th>Service Timing</th>
                    <th>Service Price</th>
                    <th>About Teacher</th>
                    <th>Status</th>
                    {/* <th>tecaher</th> */}
                   
                   
               
                  
                  {/* <th>Completed on </th>
                  <th>Certificate dwonload</th> */}
                  </tr>
               </thead>
               <tbody>
              {rooms.length &&
                rooms.map((room) => {
                  return (
                    <>
                      <tr>
                     
                        <td><a href={`/detailteacher/${room._id}`}>{room.course}</a></td>
                        <td><a href={`/detailteacher/${room._id}`}>{room.about}</a></td>
                        <td><a href={`/detailteacher/${room._id}`}>{room.timing}</a></td>
                        <td><a href={`/detailteacher/${room._id}`}>{room.price}</a></td>
                     
                       
                     
                      
                   
                     
                        <td><a href={`/detailteacher/${room._id}`}>{room.educationDetail}</a></td>
                        <td><a href={`/detailteacher/${room._id}`}>{room.status}</a></td>
                        <div className="flex gap-2.5">
            
            </div>
                      </tr>
                    </>
                  );
                })}
            </tbody>
                <tbody>
                {/* {bookings.length &&
                    bookings.map((booking) => {
                      return (
                        <>
                          <tr>
                            <td>{booking._id}</td>
                            <td>{booking.userid}</td>
                            <td>{booking.room}</td>
                            <td>{booking.fromdate}</td>
                            <td>{booking.todate}</td>
                            <td>{booking.status}</td>
                          </tr>
                        </>
                      );
                    })} */}
                     
      

                </tbody>
              </table>
            </div>
          </div>
  )
}


export function ApprovedTeacher () {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        // setloading(true)
        const data = await (await axios.get("/api/teacher/service-request-approved")).data;
        setrooms(data);
       
      } catch (err) {
      
        console.log(err);
       
      }
    }

    fetchMyAPI();
  }, []);
  return (
    <div className="row">
        <div className="col-md-10">
             <h6 className=" text-center mb-2 text-customBlue font-medium italic" style={{ fontSize: "20px" }}>ApprovedTeacher </h6>
           
             {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
             <table className="table table-bordered bg-blue-500 rounded-md" style={{   outline: '1px solid #4F46E5',color: 'white', fontWeight: 'bold' }}>
            <thead className="thead-dark">
                 <tr>
                 <th> Service Name</th>
                  <th> About Service </th>
                  <th>Service Timing</th>
                    <th>Service Price</th>
                    <th>Address</th>
                    <th>About Teacher</th>
                    <th>Status</th>
                  </tr>
               </thead>
               <tbody>
               {rooms.length &&
                rooms.map((room) => {
                  return (
                    <>
                       <tr>
                     
                     <td><a href={`/detailteacher/${room._id}`}>{room.course}</a></td>
                     <td><a href={`/detailteacher/${room._id}`}>{room.about}</a></td>
                     <td><a href={`/detailteacher/${room._id}`}>{room.timing}</a></td>
                     <td><a href={`/detailteacher/${room._id}`}>{room.price}</a></td>
                     <td><a href={`/detailteacher/${room._id}`}>{room.address}</a></td>
                  
                    
                  
                   
                
                  
                     <td><a href={`/detailteacher/${room._id}`}>{room.educationDetail}</a></td>
                     <td><a href={`/detailteacher/${room._id}`}>{room.status}</a></td>
                     <div className="flex gap-2.5">
         
         </div>
                   {/* </tr>
                      <tr> */}
                        {/* <td><a href={`/specificCourse/${room._id}`}>{room._id}</a></td> */}
                      
                      
              {/* <a  href={`/editcourse/${room._id}`}className="inline-block flex-1  my-2 rounded-lg bg-customBlue px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Edit Course</a> */}
              {/* <a  href='/detailteacher' className="inline-block flex-1  my-2 rounded-lg bg-customBlue px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Edit Course</a> */}
            
                      </tr>
                    </>
                  );
                })}
                </tbody>
              </table>
            </div>
          </div>
  )
}

