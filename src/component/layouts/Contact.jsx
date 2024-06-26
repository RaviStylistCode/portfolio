import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
const Contact = () => {
  return (
    <>
      <div className="w-full h-[100vh] gap-6 p-10  flex  flex-col ">
        <h1>Contact-----</h1>
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 p-2">
          <div className="bg-white p-8 flex flex-row gap-4 shadow-2xl shadow-gray-300">
            <span className="bg-blue-400 p-8 h-[40px] rounded-full hover:bg-blue-200 md:p-8 items-center  text-3xl text-white">
            <CiLocationOn />
            </span>
            <div className="flex flex-col">
              <h1 className="text-green-400 font-bold text-3xl">My Address</h1>
              <span className="font-bold text-xl text-gray-400">Rajendra Nagar Terminal</span>
              <span className="font-bold text-xl text-gray-400">Kanti Factory Raod Mahatma Gandhi Nagar</span>
              <span className="font-bold text-xl text-gray-400">Patna 80020</span>
            </div>
          </div>
          
          <div className="bg-white p-4 flex flex-row gap-4 shadow-2xl shadow-gray-300">
            <span className="bg-blue-400 text-3xl text-white items-center  p-8 h-[40px] rounded-full hover:bg-blue-200">
            <FaShareAlt />
            </span>
            <div className="flex flex-col">
              <h1 className="text-3xl text-green-400 font-bold">Social Profile</h1>
              <span>apna gao</span>
            </div>
          </div>

          <div className="bg-white p-4 flex flex-row gap-4 shadow-2xl shadow-gray-300">
            <span className="bg-blue-400 p-8 text-3xl text-white rounded-full hover:bg-blue-200">
            <MdEmail />
            </span>
            <div className="flex flex-col overflow-auto">
              <h1 className="text-green-400 text-3xl font-bold">Email</h1>
              <span className="font-bold text-xl text-gray-400">mayanksinghaniya7368@gmail.com</span>
            </div>
          </div>

          <div className="bg-white p-4 flex flex-row gap-4 shadow-2xl shadow-gray-300">
            <span className="bg-blue-400 p-8 text-3xl text-white rounded-full hover:bg-blue-200">
            <FiPhoneCall />
            </span>
            <div className="flex flex-col">
              <h1 className="text-green-400 text-3xl font-bold">Contact</h1>
              <span className="font-bold text-xl text-gray-400">7645066610</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
