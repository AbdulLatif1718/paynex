import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const services = [
  {
    title: 'Payment Processing',
    description: 'Secure and fast payment solutions.',
  },
  {
    title: 'Fraud Detection',
    description: 'Advanced tools to protect your transactions.',
  },
  {
    title: 'Account Management',
    description: 'Efficient tools to manage your finances.',
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-[#121212] shadow-lg relative z-20'>
      <h1 className='w-full text-3xl font-bold'>PAYNEX</h1>

      <ul className='hidden md:flex'>
        <li
          className='relative p-4'
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <div className='cursor-pointer'>Services</div>
          {showServices && (
            <div className='absolute left-0 w-60 bg-gray-800 rounded-md shadow-lg p-4 transition-all duration-200'>
              <h3 className='font-bold text-[#00df9a] mb-2'>Our Services</h3>
              <div className='grid grid-cols-1 gap-2'>
                {services.map((service, index) => (
                  <div key={index} className='bg-gray-700 rounded-lg p-2 hover:bg-gray-600 transition-all'>
                    <h4 className='font-bold'>{service.title}</h4>
                    <p className='text-gray-300'>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>
        <li className='p-4'>Developers</li>
        <li className='p-4'>About</li>
      </ul>

      <button className='bg-[#00df9a] text-black px-4 py-2 rounded-lg hidden md:block ml-4'>
        Login
      </button>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>PAYNEX</h1>
        <li className='relative p-4'>
          <div className='cursor-pointer' onClick={() => setShowServices(!showServices)}>Services</div>
          {showServices && (
            <div className='absolute left-0 w-60 bg-gray-800 rounded-md shadow-lg p-4 transition-all duration-200'>
              <h3 className='font-bold text-[#00df9a] mb-2'>Our Services</h3>
              <div className='grid grid-cols-1 gap-2'>
                {services.map((service, index) => (
                  <div key={index} className='bg-gray-700 rounded-lg p-2 hover:bg-gray-600 transition-all'>
                    <h4 className='font-bold'>{service.title}</h4>
                    <p className='text-gray-300'>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>
        <li className='p-4 border-b border-gray-600'>Developers</li>
        <li className='p-4'>About</li>
        <li className='p-4'>
          <button className='bg-[#00df9a] text-black px-4 py-2 rounded-lg w-full'>
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
