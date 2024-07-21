// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../../componenents/Header";
// import Footer from "../../componenents/Footer";
// import courseImg from "../../assests/coursem.jpeg";
// import { Tabs } from "antd";
// import { useParams } from "react-router-dom";
// export default function CourseMateril() {
//   const { id } = useParams();
//   const [teacherRequest, setTeacherRequest] = useState(null);

//   useEffect(() => {
//     const fetchTeacherRequest = async () => {
//       try {
//         const response = await axios.get(`/api/admin/courses/${id}`);
//         setTeacherRequest(response.data);

//         // setCourseId(response.data._id);
//         console.log("teacher speicf", response.data._id);
//       } catch (error) {
//         console.error("Error fetching teacher request:", error);
//         // Handle any errors or display error messages here
//       }
//     };

//     // Call the fetchTeacherRequest function when the component mounts

//     fetchTeacherRequest();

//     // Clean up function (optional)
//     return () => {
//       // Any cleanup code here, if needed
//     };
//   }, []);
//   // const embedURL = teacherRequest.videoURL.replace("watch?v=", "embed/");
//   return (
//     <>
//       <Header />
//       <div class="bg-white py-6 sm:py-8 lg:py-12">
//         <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
//           {teacherRequest && (
//             <>
//               <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row ">
//                 <div class="order-first h-48 md:h-80 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
//                   <img
//                     src={teacherRequest.photo}
//                     loading="lazy"
//                     alt="Photo by Andras Vas"
//                     class="h-full w-full object-cover object-center"
//                   />

//                   <div className="md:p-8">
//                     <div className="mb-2 md:mb-3">
//                       <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
//                         {teacherRequest.courseName}
//                       </h2>
//                     </div>

//                     <div className="mb-6 flex items-center gap-2 text-gray-500">
//                       <span className="text-sm text-blue-500 font-bold">
//                         Technologies
//                       </span>
//                       <span className="text-sm"> {teacherRequest.tech}</span>
//                       <span className="text-sm text-blue-500 font-bold">
//                         Tools
//                       </span>
//                       <span className="text-sm"> {teacherRequest.tool} </span>
//                     </div>

//                     <div className="mt-2 md:mt-2 lg:mt-2">
//                       <div className="mb-3 text-lg font-semibold text-gray-800">
//                         Description
//                       </div>

//                       <p className="text-gray-500">
//                         {teacherRequest.courseDesc}
//                         <br />
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
//                   <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
//                     Course Materil
//                   </h2>

//                   <p class="mb-8 max-w-md text-gray-600">
//                     {teacherRequest.courseDesc}
//                   </p>
//                   <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 ">
//                     Youtube videos{" "}
//                   </h2>
//                   <a
//                     href={teacherRequest.videoURL}
//                     class="leading-relaxed mb-8"
//                     target="_blank"
//                   >
//                     Check video{" "}
//                   </a>
//                   {/* 
//         <video class="w-full h-auto max-w-full" controls>
       
//   <source src={teacherRequest.videoURL} type="video/mp4"/>
//   Your browser does not support the video tag.
// </video> */}

//                   <iframe
//                     // className="w-full h-auto max-w-full"
//                     src={teacherRequest.videoURL}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     width={500}
//                     length={900}
//                     title="Course Video"
//                   ></iframe>

//                   <div class="mt-7">
//                     <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 ">
//                       PDF{" "}
//                     </h2>
//                     <a
//                       href={teacherRequest.pptFile}
//                       class="leading-relaxed mb-8"
//                       target="_blank"
//                     >
//                       Check pdf file
//                     </a>

//                     {/* <a href="#" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">{teacherRequest.pptFile}</a> */}
//                     {/* <a href="#" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring m-5 active:bg-gray-200 md:text-base">back</a> */}
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// return (
//   <div className="row">
//     <div className="col-md-10">
//       <h6>CompletedCourse</h6>

//       {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
//       <table className="table table-bordered table-dark">
//         <thead className="thead-dark">
//           <tr>
//             <th>Course Nmae</th>
//             <th>Course stack</th>

//             <th>Enrolled on</th>
//             <th>grades</th>

//             <th>Completed on </th>
//             <th>Certificate dwonload</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {bookings.length &&
//                     bookings.map((booking) => {
//                       return (
//                         <>
//                           <tr>
//                             <td>{booking._id}</td>
//                             <td>{booking.userid}</td>
//                             <td>{booking.room}</td>
//                             <td>{booking.fromdate}</td>
//                             <td>{booking.todate}</td>
//                             <td>{booking.status}</td>
//                           </tr>
//                         </>
//                       );
//                     })} */}

//           <tr>
//             <td>this</td>
//             <td>this</td>
//             <td>this</td>
//             <td>this</td>
//             <td>this</td>
//             <td>this</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   </div>
// );
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../componenents/Header";
import Footer from "../../componenents/Footer";
import { useParams } from "react-router-dom";

export default function CourseMaterial() {
  const { id } = useParams();
  const [teacherRequest, setTeacherRequest] = useState(null);

  useEffect(() => {
    const fetchTeacherRequest = async () => {
      try {
        const response = await axios.get(`/api/admin/courses/${id}`);
        setTeacherRequest(response.data);
        console.log("teacher specific", response.data._id);
      } catch (error) {
        console.error("Error fetching teacher request:", error);
      }
    };

    fetchTeacherRequest();
  }, [id]);

  return (
    <>
      <Header />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {teacherRequest && (
            <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row">
              <div className="order-first h-48 md:h-80 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                <img
                  src={teacherRequest.photo}
                  loading="lazy"
                  alt="Course"
                  className="h-full w-full object-cover object-center"
                />
                <div className="md:p-8">
                  <div className="mb-2 md:mb-3">
                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                      {teacherRequest.courseName}
                    </h2>
                  </div>
                  <div className="mb-6 flex items-center gap-2 text-gray-500">
                    <span className="text-sm text-blue-500 font-bold">
                      Technologies
                    </span>
                    <span className="text-sm"> {teacherRequest.tech}</span>
                    <span className="text-sm text-blue-500 font-bold">
                      Tools
                    </span>
                    <span className="text-sm"> {teacherRequest.tool} </span>
                  </div>
                  <div className="mt-2 md:mt-2 lg:mt-2">
                    <div className="mb-3 text-lg font-semibold text-gray-800">
                      Description
                    </div>
                    <p className="text-gray-500">
                      {teacherRequest.courseDesc}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                  Course Material
                </h2>
                <p className="mb-8 max-w-md text-gray-600">
                  {teacherRequest.courseDesc}
                </p>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900">
                  YouTube Videos
                </h2>
                <a
                  href={teacherRequest.videoURL}
                  className="leading-relaxed mb-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check video
                </a>
                <iframe
                  src={teacherRequest.videoURL}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width={500}
                  height={300}
                  title="Course Video"
                ></iframe>
                <div className="mt-7">
                  <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900">
                    PDF
                  </h2>
                  <a
                    href={teacherRequest.pptFile}
                    className="leading-relaxed mb-8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check PDF file
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
