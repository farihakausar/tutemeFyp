import img1 from "../../../assests/course.jpeg";
import Header from "../../Header";
import Footer from "../../Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function HomeClass() {
  const [teacherRequest, setTeacherRequest] = useState(null); // Set initial state to null
  const [teacher, setTeacher] = useState(null); // Set initial state to null
  const { teacherId } = useParams();

  useEffect(() => {
    const fetchTeacherRequest = async () => {
      try {
        const response = await axios.get(
          `/api/teacher/service-request/${teacherId}`
        );
        setTeacherRequest(response.data.teacherRequest);
        setTeacher(response.data.teacherRequest.teacher);
      } catch (error) {
        console.error("Error fetching teacher request:", error);
      }
    };

    fetchTeacherRequest();
  }, [teacherId]); // Add teacherId to the dependency array

  return (
    <>
      <Header />
      {teacherRequest ? (
        <div className="flex flex-col md:flex-row items-center justify-center p-12 bg-blue-700 text-gray-800">
          <div className="md:w-1/2 p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={img1}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-white">
                  {teacherRequest.course}
                </h2>
                <h3 className="text-gray-200 mb-3">
                  Price: {teacherRequest.price}
                </h3>
                <h3 className="text-gray-200 mb-3">
                  Timing: {teacherRequest.timing}
                </h3>
                <h3 className="text-gray-200 mb-3">
                  Address: {teacherRequest.address}
                </h3>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12 bg-white rounded-lg shadow-lg">
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">
              Teacher Name
            </h2>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">
              Teacher Email
            </h2>
            {/* <p className="leading-relaxed mb-8 text-gray-800">
              Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
              portland. VHS man braid palo santo hoodie brunch trust fund.
              Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie
              chambray 90's, slow-carb etsy tumeric. Cray pug you probably
              haven't heard of them hexagon kickstarter craft beer pork chic.
            </p> */}

            <button className="text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a href="/chat" className="text-white">
                Chat
              </a>
            </button>
          </div>
        </div>
      ) : (
        <p className="text-black">Loading...</p>
      )}
      <Footer />
    </>
  );
}
