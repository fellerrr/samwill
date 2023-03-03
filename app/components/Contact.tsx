'use client'
import React, {FormEventHandler} from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import { useForm} from "react-hook-form";
import {PageInfo} from "@/typings";


type Props = {
    pageInfo:PageInfo
}


const Contact = ({pageInfo}:Props) => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <div className='relative h-screen flex flex-col text-center md:text-left md:flex-row mx-auto items-center
        overflow-hidden justify-evenly md:justify-center md:gap-12 max-w-7xl px-10 z-0 pt-7'>
            <h3 className="absolute top-14 md:top-18 pl-6 uppercase tracking-[20px]
            text-gray-500 text-sm md:text-2xl leading-8 ">Контакты</h3>
            <Image className='hidden md:block pt-2 rounded-2xl' src='/manager.jpg' alt='manager' width={310} height={430}/>
            <div className='space-y-6 md:w-[30%]'>
                <h4 className='text-xl font-semibold text-center mb-4'>У нас есть то, что вам нужно.<br/>
                    <span className='decoration-[#F7AB0A]/50 underline'>Обсудим.</span>
                </h4>
                <div className='space-y-2'>
                    <div>
                        <a href="tel:+79110962368">
                        {/*<a href="tel:{{pageInfo.phoneNumber}}">*/}
                            <div className='flex items-center space-x-5 justify-center'>
                                <PhoneIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse'/>
                                <p className='text-base'>{pageInfo.phoneNumber}</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:ecoznov@yandex.ru">
                            <div className='flex items-center space-x-5 justify-center '>
                                <EnvelopeIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse'/>
                                <p className='text-base'>{pageInfo.email}</p>
                            </div>
                        </a>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse'/>
                        <p className='text-base'>{pageInfo.address}</p>
                    </div>
                </div>
                <form
                    className='flex flex-col space-y-2  mx-auto'
                    onSubmit={onSubmit}
                    target="_blank"
                    action="https://formsubmit.co/{{pageInfo.email}}"
                    method="POST"
                >
                    {/*w-fit*/}

                    <input placeholder='Имя' className='contactInput '
                           type="text"
                           {...register("name", {
                               required: true,
                               maxLength: 100,
                           })}
                    />
                    {errors.name && (
                        <p className="text-red-400 mt-1">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max length is 100 char."}
                        </p>
                    )}
                    <input placeholder='e-mail' className='contactInput '
                           type="text"
                           {...register("email", {
                               required: true,
                               pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           })}
                    />
                    {errors.email && (
                        <p className="text-red-400 mt-1">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}

                    <input placeholder='Тема' className='contactInput' type="text"
                           {...register("subject")}
                    />
                    {/*todo: - Запретить расширение текстареа*/}
                    <textarea placeholder='Сообщение' className='contactInput'
                              {...register("message", {
                                  required: true,
                                  maxLength: 400,
                              })}
                    />
                    {errors.message && (
                        <p className="text-red-400 mt-1">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max length is 400 char."}
                        </p>
                    )}
                    <button type='submit' className='bg-[#F7AB0A] py-2 px-9 rounded-md
                    text-black font-bold text-lg'>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;