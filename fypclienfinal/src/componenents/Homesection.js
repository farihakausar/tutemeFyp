import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assests/back.jpeg";
import axios from "axios";
import logo1 from "../assests/uu.jpeg";
import logo2 from "../assests/bg1.jpeg";
import home from "../assests/back.jpeg";
import course from "../assests/coursem.jpeg";
import online from "../assests/course.jpeg";
import main1 from "../assests/bg1.jpeg";
export default function Homesection() {
  const [bookings, setbookings] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        // setloading(true)
        const data = await (await axios.get("/api/teacher/getallteacher")).data;
        setbookings(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, []);
  return (
    <>
      <Header />

      <div className="flex row  text-center">
        <section
          class="px-4 py-10 bg-cover bg-center md:px-10 lg:px-20 xl:px-40 2xl:px-80 md:py-20 bg-customBlue"
          style={{ backgroundImage: `url(${logo1})` }}
        >
          <div class="container mx-auto flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
              <h1 class="title-font  text-3xl mb-4 font-medium transition text-customBlue duration-500 transform hover:scale-110 font-marck">
                Welcome to Tute Me!
                <br class="hidden lg:inline-block" /> Platform
              </h1>

              <div class="flex justify-center">
                <a
                  href="/login"
                  class="inline-flex hover:bg-white bg-customBlue hover:border-2 py-2 px-6   hover:border-dashed hover:border-customBlue rounded text-lg transition duration-300"
                >
                  Join as Student
                </a>

                <a
                  href="/loginTeacher"
                  class="inline-flex hover:bg-white hover:border-2 py-2 px-6 bg-customBlue   hover:border-dashed hover:border-customBlue rounded text-lg ml-4 transition duration-300"
                >
                  Join as Teacher
                </a>

                <a
                  href="/loginTeacher"
                  class="inline-flex hover:bg-white hover:border-2 py-2 px-6 bg-customBlue   hover:border-dashed hover:border-customBlue rounded text-lg ml-4 transition duration-300"
                >
                  Join as Evaluator
                </a>

                {/* <a href="/login" class="inline-flex hover:bg-white bg-customBlue border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg transition duration-300">Join as Student</a>

        <a href="/loginTeacher" class="inline-flex hover:bg-white bg-customBlue border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg ml-4 transition duration-300">Join as Teacher</a> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-[] mb-4 ">What is Tute me ?</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div> */}
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-600 mb-4">
              What is Tute me ?
            </h1>
            <p className=" leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto  text-xl text-customBlue font-bold italic">
              "Education is the key to success. At Tute Me, we strive to provide
              top-notch educational resources and support to help you achieve
              your learning goals"
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex row -mx-4 -mb-10 text-center">
                {/* <div className="sm:w-1/2 mb-10 px-4"> */}

                <div class="bg-white py-6 sm:py-8 lg:py-12">
                  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                      <a
                        href="#"
                        class="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                      >
                        <img
                          src={online}
                          loading="lazy"
                          alt="Photo by Minh Pham"
                          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                        <div class="relative mt-auto p-4">
                          {/* <span class="block text-sm text-gray-200">July 19, 2021</span> */}
                          <h2 class="mb-2 text-xl font-semibold text-red-600 transition duration-100">
                            Online Tutor
                          </h2>

                          {/* <span class="font-semibold text-indigo-300">Read more</span> */}
                        </div>
                      </a>

                      <a
                        href="#"
                        class="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                      >
                        <img
                          src={home}
                          loading="lazy"
                          alt="Photo by Lorenzo Herrera"
                          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                        <div class="relative mt-auto p-4">
                          <h2 class="mb-2 text-xl font-semibold text-red-600 transition duration-100">
                            Home Tutor
                          </h2>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                      >
                        <img
                          src={course}
                          loading="lazy"
                          alt="Photo by Martin Sanchez"
                          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                        <div class="relative mt-auto p-4">
                          <h2 class="mb-2 text-xl font-semibold text-red-600 transition duration-100">
                            Course
                          </h2>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-xl mb-4 font-medium text-red-600">
              Features Of Tute me
            </h1>
            <p class="mb-8 leading-relaxed  italic">
              The Home Tutor module provide to students seeking personalized and
              face-to-face tutoring experiences. Online Tutor. students can
              connect with expert tutors from around the world, using virtual
              tools and interactive features for perfect communication. Online
              Course Module. If any student wants to learn about specific
              subject and don’t want to hire tutor, then he/she can register for
              online course
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={main1}
            />
          </div>
        </div>
      </section>

      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-red-600">
              OUR TEAM
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base italic text-customBlue">
              Team of Tute me Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Accusantium itaque iure optio architecto.
            </p>
          </div>

          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                {bookings.length &&
                  bookings.map((booking) => {
                    return (
                      <>
                        <tr>
                          <td>{booking._id}</td>
                          <td>{booking.userid}</td>
                          <td>{booking.room}</td>
                          <td>{booking.fromdate}</td>
                          <td>{booking.todate}</td>
                          <td>{booking.status}</td>
                        </tr>
                      </>
                    );
                  })}
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-red-600">
                    Alper Kamu
                  </h2>
                  <h3 class="text-customBlue mb-3">UI Developer</h3>
                  <p class="mb-4 italic">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat, nisi obcaecati?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/201x201"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-red-600">
                    Holden Caulfield
                  </h2>
                  <h3 class="text-customBlue mb-3">UI Developer</h3>
                  <p class="mb-4 italic">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat, nisi obcaecati?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/202x202"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-red-600">
                    Atticus Finch
                  </h2>
                  <h3 class="text-customBlue mb-3">UI Developer</h3>
                  <p class="mb-4 italic">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat, nisi obcaecati?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/203x203"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-red-600">
                    Henry Letham
                  </h2>
                  <h3 class="text-customBlue mb-3">UI Developer</h3>
                  <p class="mb-4 italic">lorem13</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
