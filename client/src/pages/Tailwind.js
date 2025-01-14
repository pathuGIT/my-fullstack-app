import React, { useEffect, useState } from 'react'
import hamburgerIcon from '../public/icon-hamburger.svg';
import useWindowSize from '../components/useWindowSize';

function Tailwind() {

    const [display, setDisplay] = useState(false);
    const windowSize = useWindowSize();

    useEffect(()=>{
        console.log(windowSize.width)
        console.log(display)

        if(windowSize.width > 771){
            setDisplay(true)
        }else{
            if(display === true){
                setDisplay(false)
            }
        }
    },[windowSize])
    
    return (
        <div className='font-Publicsans px-60 m-0 max-xl:px-0'>
            <nav className='border '>
                <div className='border relative hidden max-md:block w-full h-7 '>
                    <img src={hamburgerIcon} onClick={()=> setDisplay(display === false ? true : false)} alt="logo" class="absolute right-0 cursor-pointer h-3 m-2" />
                </div>

                <div id='toggle' className={`border bg-neutral-50 flex list-none p-1 relative z-20 max-md:flex-col ${display ? 'block' : 'hidden'}`}>
                    <li className='p-2 cursor-pointer hover:bg-slate-50'>Home</li>
                    <li className='p-2 cursor-pointer hover:bg-slate-50'>About</li>
                    <li className='p-2 cursor-pointer hover:bg-slate-50'>Contact</li>
                    <li className='p-2 cursor-pointer hover:bg-slate-50'>Blog</li>
                    <li className='p-2 cursor-pointer hover:bg-slate-50'>Careers</li>

                    <div className=' absolute right-0  max-md:hidden'>
                        <li className='py-2 px-4 cursor-pointer hover:bg-emerald-500 rounded-sm'>Login</li>
                    </div>
                    <div className=' hidden max-md:block'>
                        <li className='py-2 px-4 cursor-pointer hover:bg-emerald-500 rounded-sm'>Login</li>
                    </div>
                </div >

            </nav>

            <div id='body-section' className=' bg-slate-500 w-full h-96 absolute top-44 z-10 '>
                Heloo
            </div>
        </div>
    )
}

export default Tailwind