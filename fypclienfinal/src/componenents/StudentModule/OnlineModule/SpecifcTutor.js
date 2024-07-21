import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import axios from "axios";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  StarFilled,
  DollarOutlined,
} from "@ant-design/icons";

export default function SpecifcTutor() {
  const { teacherIdd } = useParams();

  const [teacherRequest, setTeacherRequest] = useState(null);
  const [students, setStudents] = useState([]);
  const [showStudents, setShowStudents] = useState(false);

  const toggleStudentList = () => {
    setShowStudents(!showStudents);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `/api/teacher/service-request/${teacherIdd}`
        );
        setTeacherRequest(response.data.teacherRequest);

        console.log("hkjhkj", response.data.teacherRequest.users); // Assuming users' data is fetched from the API
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [teacherIdd]);
  useEffect(() => {
    async function fetchStudentsData() {
      try {
        const response = await axios.get(
          `/api/teacher/enrolled-users/${teacherIdd}`
        );
        setStudents(response.data.enrolledUsers); // Assuming the response structure is { enrolledUsers: [...] }
        console.log("Fetched students data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchStudentsData();
  }, [teacherIdd]);
  return (
    <>
      <Header />
      {teacherRequest && (
        <div class="p-4 lg:w-1/2 rounded-lg">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center  sm:text-left">
            <img
              alt="team"
              class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              src={teacherRequest.photo}
            />
            <div class="flex-grow sm:pl-8">
              <h3 class="text-gray-500 mb-3">
                <StarFilled className="mr-2" />
                {teacherRequest.course}
              </h3>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex   items-center text-sm text-gray-500">
                  {teacherRequest.about}
                </div>
              </div>
              <h2 class="sm:text-3xl text-2xl title-font font-medium  mb-2">
                About me
              </h2>
              <p class="leading-relaxed mb-8 ">
                {teacherRequest.educationDetail}
              </p>
            </div>
          </div>
        </div>
      )}
      <h2 class="sm:text-3xl text-2xl m-5 title-font font-medium  mb-2 p-3">
        Students
      </h2>
      <div class="grid grid-cols-2 m-5 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {students.length > 0 ? (
          <ul>
            {/* {students&& ( */}
            {students.map((student) => (
              <li
                key={student._id}
                className="flex justify-between gap-x-6 py-5"
              >
                <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                  <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                    <img
                      src={student.photo}
                      loading="lazy"
                      alt="Photo by christian ferrer"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div class="text-center font-bold text-indigo-500 md:text-lg">
                      {student.nameing}
                    </div>
                    <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                      {student.about}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No students enrolled</p>
        )}
      </div>

      <div class="lg:w-1/3 md:w-1/2 flex flex-row md:m-auto w-full md:py-8 mt-8 md:mt-0">
        {/* <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/paymentDone'>materil shared</a></button> */}
        <button class="text-white bg-indigo-500 border-0 m-3 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <a href={`/virtualclassroom/${teacherIdd}`}>classroom</a>
        </button>
      </div>

      <Footer />
    </>
  );
}
