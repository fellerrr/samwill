
"use client"
import React from 'react';
import {motion} from "framer-motion";
import {SocialIcon} from "react-social-icons";
import {EnvelopeIcon} from "@heroicons/react/24/outline";
import { Social } from '@/typings';



type Props = {
    socials:Social[]
}

const Header = ({socials}:Props) => {
    // console.log(socials)
    // const arr = [1,2,3]
    return (
        <header className='sticky top-0 px-5 flex items-center justify-between max-w-7xl
        mx-auto z-20 xl:items-center'>
            {/* Social icons */}
            <motion.div
                initial={{x: -500, opacity: 0, scale: 0.5}}
                animate={{x: 0, opacity: 1, scale: 1}}
                transition={{duration: 1.5}}
                className='flex flex-row item-center'>
                {socials.map(social =>
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor='gray'
                        bgColor='transparent'
                    />
                )}
            </motion.div>
            <a href='#contact'>
            {/*<Link href='#'>*/}
                <motion.div
                    initial={{x: 500, opacity: 0, scale: 0.5}}
                    animate={{x: 0, opacity: 1, scale: 1}}
                    transition={{duration: 1}}
                    className='flex flex-row items-center text-gray-300 cursor-pointer gap-3'
                >
                    <EnvelopeIcon className=' h-7 w-7 cursor-pointer text-gray-400 '/>
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
                </motion.div>
            </a>
        </header>
    );
};

export default Header;