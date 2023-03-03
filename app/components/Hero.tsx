"use client"
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '@/typings';
import { urlFor } from '@/lib/sanity.client';




type Props = {
    pageInfo:PageInfo
}

const Hero = ({pageInfo}:Props) => {
    const [text] = useTypewriter({
        words: [
            'Покупай Доску, заказывай любой размер!',
            'Если нужен Брус - не вопрос!',
            'Современные Вагончики! Стандартные и на заказ!'
        ],
        loop: true,
        delaySpeed: 2000
    })


    // @ts-ignore
    return (
        <div className='h-screen flex flex-col items-center space-y-8 justify-center
        text-center overflow-hidden pt-16'>
            <BackgroundCircles/>
            {/*<h5>hui</h5>*/}
            <img src={urlFor(pageInfo?.heroImage).url()} alt="me"
                 className='relative rounded-full w-32 h-32 mx-auto object-cover'/>
            <div className=' z-20'>
                {/*   <h2 className=' text-sm uppercase text-gray-500*/}
                {/*pb-2 tracking-[15px]'>Кознов <span className='tracking-[5px]'>Е.C. </span>*/}
                {/*       <span className='ml-4 tracking-[2px]'>ИП</span></h2>*/}

                <h2 className=' text-sm uppercase text-gray-500
             pb-2 tracking-[15px]'>{pageInfo?.role}</h2>

                <div className='h-8 max-w-7xl'>
                    <h1 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold px-10'>
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor="#F7AB0A"/>
                    </h1>
                </div>

                <div className='mt-4 pt-5'>
                    <a href="#about">
                    {/*<Link href='#'>*/}
                        <button className="heroButton">О компании</button>
                    </a>
                    <a href='#demand'>
                    {/*<Link href='#'>*/}
                        <button className="heroButton">Мы предлагаем</button>
                    </a>
                    <a href='#advantages'>
                    {/*<Link href='#'>*/}
                        <button className="heroButton">Преимущества</button>
                    </a>
                    <a href='#sale'>
                    {/*<Link href='#'>*/}
                        <button className="heroButtonSale italic
                            text-[#FF580B] text-base bg-[#242424]">Акции %</button>
                    </a>

                </div>

            </div>
        </div>



    );
};

export default Hero;