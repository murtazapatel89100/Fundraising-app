
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Username = ({ params }) => {
  return (
    <>
      <div className=' relative top-0 cover w-full'>
        <Image className='object-cover w-full h-[50vh]' width={1920} height={350} src={"/pexels-philippedonn-1114690.jpg"} alt='bg image' />
        <div className='absolute -bottom-15 right-[45%]' >
          <Image className='rounded-2xl' width={150} height={150} src={"/WhatsApp Image 2025-05-01 at 13.17.49_430e6b99.jpg"} alt='bg image' />
        </div>
      </div>
      <div className='mt-18 flex flex-col items-center justify-center'>
        <div className='font-bold'>@{params.username}</div>
        <div className='text-slate-400'>{"Creating Animated art for VTT's"}</div>
        <div className='text-slate-400'>17,884 members . 98 posts . $17,910/release</div>
      </div>
      <div className='m-5 relative flex mx-auto justify-center items-stretch gap-3 w-[80%]'>
        <div className='bg-gray-900 h-[80vh] overflow-y-auto supporters p-8 w-1/2 rounded-2xl'>
          <ul>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
            <li className='flex my-2 items-center gap-2'><Image src={"/avatar.gif"} alt='image' width={25} height={25} /><b>xyz</b> doated <b>$1000</b> with a <b><i>message</i></b></li>
          </ul>
        </div>
        <div className='bg-gray-900 payment gap-3 p-8 w-1/2 flex flex-col justify-center rounded-2xl'>

          <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Please Fill the requried Details</label>
          <input required type="text" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" />
          <input required type="number" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Amount" />
          <input required type="text" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Message" />
          <div className='flex gap-2 mt-3'>

            <button className='bg-slate-800 cursor-pointer rounded-lg p-2'>Pay $10</button>
            <button className='bg-slate-800 cursor-pointer rounded-lg p-2'>Pay $30</button>
            <button className='bg-slate-800 cursor-pointer rounded-lg p-2'>Pay $50</button>
          </div>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">PAY</button>
          <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <Link href={"/TACs"} class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</Link>.</p>

        </div>
      </div>
    </>
  )
}

export default Username