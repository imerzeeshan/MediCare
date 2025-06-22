import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PatientCard = () => {
  const { navigate } = useContext(AppContext);
  return (
    <div
      className="rounded-lg border-gray-400/20 text-card-foreground shadow-sm group hover:shadow-xl transition-all 
        duration-300 border-2 hover:border-blue-200 cursor-pointer"
    >
      <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user w-8 h-8 text-blue-600"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <h3 className="font-semibold tracking-tight text-2xl text-blue-700">
          I'm a Patient
        </h3>
        <p className="text-muted-foreground text-base text-[#64748b]">
          Track your medication schedule and maintain your health records
        </p>
      </div>
      <div className="p-6 pt-0 space-y-4">
        <ul className="space-y-3 text-sm text-muted-foreground text-[#64748b]">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>Mark
            medications as taken
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>Upload proof
            photos (optional)
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>View your
            medication calendar
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>Large,
            easy-to-use interface
          </li>
        </ul>
        <button
          onClick={() => navigate("/patient")}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
        >
          Continue as Patient
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
