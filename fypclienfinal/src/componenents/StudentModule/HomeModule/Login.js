import React, { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import AWS from "aws-sdk";
import { storage } from "../../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const [nameing, setNameing] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [about, setAbout] = useState();

  const [interestedSubjects, setInterestedSubjects] = useState();
  const [photo, setPhoto] = useState();

  const navigate = useNavigate();

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

  const reg = async (e) => {
    e.preventDefault();
    try {
      // Create form data with user details including the image URL
      const formData = new FormData();
      formData.append("nameing", nameing);
      formData.append("password", password);
      formData.append("cpassword", cpassword);
      formData.append("email", email);
      formData.append("interestedSubjects", interestedSubjects);
      formData.append("about", about);
      formData.append("photo", photo); // Pass the image URL
      const result = await axios.post(`/api/users/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(result);
      toast.success("Registration Successful 🦄", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("user", JSON.stringify(result));
      setAbout("");
      setPassword("");
      setCpassword("");
      setNameing("");
      setEmail("");
      setPhoto("");
      setInterestedSubjects("");
      // console.log(response)
      navigate("/selectservice");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Registration failed. Please try again later.");
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-center bg-blue-200 "
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/948623158/vector/seamless-innovation-and-scientific-data-background.jpg?s=612x612&w=0&k=20&c=IHOut6hIYjxiY5MZlu1gDd4_K886MhfVpfUQxYLr16E=)",
        }}
      >
        <div class="lg:w-1/3 md:w-1/2  flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0 ">
          <h2 class="text-white text-lg mb-1 font-medium m-auto title-font">
            Register{" "}
          </h2>
          <p class="leading-relaxed mb-5 text-white m-auto">
            Welcome to the education revolution
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="nameing"
              value={nameing}
              placeholder="Enter your name"
              onChange={(e) => {
                setNameing(e.target.value);
              }}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="about" class="leading-7 text-sm text-white">
              About
            </label>
            <textarea
              id="about"
              name="about"
              placeholder="Enter Education Background upto 50 char "
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div class="relative mb-4">
            <label
              for="interestedSubjects"
              class="leading-7 text-sm text-white"
            >
              Interested Subjects
            </label>
            <input
              id="interestedSubjects"
              name="interestedSubjects"
              placeholder="Enter your Interested Subjects"
              value={interestedSubjects}
              onChange={(e) => setInterestedSubjects(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></input>
          </div>
          <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-white">
              Password{" "}
            </label>
            <input
              type="password"
              id="email"
              name="password"
              placeholder="Enter strong password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="cpassword" class="leading-7 text-sm text-white">
              Confirm Password{" "}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Retype   password "
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <input
              type="file"
              name="photo"
              placeholder="photo"
              id="photo"
              onChange={(e) => handleImage(e)}
            />
          </div>

          <button
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={(e) => {
              reg(e);
            }}
          >
            Register
          </button>
          <p class="text-xs text-white mt-3 m-auto">
            Already have a account?{" "}
            <span className="underline">
              <a href="/signin">Sign In</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
