import React from "react";

const EmailPreview = () => {
  return (
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail w-5 h-5 text-green-600"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          Email Preview
        </h3>
      </div>
      <div class="p-6 pt-0">
        <div class="bg-gray-50 p-4 rounded-lg border">
          <div class="text-sm">
            <div class="font-medium mb-2">
              Subject: Medication Alert - Eleanor Thompson
            </div>
            <div class="text-muted-foreground">
              <p class="mb-2">Hello,</p>
              <p class="mb-2">
                This is a reminder that Eleanor Thompson has not taken her
                medication today.
              </p>
              <p class="mb-2">
                Please check with her to ensure she takes her prescribed
                medication.
              </p>
              <p>Current adherence rate: 85% (5-day streak)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
