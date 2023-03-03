
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import {PageInfo, Social} from "@/typings";
import {client} from "@/lib/sanity.client";
import { groq } from "next-sanity";



export default async  function Home() {
    const socials:Social[] = await client.fetch(groq`*[_type == "social"]`)
    const pageInfo:PageInfo = await client.fetch(groq`*[_type == "pageInfo"][0]`)

        return (
        <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y
                snap-mandatory overflow-y-scroll overflow-x-hidden z-0
                scrollbar scrollbar-thumb-[#F7AB0A] scrollbar-track-slate-700
                scrollbar-thumb-rounded-md scrollbar-thin'>
            <Header socials={socials}/>
            <section id='hero'  className='snap-start'>
                <Hero pageInfo={pageInfo}/>
            </section>
        </div>
        )
}




