import React, { useState, useEffect } from "react";
import axios from "axios";


import { Tabs } from "antd";

function CourseEnrolled() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setloading] = useState();
//   const [error, seterror] = useState([]);
//   useEffect(() => {
//        if(!JSON.parse(localStorage.getItem("user")).isAdmin){
//     window.location.href="/home"
//        }
//           }, [])

  return (
    <div className=" text-center">
      <h5 style={{ fontSize: "50px" }}>your course details 
      </h5>
   
    
      <div className="p-6">
        
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="CompletedCourse" key="1">
            <CompletedCourse/>
          </Tabs.TabPane>
          <Tabs.TabPane tab=" Enrolled" key="2">
            <Enrolled />
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
  );
}

export default CourseEnrolled;


export function CompletedCourse() {
  return (
    <div className="row">
        <div className="col-md-10">
             <h6>CompletedCourse</h6>
           
             {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
            <table className="table table-bordered table-dark">
            <thead className="thead-dark">
            <tr>
                  <th>Course Nmae</th>
                    <th>Course stack</th>
                   
                     <th>Enrolled on</th>
                  <th>grades</th>
                  
                  <th>Completed on </th>
                  <th>Certificate dwonload</th>
                  </tr>
               </thead>
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
                     
                          <tr>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                           
                          </tr>
                     
                </tbody>
              </table>
            </div>
          </div>
  )
}


export function Enrolled () {
  return (
    <div className="row">
        <div className="col-md-10">
             <h6>Enrolled cousrese</h6>
           
             {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
            <table className="table table-bordered table-dark">
            <thead className="thead-dark">
                 <tr>
                  <th>Course Nmae</th>
                    <th>Course stack</th>
                   
                     <th>Enrolled on</th>
                  <th>To</th>
                  <th>Course status</th>
                  </tr>
               </thead>
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
                     
                          <tr>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            <td>this</td>
                            
                           
                          </tr>
                     
                </tbody>
              </table>
            </div>
          </div>
  )
}

