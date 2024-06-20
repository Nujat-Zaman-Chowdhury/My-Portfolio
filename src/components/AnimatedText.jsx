"use client"
import React from 'react';
import {motion} from "framer-motion"

const AnimatedText = ({text}) => {
    return (
        <motion.div className='font-semibold text-3xl md:text-4xl lg:text-5xl flex justify-center items-center'
        initial={{
            opacity: 0,
            y: 50
        }}
        animate={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }}
        >
        <h1 className='dark:text-light'>{text}</h1>
        </motion.div>
    );
};

export default AnimatedText;