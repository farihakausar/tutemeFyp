import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function TeacherDeatil() {
  // const [status, setStatus] = useState('');
  const { id } = useParams();
  const [teacherRequest, setTeacherRequest] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTeacherRequest = async () => {
      try {
        const response = await axios.get(
          `/api/teacher/teacher-request/approve/${id}`
        );
        setTeacherRequest(response.data);
      } catch (error) {
        console.error("Error fetching teacher request:", error);
      }
    };

    fetchTeacherRequest();

    // Clean up function (optional)
    return () => {
      // Any cleanup code here, if needed
    };
  }, []);

  const handleApprove = async () => {
    try {
      console.log("undeer");

      await axios.put(`/api/teacher/teacher-request/approve/${id}`);

      console.log("outer");
      navigate("/infoteacher");

      console.log("Teacher request approved successfully");
      return;
    } catch (error) {
      console.error("Error approving teacher request:", error);
    }
  };

  return (
    <>
      <Header />
      {teacherRequest && (
        <>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 bg-gray-20">
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={teacherRequest.photo}
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      {teacherRequest.course}
                    </h2>
                    <h3 class="text-gray-500 mb-3">
                      {teacherRequest.educationDetail}
                    </h3>
                    <p class="mb-4">{teacherRequest.about}</p>
                  </div>
                </div>
              </div>
              <div class="p-12  flex flex-row items-start justify-between">
                <div>
                  <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">
                    Price
                  </h2>
                  <p class="leading-relaxed mb-8">{teacherRequest.price}</p>
                </div>
              </div>
              <div class="p-12  flex flex-col items-start">
                <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">
                  Address
                </h2>
                <p class="leading-relaxed mb-8">{teacherRequest.address}</p>

                <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">
                  Timing
                </h2>
                <p class="leading-relaxed mb-8">{teacherRequest.timing}</p>
                <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">
                  Speciality
                </h2>
                <p class="leading-relaxed mb-8">{teacherRequest.course}</p>
                <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4">
                  CV{" "}
                </h2>
                <a
                  href={teacherRequest.pptFile}
                  class="leading-relaxed mb-8"
                  target="_blank"
                >
                  Check pdf file
                </a>

                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-row md:m-auto w-full md:py-8 mt-8 md:mt-0">
                  <button
                    onClick={handleApprove}
                    class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Approve{" "}
                  </button>
                  {/* <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/createchat'>not Approved</a></button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
