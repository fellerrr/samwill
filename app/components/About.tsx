'use client'
import React from 'react';
import {motion} from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className='h-screen flex flex-col relative text-center md:text-left
        md:flex-row max-w-7xl px-5 sm:px-10 mx-auto justify-start
        sm:justify-evenly items-center'>
            <h3 className="absolute top-16 pl-6 uppercase tracking-[20px]
            text-gray-500 text-sm md:text-2xl">О компании</h3>
            <motion.img
                initial={{x: -200, opacity: 0}}
                transition={{duration: 1.2}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                src='./ceh.jpg'
                className='mt-28 sm:-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-56 sm:h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-96 xl:w-[500px]'
            />
            <div className='space-y-3 md:space-y-10 px-0 mt-3 md:px-10'>

                <h4 className='text-2xl md:text-4xl font-semibold'>Кознов Е.С. ИП</h4>
                <p className='text-sm sm:text-base '>
                    Мы имеем богатый опыт в производстве досок и бруса любого размера, и наша продукция подходит как для
                    частного, так и для коммерческого использования. Мы гордимся своей работой и уважаем каждого нашего
                    клиента, поэтому наш основной принцип - это качество продукции и высокий уровень обслуживания.
                    <br/><br/>
                    Готовы рассмотреть индивидуальные запросы и требования клиентов, чтобы удовлетворить их потребности.
                    Если вы ищете надежного производителя пиломатериалов и сборщика вагончиков, обращайтесь к нам - мы
                    всегда рады помочь!
                </p>
            </div>
        </motion.div>
    );
};

export default About;