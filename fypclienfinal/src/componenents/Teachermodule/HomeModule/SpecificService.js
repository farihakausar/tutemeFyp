import React, { useState, useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SpecificService() {
  const { teacherId } = useParams();

  const [teacherRequest, setTeacherRequest] = useState(null);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `/api/teacher/service-request/${teacherId}`
        );
        setTeacherRequest(response.data.teacherRequest);
        setStudents(response.data.teacherRequest.users); // Assuming users' data is fetched from the API
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [teacherId]);
  useEffect(() => {
    async function fetchStudentsData() {
      try {
        const response = await axios.get(
          `/api/teacher/enrolled-users/${teacherId}`
        );
        setStudents(response.data.enrolledUsers); // Assuming the response structure is { enrolledUsers: [...] }
        console.log("Fetched students data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchStudentsData();
  }, [teacherId]);
  return (
    <>
      <Header />
      {teacherRequest && (
        <div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                {/* <img className="h-12 w-200 flex-none rounded-full bg-gray-50" src={teacherRequest.photo} alt="" /> */}
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Course
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {teacherRequest.course}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Price
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {teacherRequest.price}
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                {/* <dt className="text-sm font-medium leading-6 text-gray-900">About</dt> */}
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {/* {teacherRequest.about} */}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {teacherRequest.address}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {teacherRequest.about}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                {/* <dt className="text-sm font-medium leading-6 text-gray-900">stundets</dt> */}
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="divide-y divide-gray-100">
                    {/* Display students */}
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Students Enrolled
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {students.length > 0 ? (
                          <ul>
                            {/* {students&& ( */}
                            {students.map((student) => (
                              <li
                                key={student._id}
                                className="flex justify-between gap-x-6 py-5"
                              >
                                <div className="flex min-w-0 gap-x-4">
                                  <img
                                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                    src={student.photo}
                                    alt=""
                                  />
                                  <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                      {" "}
                                      {student.nameing}
                                    </p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                      {" "}
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
                      </dd>
                    </div>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
