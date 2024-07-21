import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-full w-64 flex flex-col justify-between">
      <div className="p-4">
        <ul className="mt-4">
          <a href="/infoteacher">
            <li className="text-white hover:text-white cursor-pointer py-2 font-bold">
              Teacher
            </li>
          </a>
          <a href="/courseinfo">
            <li className="text-white hover:text-white cursor-pointer py-2 font-bold">
              Course{" "}
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
