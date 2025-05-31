import Image from 'next/image';
export default function Home() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center text-white flex-col h-[44vh]" >
        <div className="flex gap-2 justify-center items-center font-bold text-5xl" >Buy Me A Chai <span><Image width={90} height={90} src="/tea.gif" alt="image" /></span></div>
        <p>A croud funding platform for you favoraite projects creators and everyone you wish to see grow</p>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Start Now
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className='text-white container mx-auto pt-6 pb-10'>
        <h1 className='text-center font-bold text-3xl my-6' >Yours Fan Can Buy You A Chai</h1>
        <div className='flex justify-around gap-5'>
        <div className="items flex flex-col justify-center items-center">
            <Image className='rounded-full bg-slate-400 p-2' width={90} height={90} src="/man.gif" alt='image of a man' />
            <p className='text-white font-bold font-style: italic'>
              help your creators
            </p>
            <p className='my-2'>Your friends are here to help you</p>
          </div>
          <div className="items flex flex-col justify-center items-center">
            <Image className='rounded-full bg-slate-400 p-2' width={90} height={90} src="/coin.gif" alt='image of a man' />
            <p className='text-white font-bold font-style: italic'>
              Fund your projects
            </p>
            <p className='my-2'>Your friends are here to help you</p>
          </div>
          <div className="items flex flex-col justify-center items-center">
            <Image className='rounded-full bg-slate-400 p-2' width={90} height={90} src="/group.gif" alt='image of a man' />
            <p className='text-white font-bold font-style: italic'>
              Show your support
            </p>
            <p className='my-2'>Your friends are here to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className='text-white container mx-auto pt-6 pb-10'>
        <h1 className='text-center font-bold text-3xl my-6' >Yours Fan Can Buy You A Chai</h1>
        <div className='flex justify-around gap-5'>
        <div className="items flex flex-col justify-center items-center">
            <Image className='rounded-full bg-slate-400 p-2' width={90} height={90} src="/man.gif" alt='image of a man' />
            <p className='text-white font-bold font-style: italic'>
              help your creators
            </p>
            <p className='my-2'>Your friends are here to help you</p>
          </div>
          <div className="items flex flex-col justify-center items-center">
            <Image className='rounded-full bg-slate-400 p-2' width={90} height={90} src="/coin.gif" alt='image of a man' />
            <p className='text-white font-bold font-style: italic'>
              Fund your projects
            </p>
            <p className='my-2'>Your friends are here to help you</p>
          </div>
          <div className="items flex flex-col justify-center items-center">
            <Image className='rounded-full bg-slate-400 p-2' width={90} height={90} src="/group.gif" alt='image of a man' />
            <p className='text-white font-bold font-style: italic'>
              Show your support
            </p>
            <p className='my-2'>Your friends are here to help you</p>
          </div>
        </div>
      </div>
    </>
  );
}
