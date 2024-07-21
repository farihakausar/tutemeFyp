import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserOutlined, PictureOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar";
import { Tabs } from "antd";
import Header from "./Header";

import { storage } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Courseinfo() {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-20">
          <div>
            <h5
              className=" text-center text-customBlue font-medium italic"
              style={{ fontSize: "50px" }}
            >
              your course details
            </h5>

            <div className="p-6">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane
                  tab={
                    <span style={{ color: "#FF6347", fontStyle: "italic" }}>
                      Add Course
                    </span>
                  }
                  key="1"
                >
                  <AddCourse />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={
                    <span style={{ color: "#FF6347", fontStyle: "italic" }}>
                      Added Course
                    </span>
                  }
                  key="2"
                >
                  <AddedCourse />
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
        </div>
      </div>
    </>
  );
}

export default Courseinfo;

export function AddCourse() {
  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [language, setLanguage] = useState("English");
  const [videoURL, setVideoURL] = useState("");
  const [tech, setTech] = useState("");
  const [tool, setTool] = useState("");
  const [photo, setPhoto] = useState();
  const [pptFile, setPptFile] = useState(null);
  const [photoPrec, setPhotoPrec] = useState();
  const [pptPrec, setPptPrec] = useState();
  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        console.log("downloadURL", downloadURL);
        setPhoto(downloadURL); // Set the photo state with the download URL
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  const handlePPt = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        console.log("downloadURL", downloadURL);
        setPptFile(downloadURL); // Set the photo state with the download URL
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  async function addroom() {
    console.log("Adding new room...");
    const newroom = {
      photo,
      courseName,
      courseDesc,
      videoURL,
      pptFile,
      language,
      tech,
      tool,
    };

    try {
      console.log("Sending request to add room...");
      const result = await axios.post("/api/admin/courses/", newroom);
      console.log("Room added successfully:", result.data);
      alert("Course added successfully");
    } catch (error) {
      console.error("Error adding room:", error);
      alert("Failed to add course. Please try again later.");
    }
  }

  //   e.preventDefault();

  //   try {
  //     const formData = new FormData();
  //     formData.append('courseName', courseName);
  //     formData.append('courseDesc', courseDesc);
  //     formData.append('language', language);
  //     formData.append('videoURL', videoURL);
  //     formData.append('tech', tech);
  //     formData.append('tool', tool);
  //     formData.append('photo', photo);
  //     if (pptFile) {
  //       formData.append('pptFile', pptFile);
  //     }

  //     // const response = await axios.post('http://localhost:5000/api/admin/addcourses', formData,
  //     //   {
  //     //     headers: { "Content-Type": "multipart/form-data" },
  //     //   }
  //     // );
  //     const response = await axios.post(`/api/admin/addcourses`, formData,
  //     {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     }
  //   );

  //     console.log('Course added successfully:', response.data);
  //     // Reset form fields
  //     setCourseName('');
  //     setCourseDesc('');
  //     setLanguage('English');
  //     setTech('');
  //     setTool('');
  //     setVideoURL('');
  //     // setPptFile(null);
  //     setPhoto();
  //     console.log("doennknlk")
  //   } catch (error) {
  //   console.log("hkln")
  //     console.error('Error adding course:', error);
  //   }
  // };
  return (
    <>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="sm:col-span-4">
              <div className="col-span-full">
                <label
                  htmlFor="course-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <span className="italic text-blue-500">Course Name</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    id="course-name"
                    name="course-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    style={{ outline: "1px solid #4F46E5" }}
                  />
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="add course name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="italic text-blue-500">Technlogies</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={tech}
                      style={{ outline: "1px solid #4F46E5" }}
                      onChange={(e) => setTech(e.target.value)}
                      id="tech"
                      name="tech"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="add course desc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="italic text-blue-500">tools</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={tool}
                      style={{ outline: "1px solid #4F46E5" }}
                      onChange={(e) => setTool(e.target.value)}
                      id="tool"
                      name="tool"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="lang"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <span className="italic text-blue-500">langauges</span>
                  </label>
                  <div className="mt-2">
                    <select
                      id="language"
                      name="language"
                      style={{ outline: "1px solid #4F46E5" }}
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      autoComplete="lang-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>English</option>
                      <option>Urdu</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <span className="italic text-blue-500">Course desc</span>
              </label>
              <div className="mt-2">
                <textarea
                  value={courseDesc}
                  style={{ outline: "1px solid #4F46E5" }}
                  onChange={(e) => setCourseDesc(e.target.value)}
                  id="courseDesc"
                  name="courseDesc"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <span className="italic text-blue-500">Cover photo</span>
              </label>

              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {/* < PictureOutlined className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="photo"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600  focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        style={{ outline: "1px solid #4F46E5" }}
                        type="file"
                        name="photo"
                        placeholder="photo"
                        id="photo"
                        onChange={(e) => handleImage(e)}
                      />
                    </label>
                    <br />
                  </div>
                  <p className="pl-1">or drag and drop</p>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="video-url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <span className="italic text-blue-500">Video url</span>
                </label>
                <div className="mt-2">
                  <input
                    style={{ outline: "1px solid #4F46E5" }}
                    type="text"
                    value={videoURL}
                    onChange={(e) => setVideoURL(e.target.value)}
                    id="videoURL"
                    name="videoURL"
                    autoComplete="videoURL"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="ppt-file"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <span className="italic text-blue-500"> Upload pdf file</span>
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    {/* <PictureOutlined className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="ppt"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        {/* <span> Upload pdf file</span> */}
                        <input
                          style={{ outline: "1px solid #4F46E5" }}
                          type="file"
                          name="pptFile"
                          accept="application/pdf"
                          placeholder="File"
                          id="pptFile"
                          onChange={(e) => handlePPt(e)}
                        />
                        {/* <input
                      style={{ outline: '1px solid #4F46E5' }}
          type="file"
          class="form-control"
          accept="application/pdf"
          id="ppt"
          required
          onChange={(e) => setPptFile(e.target.files[0])}
        /> */}
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PPT files up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={addroom}
            className="rounded-md bg-customBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  "
          >
            Add Course
          </button>
        </div>
      </form>
    </>
  );
}

