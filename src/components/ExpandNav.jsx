import { createPortal } from 'react-dom';
import { navLinks } from '../constants';

const ExpandNav = ({setIsExpand}) => {
  return createPortal(
    <div className='absolute top-0 z-20 w-full max-container bg-slate-100 h-2/4 hidden max-lg:block border-b-2 border-gray-200'>
    <div 
      className='text-3xl text-coral-red font-semibold text-end m-5 me-16 cursor-pointer' 
      onClick={()=> setIsExpand(false)}>
        X
    </div>
    <div className=' flex items-center justify-center'>
      <ul className='flex flex-col gap-14'>
        {
          navLinks.map((item) => (
            <li key={item.id} onClick={()=> setIsExpand(false)}>
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
    </div>
    </div>
  , document.getElementById('nav'));
}

export default ExpandNav