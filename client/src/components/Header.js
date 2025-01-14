import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import hamburgerIcon from '../public/icon-hamburger.svg';
import useWindowSize from './useWindowSize';

function Header() {
  const [display, setDisplay] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    console.log(windowSize.width)
    console.log(display)

    if (windowSize.width > 771) {
      setDisplay(true)
    } else {
      if (display === true) {
        setDisplay(false)
      }
    }
  }, [windowSize])

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </Helmet>
      <div className='font-Publicsans px-60 py-10 m-0 max-xl:px-0'>
        <nav className=' '>
          <div className='border relative hidden max-md:block w-full h-11 bg-neutral-100'>
            <img src={hamburgerIcon} onClick={() => setDisplay(display === false ? true : false)} alt="logo" class="absolute right-0 cursor-pointer w-7 h-5 border mx-4 my-2" />
          </div>

          <div id='toggle' className={`bg-neutral-100  z-40 flex list-none p-1 relative max-md:flex-col max-md:${display ? 'block' : 'hidden'} max-md:bg-white`}>
            <li className='p-2 cursor-pointer hover:bg-slate-50'><Link to='/'>Home</Link></li>
            <li className='p-2 cursor-pointer hover:bg-slate-50'><Link to='/new-post'>New Post</Link></li>
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
      </div>
    </div>
  );
}

export default Header;