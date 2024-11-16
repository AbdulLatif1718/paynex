import React, { useEffect, useState } from 'react';

const typewriterStrings = ['Payments', 'Investments', 'Transfers'];

const HomePage = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = typewriterStrings[index];
    const typingSpeed = isDeleting ? 90 : 190;

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % typewriterStrings.length);
    }

    const timeoutId = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentString.slice(0, prev.length - 1)
          : currentString.slice(0, prev.length + 1)
      );

      if (!isDeleting && text === currentString) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [text, index, isDeleting]);

  return (
    <div className='font-sans'>
      {/* Hero Section */}
      <div
        className='bg-cover bg-center h-screen flex items-center justify-center text-white relative'
        style={{
          backgroundImage: `url('https://media.zinnov.com/wp-content/uploads/2023/08/india-finance-centers-of-excellence-coes-landscape-featured.png')`
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className='max-w-[800px] w-full text-center px-4 relative z-10'>
          <p className='text-[#00df9a] font-bold p-2 text-lg'>
            PAYNEX: REVOLUTIONIZING FINANCE
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-3xl font-bold py-4'>
            Enhance Your Financial Experience
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>
              Fast, secure solutions for
            </p>
          </div>
          <div className='flex justify-center items-center mt-4 bg-gray-800 bg-opacity-70 rounded-full p-4 w-full md:w-1/2 mx-auto' style={{ minHeight: '80px' }}>
            <span className='md:text-3xl sm:text-2xl text-xl font-bold text-center'>
              {text}
            </span>
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-300 mt-4'>
            Enjoy seamless transactions with PayNex.
          </p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
