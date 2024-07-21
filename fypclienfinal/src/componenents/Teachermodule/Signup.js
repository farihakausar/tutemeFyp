import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import axios from "axios";
export default function Signin() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const reg=async()=>{

  //     const user={
  //       email,password
  //     }
  //     console.log(user)
  //     try{

  //       let response =await (await axios.post(`/api/teacher/loginteacher`,user)).data
  //       localStorage.setItem("user",JSON.stringify(response))

  //       console.log(response)
  //       navigate("/")

  //     }catch(err){
  //       console.log(err)

  //     }
  //   }
  const reg = async () => {
    const user = {
      email,
      password,
    };
    console.log(user);
    try {
      let response = await (await axios.post(`/api/teacher/login`, user)).data;
      // localStorage.setItem("user",JSON.stringify(response))

      console.log(response);
      navigate("/service");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        className="bg-cover bg-center bg-blue-200 w-full  h-full"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/948623158/vector/seamless-innovation-and-scientific-data-background.jpg?s=612x612&w=0&k=20&c=IHOut6hIYjxiY5MZlu1gDd4_K886MhfVpfUQxYLr16E=)",
        }}
      >
        <div class="lg:w-1/3 md:w-1/2  flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0 ">
          <h2 class="text-white text-lg mb-1 font-medium m-auto title-font">
            Sign in
          </h2>
          <p class="leading-relaxed mb-5 text-white m-auto">
            Welcome to the education revolution
          </p>

          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-white ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-white">
              Password{" "}
            </label>
            <input
              type="password"
              id="email"
              name="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={reg}
          >
            Sign in
          </button>
          <p class="text-xs text-white mt-3 m-auto">
            Don't have account?{" "}
            <span className="underline">
              <a href="/loginTeacher">Register</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
