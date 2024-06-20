"use client"
import Link from 'next/link';
import React, { createContext } from 'react';

import { motion } from 'framer-motion';

const MotionLink = motion(Link)


const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink className='p-3 w-16 h-16 bg-dark text-white flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light' href="/"
            
            whileHover={{
                backgroundColor:["#800080","#FF0000","#808000"],
                transition: {duration:1, repeat:Infinity,}
            }}
            >NZC</MotionLink>
        </div>
    );
};

export default Logo;