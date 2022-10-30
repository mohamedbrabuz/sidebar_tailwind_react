import { useState } from 'react';
//icons
import {TbArrowsLeftRight} from 'react-icons/tb'
import {MdOutlineWidgets, MdOutlineFavoriteBorder} from 'react-icons/md'
import {CgCalendarTwo, CgAlbum} from 'react-icons/cg'
import {RiCoupon2Line, RiFundsBoxLine, RiCompassDiscoverLine} from 'react-icons/ri'
import {HiOutlineUserGroup, HiOutlineHome} from 'react-icons/hi'
//svg
import Tailwind from './tailwind.svg'

function App() {
  const [open, setOpen] = useState(true)
  const menus = [
    {name: 'Home', link:'', icon: <HiOutlineHome size={25} />},
    {name: 'Trends', link:'', icon: <RiFundsBoxLine size={25}/>},
    {name: 'Feed', link:'', icon: <RiCompassDiscoverLine size={25}/>},
  ]
  const discover = [
    {name: 'New and Notable', link:'', icon: <MdOutlineWidgets size={25} />},
    {name: 'Release Calendar', link:'', icon: <CgCalendarTwo size={25}/>},
    {name: 'Events', link:'', icon: <RiCoupon2Line size={25}/>},
  ]
  const collection = [
    {name: 'Favorite Songs', link:'', icon: <MdOutlineFavoriteBorder size={25} />},
    {name: 'Artist', link:'', icon: <HiOutlineUserGroup size={25}/>},
    {name: 'Albums', link:'', icon: <CgAlbum size={25}/>},
  ]
  return (
    <div className='flex'>
      <div className={`h-screen bg-slate-100 py-5 px-7 ${open ? 'w-72' : 'w-28'} duration-300`}>
        <div className={`flex ${open ? 'justify-between' : 'justify-center'}`}>
          <div className='flex gap-2'>
            <div className='bg-red-700 w-3 h-3 rounded-full'></div>
            <div className='bg-yellow-400 w-3 h-3 rounded-full'></div>
            <div className='bg-green-600 w-3 h-3 rounded-full'></div>
          </div>
          {open && <TbArrowsLeftRight className='text-gray-700 hover:scale-125 duration-300 transition-all cursor-pointer' size={18} onClick={() => setOpen(!open)} />}
        </div>
        <div className={`flex gap-2 items-center ${!open ? 'justify-center' : ''}  my-8`}>
          <img src={Tailwind} alt="tailwind" className='w-10 h-10' />
          <h2 className={`text-3xl font-semibold text-yellow-500 clear-both ${!open ?'hidden' : ''}`}><span className='text-[#1E293B]'>Side</span>Bar</h2>
        </div>
        {/* links */}
        {/* main */}
        <div className={`flex flex-col ${!open ? 'items-center' : ''}`}>
          {menus.map((menu, index)=>(
            <div key={index} className={`flex items-center ${!open ? 'justify-center ' : ''} text-gray-600 gap-3 py-3 px-4 hover:bg-[#1E293B] hover:text-white rounded-xl`}>
              <div className='font-bold'>{menu.icon}</div>
              <h4 className={`font-semibold text-lg ${!open && 'hidden'}`}>{menu.name}</h4>
            </div>
          ))}
          {/* discover */}
          <p className='text-md text-gray-400 text-sm font-semibold my-3 mx-4'>Discover</p>
          {discover.map((menu, index)=>(
            <div key={index} className='flex items-center text-gray-600 gap-3 py-3 px-4 hover:bg-black hover:text-white rounded-xl'>
              <div>{menu.icon}</div>
              <h4 className={`font-semibold text-lg ${!open && 'hidden'}`}>{menu.name}</h4>
            </div>
          ))}
          {/* collection */}
          <p className={`text-md text-gray-400 text-sm font-semibold mx-4 my-3 ${!open && 'text-center'}`}>Your Collection</p>
          {collection.map((menu, index)=>(
            <div key={index} className='flex items-center text-gray-600 gap-3 py-3 px-4 hover:bg-black hover:text-white rounded-xl'>
              <div>{menu.icon}</div>
              <h4 className={`font-semibold text-lg ${!open && 'hidden'}`}>{menu.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className='py-5 px-[2rem]'>
      {!open && <TbArrowsLeftRight className='text-gray-700 hover:scale-125 duration-300 transition-all cursor-pointer' size={18} onClick={() => setOpen(!open)} />}
      </div>
    </div>
  );
}

export default App;
