import React from "react";

const RecentActivity = () => {
  return (
    <div dir="ltr" data-orientation="horizontal" className="space-y-6">
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-4"
        tabIndex="0"
        data-orientation="horizontal"
        style={{outline: "none"}}
      >
        <button
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="radix-:rk:-content-overview"
          data-state="inactive"
          id="radix-:rk:-trigger-overview"
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
          aria-selected="true"
          aria-controls="radix-:rk:-content-activity"
          data-state="active"
          id="radix-:rk:-trigger-activity"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          tabIndex="0"
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          Recent Activity
        </button>
        <button
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="radix-:rk:-content-calendar"
          data-state="inactive"
          id="radix-:rk:-trigger-calendar"
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
          aria-controls="radix-:rk:-content-notifications"
          data-state="inactive"
          id="radix-:rk:-trigger-notifications"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          tabIndex="-1"
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          Notifications
        </button>
      </div>
      <div
        data-state="inactive"
        data-orientation="horizontal"
        role="tabpanel"
        aria-labelledby="radix-:rk:-trigger-overview"
        id="radix-:rk:-content-overview"
        tabIndex="0"
        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-6"
        style=""
        hidden=""
      ></div>
      <div
        data-state="active"
        data-orientation="horizontal"
        role="tabpanel"
        aria-labelledby="radix-:rk:-trigger-activity"
        id="radix-:rk:-content-activity"
        tabIndex="0"
        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-6"
      >
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Recent Medication Activity
            </h3>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
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
                      className="lucide lucide-check w-5 h-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Monday, June 10</p>
                    <p className="text-sm text-muted-foreground">
                      Taken at 8:30 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
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
                      className="lucide lucide-camera w-3 h-3 mr-1"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                    Photo
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    Completed
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
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
                      className="lucide lucide-check w-5 h-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Sunday, June 9</p>
                    <p className="text-sm text-muted-foreground">
                      Taken at 8:15 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    Completed
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100">
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
                      className="lucide lucide-triangle-alert w-5 h-5 text-red-600"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Saturday, June 8</p>
                    <p className="text-sm text-muted-foreground">
                      Medication missed
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80">
                    Missed
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
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
                      className="lucide lucide-check w-5 h-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Friday, June 7</p>
                    <p className="text-sm text-muted-foreground">
                      Taken at 8:45 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
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
                      className="lucide lucide-camera w-3 h-3 mr-1"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                    Photo
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    Completed
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
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
                      className="lucide lucide-check w-5 h-5 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Thursday, June 6</p>
                    <p className="text-sm text-muted-foreground">
                      Taken at 8:20 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-state="inactive"
        data-orientation="horizontal"
        role="tabpanel"
        aria-labelledby="radix-:rk:-trigger-calendar"
        hidden=""
        id="radix-:rk:-content-calendar"
        tabIndex="0"
        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-6"
      ></div>
      <div
        data-state="inactive"
        data-orientation="horizontal"
        role="tabpanel"
        aria-labelledby="radix-:rk:-trigger-notifications"
        hidden=""
        id="radix-:rk:-content-notifications"
        tabIndex="0"
        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      ></div>
    </div>
  );
};

export default RecentActivity;
