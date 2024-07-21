// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { UserOutlined, PictureOutlined } from '@ant-design/icons';
// // // import Sidebar from "./Sidebar";
// // import { Tabs } from "antd";

// // function Homeclasses() {

// //   return (
// //     <div className="flex h-screen">
// //     {/* <Sidebar /> */}
// //     <div className="flex-1 bg-gray-20">
// //     <div>
// //       <h5  className=" text-center" style={{ fontSize: "50px" }}>your course details
// //       </h5>

// //    <div className="p-6">

// //         <Tabs defaultActiveKey="1">
// //           <Tabs.TabPane tab="StartedandPaying" key="1">
// //             <StartedandPaying/>
// //           </Tabs.TabPane>
// //           <Tabs.TabPane tab=" Added Course" key="2">
// //             <AddedCourse />
// //           </Tabs.TabPane>
// //           {/* <Tabs.TabPane tab=" add Room" key="3">
// //             <Addrooms />
// //           </Tabs.TabPane>
// //           <Tabs.TabPane tab="Users" key="4">
// //             <User />
// //           </Tabs.TabPane> */}
// //         </Tabs>
// //       </div>

// //     </div>
// //     </div>
// //     </div>
// //   );
// // }

// // export default Homeclasses;

// // export function StartedandPaying() {

// //   const [courseName, setCourseName] = useState('');
// //   const [courseDesc, setCourseDesc] = useState('');
// //   const [language, setLanguage] = useState('English');
// //   const [videoURL, setVideoURL] = useState('');
// //   const [tech, setTech] = useState('');
// //   const [tool, setTool] = useState('');
// //   const [pptFile, setPptFile] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const formData = new FormData();
// //       formData.append('courseName', courseName);
// //       formData.append('courseDesc', courseDesc);
// //       formData.append('language', language);
// //       formData.append('videoURL', videoURL);
// //       formData.append('tech', tech);
// //       formData.append('tool', tool);
// //       // if (pptFile) {
// //       //   formData.append('pptFile', pptFile);
// //       // }

// //       const response = await axios.post('http://localhost:5000/api/admin/courses', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data'
// //         }
// //       });

// //       console.log('Course added successfully:', response.data);
// //       // Reset form fields
// //       setCourseName('');
// //       setCourseDesc('');
// //       setLanguage('English');
// //       setTech('');
// //       setTool('');
// //       setVideoURL('');
// //       // setPptFile(null);
// //       console.log("doennknlk")
// //     } catch (error) {
// //     console.log("hkln")
// //       console.error('Error adding course:', error);
// //     }
// //   };
// //   return (

// //     <div className="row">
// //         <div className="col-md-10">
// //              <h6>Added Course cousrese</h6>

// //              {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
// //             <table className="table table-bordered table-dark">
// //             <thead className="thead-dark">
// //                  <tr>
// //                   <th>Course Nmae</th>
// //                     <th>technlogies</th>

// //                      <th>tools</th>
// //                   <th>desc</th>
// //                   <th> enrolled studenst</th>
// //                   </tr>
// //                </thead>
// //                 <tbody>

// //                           <tr>
// //                           <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>

// //                           </tr>

// //                 </tbody>
// //               </table>
// //               <div className="mt-10">
// //           <button
// //             type="submit"
// //             className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //           >
// //          <a href="/addhomeservice">  Add more course </a>
// //           </button>
// //             </div>
// //             </div>
// //           </div>
// //   );
// // }

// // export function AddedCourse () {
// //   return (
// //     <div className="row">
// //         <div className="col-md-10">
// //              <h6>Added Course cousrese</h6>

// //              {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
// //             <table className="table table-bordered table-dark">
// //             <thead className="thead-dark">
// //                  <tr>
// //                   <th>Course Nmae</th>
// //                     <th>technlogies</th>

// //                      <th>tools</th>
// //                   <th>desc</th>
// //                   <th> enrolled studenst</th>
// //                   </tr>
// //                </thead>
// //                 <tbody>

// //                           <tr>
// //                           <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>
// //   <td><a href="/specificService">this</a></td>

// //                           </tr>

// //                 </tbody>
// //               </table>
// //               <div className="mt-10">
// //           <button
// //             type="submit"
// //             className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //           >
// //          <a href="/addhomeservice">  Add more course </a>
// //           </button>
// //             </div>
// //             </div>
// //           </div>
// //   )
// // }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Tabs } from "antd";

// function Homeclasses() {
//   return (
//     <div className="flex h-screen">
//       <div className="flex-1 bg-gray-20">
//         <div>
//           <h5 className="text-center" style={{ fontSize: "50px" }}>
//             Your Course
//           </h5>
//           <div className="p-6">
//             <Tabs defaultActiveKey="1">
//               <Tabs.TabPane tab="Started and Paying" key="1">
//                 <StartedandPaying />
//               </Tabs.TabPane>
//               {/* <Tabs.TabPane tab="Added Course" key="2">
//                 <AddedCourse />
//               </Tabs.TabPane> */}
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homeclasses;

// export function StartedandPaying() {
//   const [courses, setCourses] = useState([]);
//   const studentId = "666168005c002b170d6344d6"; // Replace with the actual student ID

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(
//           `/api/users/enrolled-courses/${studentId}`
//         );
//         setCourses(response.data.courses);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, [studentId]);

//   return (
//     <>
//       <div>
//         <h2 className="sm:text-3xl text-2xl m-5 title-font font-medium mb-2 p-3">
//           Students
//         </h2>
//         <div className="grid grid-cols-2 m-5 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
//           {courses.length > 0 ? (
//             <ul>
//               {courses.map((student) => (
//                 <li
//                   key={student._id}
//                   className="flex justify-between gap-x-6 py-5"
//                 >
//                   <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
//                     <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
//                       <img
//                         src={student.photo}
//                         loading="lazy"
//                         alt="Photo by christian ferrer"
//                         className="h-full w-full object-cover object-center"
//                       />
//                     </div>
//                     <div>
//                       <div className="text-center font-bold text-indigo-500 md:text-lg">
//                         {student.course}
//                       </div>
//                       <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
//                         {student.about}
//                       </p>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No students enrolled</p>
//           )}
//         </div>
//       </div>
//     </>
//     // <div className="row">
//     //   <div className="col-md-10">
//     //     <h6>Enrolled Courses</h6>
//     //     <table className="table table-bordered table-dark">
//     //       <thead className="thead-dark">
//     //         <tr>
//     //           <th>Course Name</th>
//     //           <th>Technologies</th>
//     //           <th>Tools</th>
//     //           <th>Description</th>
//     //           <th>Enrolled Students</th>
//     //           <th>Details</th>
//     //         </tr>
//     //       </thead>
//     //       <tbody>
//     //         {courses.map((course) => (
//     //           <tr key={course._id}>
//     //             <td>{course.course}</td>
//     //             <td>{course.tech}</td>
//     //             <td>{course.tool}</td>
//     //             <td>{course.about}</td>
//     //             <td>{course.users.length}</td>
//     //             <td>
//     //               <a href={course.pptFile}>View PPT</a>
//     //             </td>
//     //           </tr>
//     //         ))}
//     //       </tbody>
//     //     </table>
//     //     <div className="mt-10">
//     //       <button
//     //         type="button"
//     //         className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
//     //       >
//     //         <a href="/addhomeservice">Add more course</a>
//     //       </button>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }

import React from "react";

export default function Homeclasses() {
  return <div>Homeclasses</div>;
}
