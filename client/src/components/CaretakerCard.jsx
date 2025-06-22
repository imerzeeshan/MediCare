import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CaretakerCard = () => {
  const { navigate } = useContext(AppContext);
  return (
    <div className="rounded-lg border-gray-400/20 text-card-foreground shadow-sm group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 cursor-pointer">
      <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
        <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
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
            className="lucide lucide-users w-8 h-8 text-green-600"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3 className="font-semibold tracking-tight text-2xl text-green-700">
          I'm a Caretaker
        </h3>
        <p className="text-muted-foreground text-base text-[#64748b]">
          Monitor and support your loved one's medication adherence
        </p>
      </div>
      <div className="p-6 pt-0 space-y-4">
        <ul className="space-y-3 text-sm text-muted-foreground text-[#64748b]">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>Monitor
            medication compliance
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>Set up
            notification preferences
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>View
            detailed reports
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>Receive
            email alerts
          </li>
        </ul>
        <button
          onClick={() => navigate("/caretaker")}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
        >
          Continue as Caretaker
        </button>
      </div>
    </div>
  );
};

export default CaretakerCard;
