import React, { useContext } from "react";
import Header from "../components/Header";
import TodayStatus from "../components/TodayStatus";
import MonthlyProgress from "../components/MonthlyProgress";
import { AppContext } from "../context/AppContext";

const Caretaker = () => {
  const { navigate } = useContext(AppContext);
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
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
                  className="lucide lucide-users w-8 h-8"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Caretaker Dashboard</h2>
                <p className="text-white/90 text-lg">
                  Monitoring Eleanor Thompson's medication adherence
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-white/80">Adherence Rate</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">5</div>
                <div className="text-white/80">Current Streak</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">3</div>
                <div className="text-white/80">Missed This Month</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">4</div>
                <div className="text-white/80">Taken This Week</div>
              </div>
            </div>
          </div>
          <div dir="ltr" data-orientation="horizontal" className="space-y-6">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-4"
              tabIndex="0"
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="radix-:r0:-content-overview"
                data-state="active"
                id="radix-:r0:-trigger-overview"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                tabIndex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Overview
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:r0:-content-activity"
                data-state="inactive"
                id="radix-:r0:-trigger-activity"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                tabIndex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Recent Activity
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:r0:-content-calendar"
                data-state="inactive"
                id="radix-:r0:-trigger-calendar"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                tabIndex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Calendar View
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:r0:-content-notifications"
                data-state="inactive"
                id="radix-:r0:-trigger-notifications"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                tabIndex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Notifications
              </button>
            </div>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r0:-trigger-overview"
              id="radix-:r0:-content-overview"
              tabIndex="0"
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-6"
              style={{ animationDuration: "0s" }}
            >
              <TodayStatus />
              <MonthlyProgress />
            </div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r0:-trigger-activity"
              hidden=""
              id="radix-:r0:-content-activity"
              tabIndex="0"
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-6"
            ></div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r0:-trigger-calendar"
              hidden=""
              id="radix-:r0:-content-calendar"
              tabIndex="0"
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-6"
            ></div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r0:-trigger-notifications"
              hidden=""
              id="radix-:r0:-content-notifications"
              tabIndex="0"
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Caretaker;
