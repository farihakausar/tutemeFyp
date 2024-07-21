import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../componenents/Header";
import Footer from "../../componenents/Footer";
import axios from "axios";
import courseImg from "../../assests/coursem.jpeg";

export default function CourseDetail() {
  const [teacherRequest, setTeacherRequest] = useState(null);
  const [courseId, setCourseId] = useState();
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const [userId, setUserId] = useState();
  const getPdf = async () => {
    try {
      const resgh = await fetch("/api/users/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await resgh.json();
      setUserData(data);
      setUserId(data._id);
      console.log(data, "datafromabout");
      // if (!res.status === 200) {
      //   const error = new Error(res.error);
      //   throw error;
      // }
    } catch (error) {
      // history.push("/login")
      console.log("nkljkl");
    }
  };

  useEffect(() => {
    const fetchTeacherRequest = async () => {
      try {
        const response = await axios.get(`/api/admin/courses/${id}`);
        setTeacherRequest(response.data);
        setCourseId(response.data._id);
        console.log("teacher speicf", response.data._id);
      } catch (error) {
        console.error("Error fetching teacher request:", error);
        // Handle any errors or display error messages here
      }
    };

    // Call the fetchTeacherRequest function when the component mounts
    getPdf();
    fetchTeacherRequest();

    // Clean up function (optional)
    return () => {
      // Any cleanup code here, if needed
    };
  }, []);
  return (
    <>
      <Header />
      {userData ? (
        <>
          {teacherRequest && (
            <>
              <div className="bg-blue-50 py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid gap-8 md:grid-cols-2 p-6">
                      <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-lg bg-gray-100">
                          <img
                            src={teacherRequest.photo}
                            loading="lazy"
                            alt="Web Development"
                            className="h-full w-full object-contain object-center"
                          />
                        </div>
                      </div>

                      <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                          <span className="mb-0.5 inline-block text-gray-500"></span>
                          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                            {teacherRequest.courseName}
                          </h2>
                        </div>

                        <div className="mb-8 md:mb-10">
                          <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                            Language
                          </span>

                          <div className="flex flex-wrap gap-3">
                            <button
                              type="button"
                              className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                            >
                              {teacherRequest.language}
                            </button>
                          </div>
                        </div>

                        {/* <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    $15.00
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    $30.00
                  </span>
                </div>
              </div> */}

                        <div className="mb-6 flex items-center gap-2 text-gray-500">
                          <span className="text-sm text-blue-500 font-bold">
                            Technologies
                          </span>
                          <span className="text-sm">
                            {" "}
                            {teacherRequest.tech}
                          </span>
                          <span className="text-sm text-blue-500 font-bold">
                            Tools
                          </span>
                          <span className="text-sm">
                            {" "}
                            {teacherRequest.tool}
                          </span>
                        </div>

                        <div className="flex gap-2.5">
                          <a
                            href={`/coursemat/${teacherRequest._id}`}
                            // href="/coursemat"
                            className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                          >
                            Enroll
                          </a>
                          {/* <a
                  href={`/fav/${userId}/${courseId}`}
                  className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a> */}
                        </div>

                        <div className="mt-10 md:mt-16 lg:mt-20">
                          <div className="mb-3 text-lg font-semibold text-gray-800">
                            Description
                          </div>

                          <p className="text-gray-500">
                            {teacherRequest.courseDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </>
          )}
        </>
      ) : (
        <p className="text-black">losdpkp</p>
      )}
    </>
  );
}
