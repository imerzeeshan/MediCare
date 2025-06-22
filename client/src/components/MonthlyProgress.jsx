import React from "react";

const MonthlyProgress = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Monthly Adherence Progress
        </h3>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Overall Progress</span>
            <span>85%</span>
          </div>
          <div
            aria-valuemax="100"
            aria-valuemin="0"
            role="progressbar"
            data-state="indeterminate"
            data-max="100"
            className="relative w-full overflow-hidden rounded-full bg-secondary h-3"
          >
            <div
              data-state="indeterminate"
              data-max="100"
              className="h-full w-full flex-1 bg-blue-950 transition-all"
              style={{ transform: "translateX(-15%)" }}
            ></div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-medium text-green-600">22 days</div>
              <div className="text-muted-foreground">Taken</div>
            </div>
            <div>
              <div className="font-medium text-red-600">3 days</div>
              <div className="text-muted-foreground">Missed</div>
            </div>
            <div>
              <div className="font-medium text-blue-600">5 days</div>
              <div className="text-muted-foreground">Remaining</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyProgress;
