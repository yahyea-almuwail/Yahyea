import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../../public/logo/logo.png'
export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='h-14 w-[98vw] py-8 flex  items-center justify-between px-8 relative  text-white z-30   '>
            <div className=' flex items-center gap-2 '>
                <Image src={logo} alt='Yahyea Almuwail' className='object-cover w-10 h-10 rounded-full' />
                <h1 className='   text-lg md:text-xl font-poppins-regular  select-none'>Yahyea Almuwail</h1>

            </div>

        
            <div>
                <button className='   flex items-center justify-center gap-3  cursor-pointer  ' onClick={() => {
                    setToggle(!toggle)
                }}>
                    <span className='hidden lg:block uppercase text-sm'>menu</span>
                    <div className='w-6 flex flex-col gap-1 '>
                        <div className='relative w-full h-[2px] bg-white'></div>
                        <div className='relative w-2/3 h-[2px] bg-white mt-1.5'></div>
                    </div>

                </button>
            </div>

            <div className={` w-full absolute !px-8 !py-3 left-0 transition-transform z-[3000] bg-black/80 backdrop-blur-3xl    ${toggle ? 'top-full' : '-translate-y-40'}`}>
                <ul className={` relative w-full flex flex-col gap-6  `}>
                    <Link href={'/'}><li className='border-b border-white/20 pb-2' onClick={() => setToggle(false)}>Home</li></Link>
                    <Link href={'/about'}><li className='border-b border-white/20 pb-2' onClick={() => setToggle(false)}>About</li></Link>
                    <Link href={'/services'}><li className='border-b border-white/20 pb-2' onClick={() => setToggle(false)}>Services</li></Link>
                </ul>
            </div>
        </nav>
    )
}
