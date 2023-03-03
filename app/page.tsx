
import {PageInfo, Social, Demand, Advantages, Sale} from "@/typings";
import {client} from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Demands from "@/app/components/Demands";
import Advantage from "@/app/components/Advantage";
import Sales from "@/app/components/Sales";
import Contact from "@/app/components/Contact";
import {ArrowUpIcon} from "@heroicons/react/24/solid";



export default async  function Home() {
    const socials:Social[] = await client.fetch(groq`*[_type == "social"]`)
    const pageInfo:PageInfo = await client.fetch(groq`*[_type == "pageInfo"][0]`)
    const demand:Demand[] = await client.fetch(groq`*[_type == "demand"] | order(_createdAt asc)`)
    const advantages:Advantages[] = await client.fetch(groq`*[_type == "advantages"]`)
    const sale:Sale[] = await client.fetch(groq`*[_type == "sale"] | order(_createdAt asc)`)

        return (
        <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y
                snap-mandatory overflow-y-scroll overflow-x-hidden z-0
                scrollbar scrollbar-thumb-[#F7AB0A] scrollbar-track-slate-700
                scrollbar-thumb-rounded-md scrollbar-thin'>
            <Header socials={socials}/>
            <section id="hero"  className='snap-start'>
                <Hero pageInfo={pageInfo}/>
            </section>
            <section id="about" className='snap-center'>
                <About/>
            </section>
            <section id='demand' className='snap-center'>
                <Demands demand={demand}/>
            </section>
            <section id='advantages' className='snap-start'>
                <Advantage advantages={advantages}/>
            </section>
            <section id='sale' className='snap-start'>
                <Sales sale={sale}/>
            </section>
            <section id='contact' className='snap-start'>
                <Contact pageInfo={pageInfo}/>
            </section>

            <footer className='sticky w-[10%] cursor-pointer bottom-14 ml-auto'>
                <div className='flex  items-center '>
                    <div className='bg-gray-500/30 hover:bg-yellow-500 rounded-full p-1 ml-auto mr-10'>
                        <a href="#hero">
                            <ArrowUpIcon className='h-4 w-4 md:h-7 md:w-7 cursor-pointer text-gray-900 '/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
        )
}




