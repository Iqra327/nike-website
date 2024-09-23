import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import ExpandNav from './ExpandNav';
import { useState } from 'react';

const Nav = () => {
  const [isExpand, setIsExpand] = useState(false);
  
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img  
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29} 
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                  >
                    {item.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div className='hidden max-lg:block cursor-pointer'>
          <button onClick={() => setIsExpand(!isExpand)}>
            <img 
              src={hamburger}
              alt='Hamburger'
              width={25} 
              height={25}
            />
          </button> 
        </div>
        {isExpand ? <ExpandNav setIsExpand={setIsExpand}/> : ''}
      </nav>
    </header>
  )
}

export default Nav