import React, { useState, useEffect } from "react";
import axios from "axios";
import bgImage from "../../../assests/bg5.jpeg";
import sideImg from "../../../assests/coursem.jpeg";
import Header from "../../Header";
import Footer from "../../Footer";
import { SearchOutlined } from "@ant-design/icons";
export default function OnlineHoem() {
  const [rooms, setrooms] = useState([]);
  const [searchkey, setsearchkey] = useState("");

  const [duplicaterooms, setduplicaterooms] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        // setloading(true)
        const data = await (
          await axios.get("/api/teacher/service-request-approved")
        ).data;
        setrooms(data);
        setduplicaterooms(data);
        setId(data._id);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, []);
  function filterbyserach() {
    const temproom = duplicaterooms.filter((rooms) =>
      rooms.course.toLowerCase().includes(searchkey.toLowerCase())
    );
    setrooms(temproom);
  }
  return (
    <>
      <Header />

      <div className="flex row -mx-4 -mb-10 text-center">
        <div className="rounded-lg w-full h-[400px] overflow-hidden">
          <a
            className="relative block   
                      bg-gray-900 group"
            href="##"
          >
            <div
              className="absolute  object-cover w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[800px]"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <img
              alt="testimonial"
              class="w-20 absolute top-5 right-5   h-20 mb-8 object-cover  rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src={sideImg}
            />
            <div className="relative p-10">
              <div className="mt-2">
                {/* Hidden content */}
                <div>
                  <div className="p-2">
                    <h1 class="title-font  text-3xl mb-4 font-medium transition italic text-white duration-500 transform hover:scale-110">
                      Get Home teacher services
                      <br class="hidden lg:inline-block" />{" "}
                    </h1>
                    <div className="md:m-[80px] sm:m-[40px]"></div>
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600"></label>

          <div class="flex items-center">
            {/* <input type="text" id="name" name="name" placeholder="Search here" class="w-full bg-white rounded-l-md border italic border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}
            <button
              type="submit"
              class="bg-indigo-500 text-white rounded-r-md p-2"
            >
              <SearchOutlined />
            </button>
            <input
              type="text"
              className="form-control bs"
              placeholder="Search by subject"
              class="w-full bg-white rounded-l-md border italic border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={searchkey}
              onChange={(e) => {
                setsearchkey(e.target.value);
              }}
              onKeyUp={filterbyserach}
            />
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {rooms.length &&
              rooms.map((room, index) => (
                <div key={index} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={room.photo}
                      alt="blog"
                    />
                    <div className="p-6">
                      {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {room.course}
                      </h1>
                      <p className="leading-relaxed mb-3 text-customBlue">
                        {room.about}
                      </p>
                      {/* <p className="leading-relaxed mb-3 text-customBlue">qulaificatiobn of teacher.</p> */}
                      <div className="flex items-center flex-wrap mb-2">
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm mr-4">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          Price: {room.price}
                        </span>
                      </div>
                      <div>
                        <a
                          className="text-indigo-500 inline-flex items-center"
                          href={`/onlineteacherprofile/${room._id}`}
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
