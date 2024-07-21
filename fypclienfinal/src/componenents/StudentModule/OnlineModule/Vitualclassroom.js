import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import axios from "axios";

import { RiAttachmentLine } from "react-icons/ri";
import { AiOutlineVideoCamera, AiOutlineMessage } from "react-icons/ai";
export default function Vitualclassroom() {
  const { teacherIdd } = useParams();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get(
          `/api/teacher/materials/${teacherIdd}`
        );
        setMaterials(response.data.materials[0]);
        // alert(response.data)
        console.log(response.data.materials[0], "jkojl");
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchMaterials();
  }, []);
  return (
    <>
      <Header />
      {materials && (
        <>
          <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
                <div>
                  <h2 class="text-xl font-bold text-indigo-500 md:text-2xl">
                    videos
                  </h2>
                  <p class="text-gray-600">{materials.courseTitle}</p>
                </div>

                {/* <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a> */}
              </div>

              <iframe
                // className="w-full h-auto max-w-full"
                src={materials.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width={500}
                length={900}
                title="Course Video"
              ></iframe>
            </div>
          </div>
          <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
                <div>
                  <h2 class="text-xl font-bold text-indigo-500 md:text-2xl">
                    {materials.note}
                  </h2>
                  {/* <p class="text-gray-600">Link to meet </p> */}
                </div>

                {/* <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a> */}
              </div>
            </div>
          </div>
          <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              {/* <div class="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8"> */}

              <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Attachments
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <RiAttachmentLine
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          {/* <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900  mb-4"> </h2><div> */}
                          <a
                            href={materials.pptFile}
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            target="_blank"
                          >
                            {materials.courseTitle}
                          </a>

                          {/* <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">{materials.pptFile}</span> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                </dd>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
                  <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
                    Blog
                  </h1>

                  <div class="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
                    <img
                      src={materials.photo}
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
                    {materials.courseTitle}
                  </h2>

                  <p class="text-gray-500 sm:text-lg">
                    {materials.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto">
            <a
              href="/videostearm"
              class="inline-block rounded-lg m-2 bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              <AiOutlineVideoCamera />
            </a>
            <a
              href={`/chatonline/${teacherIdd}`}
              class="inline-block m-2 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              <AiOutlineMessage />
            </a>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
