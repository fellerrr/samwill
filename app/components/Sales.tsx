'use client'
import React from 'react';

import { motion } from 'framer-motion';
import {Sale} from "@/typings";
import { urlFor } from '@/lib/sanity.client';


type Props = {
    sale:Sale[]
}

const Sales = ({sale}:Props) => {
    return (
        <div className='relative h-screen flex flex-col md:flex-row mx-auto items-center
        overflow-hidden justify-evenly max-w-full z-0 '>
            <h3 className="absolute top-16 md:top-18 pl-6 uppercase tracking-[20px]
            text-gray-500 text-sm md:text-2xl leading-8 ">Акции</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
            snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-[#F7AB0A]
            scrollbar-thumb-rounded-md h-[69%] md:h-[90%]'>
                {sale.map(sal => (
                        <div key={sal._id} className='w-screen flex-shrink-0 snap-center
                        flex flex-col space-y-4 items-center justify-center
                        p-10   '>
                            <motion.img
                                initial={{
                                    y:-100,
                                    opacity:0
                                }}
                                transition={{duration: 1.2}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: true}}
                                src={urlFor(sal.image).url()}
                                className='rounded-xl w-62 h-52'  alt='bitovka' />
                            <div className='space-y-6 px-0 md:px-10 max-w-6xl flex flex-col
                            justify-center items-center'>
                                <h4
                                    className='text-4xl font-semibold text-center'>
                                    {sal.title}
                                </h4>
                                <div className='heroButtonSale
                                border-red-600 border-4 text-center
                                text-[#FF580B] text-2xl px-10'>{sal.price} Р</div>
                            </div>
                        </div>
                    )
                )}

            </div>

            <div className='absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'>

            </div>
        </div>
    );
};

export default Sales;



