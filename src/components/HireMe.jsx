import React from 'react';
import { CircleText } from './icons';
import Link from 'next/link';

const HireMe = () => {
    return (
        <div className="fixed right-0 -bottom-6 flex items-center justify-center overflow-hidden mb-8">
            <div className='w-28 md:w-32 h-auto flex items-center justify-center relative'>
                <CircleText className={"fill-dark animate-spin-slow dark:fill-light"}/>

                <Link className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light  text-light  dark:text-dark font-bold border border-solid border-dark w-16 h-16 md:w-20 md:h-20 rounded-full hover:bg-light hover:text-dark' href="mailto: nujattazin@gmail.com">Hire Me</Link>
            </div>
        </div>
    );
};

export default HireMe;