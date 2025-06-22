import React from "react";
import QuickAction from "./QuickAction";

const TodayStatus = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
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
              className="lucide lucide-calendar w-5 h-5 text-blue-600"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            Today's Status
          </h3>
        </div>
        <div className="p-6 pt-0">
          <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
            <div>
              <h4 className="font-medium">Daily Medication Set</h4>
              <p className="text-sm text-muted-foreground">8:00 AM</p>
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80">
              Pending
            </div>
          </div>
        </div>
      </div>
      <QuickAction />
    </div>
  );
};

export default TodayStatus;
