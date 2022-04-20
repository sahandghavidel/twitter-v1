import { SparklesIcon } from "@heroicons/react/outline";
import React from "react";
import Input from "./Input";

export default function Feed() {
  return (
    <div className="flex-grow border-l border-r border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="text-gray-700 flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 " />
        </div>
      </div>
      {/* Input */}

      <Input />

      {/* Posts */}
    </div>
  );
}
