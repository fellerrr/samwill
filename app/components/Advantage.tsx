"use client"
import { motion } from 'framer-motion';
import React, {useState} from 'react';
import Image from "next/image";
import {Advantages} from "@/typings";
import { urlFor } from '@/lib/sanity.client';

type Props = {
    advantages: Advantages[]
}
const Advantage = ({advantages}:Props) => {

    const [openIndex, setOpenIndex] = useState<number>(100);

    const handleClick = (index:number) => {
        if (index === openIndex) {
            // Clicked on open item, so close it
            setOpenIndex(100);
        } else {
            // Clicked on closed item, so open it and close others
            setOpenIndex(index);
        }
    };
    return(
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className='h-screen flex flex-col relative text-center
        lg:flex-row max-w-7xl px-5 lg:px-10 mx-auto justify-start
        lg:justify-evenly items-center lg:items-start pt-[12rem] lg:pt-[9rem] gap-10 mb-8'>
            <h3 className="absolute top-16 lg:top-18 pl-6 uppercase tracking-[20px]
            text-gray-500 text-sm lg:text-2xl leading-8 ">НАШИ ПРЕИМУЩЕСТВА</h3>
            {
                advantages.map((t,id) =>{
                    return(
                        <div key={t.title} className='flex flex-col lg:basis-1/4 gap-2 justify-center items-center'>

                            <div
                                className='flex flex-col  gap-2 justify-center items-center lg:hidden'
                                onClick={() => handleClick(id)}
                            >
                                <div
                                    className='flex'
                                    onClick={() => handleClick(id)}
                                >
                                    <h3 className='cursor-pointer mr-3 '>
                                        {t.title}
                                    </h3>
                                    <Image src='/pointer.png' alt='touch' width={20} height={16}/>
                                </div>
                                {openIndex === id && (
                                    <p className='text-gray-400 mt-4'>{t.subTitle}</p>
                                )}
                            </div>


                            <h3 className='text-2xl flex-shrink-0 hidden lg:block mb-6'>
                                {t.title}
                            </h3>
                            <img src={urlFor(t.image).url()}
                                 className='hidden lg:block w-30 h-20 rounded-3xl mb-6'
                                 alt='we are the best'
                            />
                            <p className='hidden lg:block text-base text-center text-gray-200'>{t.subTitle}</p>
                        </div>
                    )
                })
            }

        </motion.div>
    )


};

export default Advantage;

