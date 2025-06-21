import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center text-white flex-col h-[44vh] text-center px-4">
        <div className="flex gap-2 justify-center items-center font-bold text-5xl flex-wrap">
          Get Me A Chai
          <span>
            <Image width={70} height={70} src="/tea.gif" alt="chai gif" />
          </span>
        </div>
        <p className="max-w-xl mt-4 text-lg text-gray-300">
          A crowdfunding platform for your favorite creators and projects you
          wish to see grow.
        </p>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:text-white dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent transition-all duration-75 ease-in">
              Sign Up
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:text-white dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent transition-all duration-75 ease-in">
              Explore our creators
            </span>
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pt-10 pb-16 px-4">
        <h2 className="text-center font-bold text-3xl mb-10">
          Your Fans Can Buy You A Chai
        </h2>
        <div className="flex flex-wrap justify-around gap-8 text-center">
          <div className="flex flex-col items-center max-w-[200px]">
            <Image
              className="rounded-full bg-slate-400 p-2"
              width={90}
              height={90}
              src="/man.gif"
              alt="Support Creators"
            />
            <p className="font-bold italic mt-3">Help Your Creators</p>
            <p className="text-sm text-gray-300 mt-2">
              Your fans and friends are here to support your journey.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[200px]">
            <Image
              className="rounded-full bg-slate-400 p-2"
              width={90}
              height={90}
              src="/coin.gif"
              alt="Fund Projects"
            />
            <p className="font-bold italic mt-3">Fund Your Projects</p>
            <p className="text-sm text-gray-300 mt-2">
              Receive contributions for the work that matters.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[200px]">
            <Image
              className="rounded-full bg-slate-400 p-2"
              width={90}
              height={90}
              src="/group.gif"
              alt="Show Support"
            />
            <p className="font-bold italic mt-3">Show Your Support</p>
            <p className="text-sm text-gray-300 mt-2">
              Let creators know you believe in them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
