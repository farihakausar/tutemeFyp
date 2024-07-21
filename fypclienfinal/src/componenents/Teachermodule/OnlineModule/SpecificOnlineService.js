import React, { useState, useEffect } from "react";
import Header from "../../Header";

import axios from "axios";

import Footer from "../../Footer";
import { useParams } from "react-router-dom";
import {
  AiOutlineFilePdf,
  AiOutlineVideoCamera,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri"; // React Icons
import { UserOutlined } from "@ant-design/icons"; // Ant Design
import { storage } from "../../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default function SpecificOnlineService() {
  const { teacherIdd } = useParams();

  const [photo, setPhoto] = useState("");
  const [pptFile, setPptFile] = useState(null);
  const [teacherRequest, setTeacherRequest] = useState(null);
  const [students, setStudents] = useState([]);
  const [showStudents, setShowStudents] = useState(false);
  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setMaterial((prevMaterial) => ({
          ...prevMaterial,
          photo: downloadURL,
        }));
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handlePPt = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, `ppt/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setMaterial((prevMaterial) => ({
          ...prevMaterial,
          pptFile: downloadURL,
        }));
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const [material, setMaterial] = useState({
    type: "",
    url: "",
    pptFile: null,
    description: "",
    photo: null,
    courseTitle: "",
    note: "",
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `/api/teacher/service-request/${teacherIdd}`
        );
        setTeacherRequest(response.data.teacherRequest);
        // Assuming users' data is fetched from the API
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
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;
    setMaterial({ ...material, [name]: newValue });
  };

  const toggleStudentList = () => {
    setShowStudents(!showStudents);
  };

  const renderInputField = () => {
    switch (material.type) {
      case "pdf":
        return (
          <div className="mb-4 m-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload PDF File
            </label>
            <input
              style={{ outline: "1px solid #4F46E5" }}
              type="file"
              name="pptFile"
              accept="application/pdf"
              placeholder="File"
              id="pptFile"
              onChange={(e) => handlePPt(e)}
            />
            <AiOutlineFilePdf className="absolute right-3 top-3 text-indigo-500 text-lg" />
            <div className="mb-4">
              <label
                htmlFor="courseTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Course Title
              </label>
              <input
                type="text"
                style={{ outline: "1px solid #4F46E5" }}
                id="courseTitle"
                name="courseTitle"
                onChange={handleChange}
                value={material.courseTitle}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        );
      case "blog":
        return (
          <>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                style={{ outline: "1px solid #4F46E5" }}
                id="description"
                name="description"
                onChange={handleChange}
                value={material.description}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
              <MdDescription className="absolute right-3 top-3 text-indigo-500 bg-customBlue text-lg" />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Image
              </label>

              <input
                style={{ outline: "1px solid #4F46E5" }}
                type="file"
                name="photo"
                placeholder="photo"
                id="photo"
                onChange={(e) => handleImage(e)}
              />
              {/* <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" /> */}
            </div>
            <div className="mb-4">
              <label
                htmlFor="courseTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Course Title
              </label>
              <input
                style={{ outline: "1px solid #4F46E5" }}
                type="text"
                id="courseTitle"
                name="courseTitle"
                onChange={handleChange}
                value={material.courseTitle}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </>
        );
      case "video":
        return (
          <div className="mb-4">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Video URL
            </label>
            <input
              style={{ outline: "1px solid #4F46E5" }}
              type="text"
              id="url"
              name="url"
              onChange={handleChange}
              value={material.url}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <div className="mb-4">
              <label
                htmlFor="courseTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Course Title
              </label>
              <input
                style={{ outline: "1px solid #4F46E5" }}
                type="text"
                id="courseTitle"
                name="courseTitle"
                onChange={handleChange}
                value={material.courseTitle}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        );
      case "note":
        return (
          <div className="mb-4">
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Note
            </label>
            <textarea
              id="note"
              style={{ outline: "1px solid #4F46E5" }}
              name="note"
              onChange={handleChange}
              value={material.note}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
        );
    }
  };

  const handleShare = async () => {
    try {
      const response = await axios.post(
        `/api/teacher/teacher-service-request/${teacherIdd}/materials`,
        material
      );
      console.log(response.data);
      // type: '',
      // url: '',
      // pptFile: null,
      // description: '',
      // photo: null,
      // courseTitle: '',
      // note: ''
      // Log the response data
      // Add any success message or redirection logic here
    } catch (error) {
      console.error("Error sharing with students:", error);
      // Add error handling logic here
    }
  };

  return (
    <>
      <Header />

      <div>
        <div className="px-4 sm:px-0">
          <div
            className="flex items-center mt-4 cursor-pointer mr-2"
            onClick={toggleStudentList}
          >
            <RiGroupLine className="mr-2 text-indigo-600 text-xl" />{" "}
            {/* React Icons student icon */}
            <span className="text-indigo-600 font-semibold">Students</span>
          </div>
          <div className="text-center mx-auto">
            <a
              href="/videostearm"
              class="inline-block rounded-lg m-2 bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              <AiOutlineVideoCamera />
            </a>
          </div>
          {showStudents && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="divide-y divide-gray-100">
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
                    {/* {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))} */}
                  </ul>
                </dd>
              </div>
            </div>
          )}
        </div>
        {teacherRequest && (
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={teacherRequest.photo}
                  alt=""
                />
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
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {teacherRequest.about}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {teacherRequest.educationDetail}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                {/* <dt className="text-sm font-medium leading-6 text-gray-900">stundets</dt> */}
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="divide-y divide-gray-100">
                    {/* {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))} */}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
      {/* <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Material</h2>
      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
        <select name="type" id="type" onChange={handleChange} value={material.type} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">Select Type</option>
          <option value="pdf">PDF</option>
          <option value="blog">Blog</option>
          <option value="video">Video</option>
        </select>
      </div>
      {renderInputField()}
      <button onClick={handleShare} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <AiOutlineShareAlt className="mr-2" /> Share with Students
      </button>
    </div> */}
      <div className="max-w-md mx-auto m-5  p-6 bg-white  border-customBlue border-2 border-dashed rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Upload Material
        </h2>
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type
          </label>
          <select
            name="type"
            id="type"
            style={{ outline: "1px solid #4F46E5" }}
            onChange={handleChange}
            value={material.type}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Type</option>
            <option value="pdf">PDF</option>
            <option value="note">Note</option>
            <option value="blog">Blog</option>
            <option value="video">Video</option>
          </select>
        </div>
        {renderInputField()}
        <button
          onClick={handleShare}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <AiOutlineShareAlt className="mr-2" /> Share with Students
        </button>
      </div>
      <Footer />
    </>
  );
}