export function AddedCourse() {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        // setloading(true)
        const data = await (await axios.get("/api/admin/getallcourses")).data;
        setrooms(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, []);
  const roomId = rooms._id;
  console.log(roomId, "roomihkh");
  return (
    <div className="row">
      <div className="col-md-10">
        {/* {bookings.length &&(<h1>{bookings.length} bookings</h1>)} */}
        <table
          className="table table-bordered bg-blue-500 rounded-md"
          style={{
            outline: "1px solid #4F46E5",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <thead className="thead-dark">
            <tr
              style={{
                fontFamily: "Arial",
                fontStyle: "italic",
                color: "blue",
                color: "white",
              }}
            >
              <th>Course Name</th>
              <th> Course desc</th>

              <th>Tools</th>
              <th>Technlogies</th>
              <th>Language</th>
              {/* <th></th> */}
            </tr>
          </thead>

          <tbody>
            {rooms.length &&
              rooms.map((room) => {
                return (
                  <>
                    <tr>
                      {/* <td><a href={`/specificCourse/${room._id}`}>{room._id}</a></td> */}
                      <td>
                        <a href={`/specificCourse/${room._id}`}>
                          {room.courseName}
                        </a>
                      </td>
                      <td>
                        <a href={`/specificCourse/${room._id}`}>
                          {room.courseDesc}
                        </a>
                      </td>
                      <td>
                        <a href={`/specificCourse/${room._id}`}>{room.tool}</a>
                      </td>

                      <td>
                        <a href={`/specificCourse/${room._id}`}>{room.tech}</a>
                      </td>
                      <td>
                        <a href={`/specificCourse/${room._id}`}>
                          {room.language}
                        </a>
                      </td>

                      <div className="flex gap-2.5">
                        <a
                          href={`/editcourse/${room._id}`}
                          className="inline-block flex-1  my-2 rounded-lg bg-customBlue px-2 py-1 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                        >
                          Edit{" "}
                        </a>
                      </div>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
