"use client"
import React from 'react';
import ProductCard from "@/app/components/ProductCard";
import { motion } from 'framer-motion';
import Scrollable from "@/utils/Scrollable"
import {Demand} from "@/typings";

type Props = {
    demand:Demand[]
}

const Demands = ({demand}:Props) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className='h-screen flex relative overflow-hidden flex-col text-left
        md:flex-row max-w-full px-10 justify-evenly mx-auto items-center pt-10'
        >
            <h3 className="absolute top-16 pl-4 uppercase tracking-[20px]
            text-gray-500 text-sm md:text-2xl">
                Ассортимент
            </h3>

            <Scrollable _class='w-full flex space-x-5 overflow-x-scroll p-10
            scrollbar scrollbar-thumb-[#F7AB0A]
            scrollbar-thumb-rounded-md scrollbar-thin'>
                {/*snap-x snap-mandatory*/}
                {demand.map(card => <ProductCard key={card._id} card={card}/>)}
                {/*{demand.map(card =><h1>{card.cardTitle}</h1>)}*/}


            </Scrollable>


        </motion.div>
    );
};

export default Demands;