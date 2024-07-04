import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        
            <footer className="flex flex-col space-y-10 justify-center  w-full border-t-2 border-solid border-dark py-5 font-poppins">

<nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a className="hover:text-gray-900" href="#">Home</a>
    <a className="hover:text-gray-900" href="#">About</a>
    <a className="hover:text-gray-900" href="#">Projects</a>
    <a className="hover:text-gray-900" href="#">Contact</a>
</nav>


<p className="text-center text-gray-700 font-medium">&copy; 2024  All rights reserved.</p>
</footer>
      
    );
};

export default Footer;