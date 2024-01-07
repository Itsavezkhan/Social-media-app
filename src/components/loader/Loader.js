import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex items-start gap-2 p-4 animate-pulse w-full border-b">
          <div className="shrink-0">
            <div className="bg-slate-100 dark:bg-slate-100 rounded-full h-12 w-12"></div>
          </div>

          <div className="grow">
            <div className="flex">
              <div className="bg-slate-100 dark:bg-darkerGray h-4 w-24"></div>
              <div className="bg-slate-100  dark:bg-darkerGray h-4 w-16"></div>
            </div>

            <div className="mt-2">
              <div className="bg-slate-100 dark:bg-darkerGray h-3 w-full"></div>
              <div className="bg-slate-100  dark:bg-darkerGray h-3 w-2/3 mt-2"></div>
              <div className="bg-slate-100 dark:bg-darkerGray h-3 w-1/2 mt-2"></div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 p-4 animate-pulse w-full border-b">
          <div className="shrink-0">
            <div className="bg-slate-100 dark:bg-darkerGray rounded-full h-12 w-12"></div>
          </div>

          <div className="grow">
            <div className="flex">
              <div className="bg-slate-100  h-4 w-24"></div>
              <div className="bg-slate-100 h-4 w-16"></div>
            </div>

            <div className="mt-2">
              <div className="bg-slate-100  h-3 w-full"></div>
              <div className="bg-slate-100  h-3 w-2/3 mt-2"></div>
              <div className="bg-slate-100   h-3 w-1/2 mt-2"></div>
            </div>

            <div className="mt-2 w-full aspect-video rounded-lg bg-slate-100"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
