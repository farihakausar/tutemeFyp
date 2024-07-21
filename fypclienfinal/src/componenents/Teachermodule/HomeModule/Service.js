import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

export default function Service() {
  const [userData, setUserData] = useState();
  const [teacherId, setTeacherId] = useState();
  const getPdf = async () => {
    try {
      const resgh = await fetch("/api/teacher/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await resgh.json();
      setUserData(data);
      setTeacherId(data._id);

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
    getPdf();
  }, []);
  return (
    <>
      <Header />
      {userData ? (
        <>
          <div className="bg-blue-700 min-h-screen text-gray-900">
            <div className="container mx-auto py-8">
              <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/2 mx-auto">
                {/* Profile Section */}
                <div className="flex items-center mb-8">
                  <img
                    className="rounded-full w-24 h-24 mr-4"
                    src={userData.photo}
                    alt="Profile"
                  />
                  <div>
                    <h2 className="text-xl font-medium text-gray-900">
                      {userData.name}
                    </h2>

                    {/* <p className="text-gray-600">UI Developer {userData.specialty}</p> */}
                    <p className="text-sm text-gray-500">
                      {userData.specialty}
                    </p>
                  </div>
                </div>

                {/* Description Section */}
                {/* <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
              portland. VHS man braid palo santo hoodie brunch trust fund.
              Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie
              chambray 90's, slow-carb etsy tumeric. Cray pug you probably
              haven't heard of them hexagon kickstarter craft beer pork chic.
            </p>
          </div> */}

                {/* Interested Subjects Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    experience
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {userData.experience}
                  </p>
                </div>

                {/* Booking Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <a
                    href={`/addhomeservice/${teacherId}`}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg text-lg m-2 md:m-0"
                  >
                    Join as Home Tutor
                  </a>
                  <a
                    href={`/addonlineservice/${teacherId}`}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg text-lg m-2 md:m-0"
                  >
                    Join as Online Tutor
                  </a>
                  {/* <button class="text-white bg-indigo-500 border-0  m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/onlineCourse'>Online course</a></button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-black">losdpkp</p>
      )}
      <Footer />
    </>
  );
}
