import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";

function Input() {
  return (
    <div className="border-b border-gray-200 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ">
      <img
        src="https://www.adscientificindex.com/pictures/0b/50734.jpg"
        alt="user-image"
        className="h-11 w-11 rounded-full cursor-pointer  hover:brightness-95 transition-all duration-200"
      />
      <div className="divide-y divide-gray-200 w-full">
        <div className="">
          <textarea
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-gray-700 text-xl placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon">
              <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon">
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
          </div>
          <button className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
