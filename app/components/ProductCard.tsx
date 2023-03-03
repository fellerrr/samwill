'use client'
import React from 'react';

import { motion } from 'framer-motion';
import {Demand} from "@/typings";
import {urlFor} from "@/lib/sanity.client";


type Props = {
    card:Demand
}

const ProductCard = ({card}:Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-5
        flex-shrink-0 w-[400px] md:w-[500] xl:2-[800px] snap-center bg-[#292929] p-7
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
        overflow-hidden'>
            <motion.img
                initial={{
                    y:-100,
                    opacity:0
                }}
                transition={{duration: 1.2}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                src={urlFor(card?.cardImage).url()}
                className='w-32 h-32 rounded-full xl:w-[180px] xl:h-[180px] object-cover object-center'/>
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light mb-2'>{card.cardTitle}</h4>
                <ul className='list-disc space-y-1 ml-5 text-xs'>
                    {card.points.map(point=><li key={point}>{point}</li>)}
                </ul>
            </div>
        </article>
    );
};

export default ProductCard;