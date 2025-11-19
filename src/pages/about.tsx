'use client'
import Staris from '@/components/Staris'
import StrokeText from '@/components/StrokeText'
import React, { ReactNode } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import Blob from '@/components/Blob/Blob'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { SocialIcon } from 'react-social-icons'
import Head from 'next/head'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(useGSAP)

// about me page
export default function About() {
    useGSAP(() => {

        const t2 = gsap.timeline()

        const split = SplitText.create('.t2', { type: 'lines' })
        t2.from('.stroke', { scale: 0, rotate: 360, delay: 1 })
            .from('.t', { autoAlpha: 0 })
            .from(split.lines, { autoAlpha: 0, y: 20, x: 5, stagger: 0.2 })
            .from('.icons', { autoAlpha: 0, })
    })

    return (
        <main>
            <Head>
                <title>About Me | Yahyea Almuwail</title>
                <meta name="description" content="Learn about Yahyea Almuwail, a flutter developer specializing in React, Next.js, Tailwind CSS, and TypeScript. Based in Damascus University graduate." />
                <link rel="canonical" href="https://yahyea-almuwail.vercel.app/about" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Yahyea Almuwail",
                        jobTitle: "Flutter Developer",
                        alumniOf: "Damascus University",
                        url: "http://yahyea-almuwail.vercel.app/about",
                        sameAs: [
                            "https://github.com/yahyea-almuwail",
                            "https://t.me/Yahyea_al",
                            "http://wa.me/+963932717758"
                        ]
                    })
                }} />
            </Head>
            <Staris>
                <div className=" md:h-[calc(100vh-64px)]   flex flex-col items-start justify-start md:justify-center gap-10 md:gap-0 px-4 lg:px-44  overflow-hidden relative   ">
                    <header className='mt-10 md:mt-0 md:pl-32 lg:pl-5 text-xl  lg:text-4xl'>
                        <SectionTitle>About me</SectionTitle>
                    </header>
                    <section className="flex items-center relative bg-transparent">

                        <div className="stroke text-[150px] lg:text-[350px] absolute md:static">
                            <StrokeText>Y</StrokeText>
                        </div>

                        {/* Your descriptive text */}
                        <article className="relative z-10">
                            <h2 className="t text-xl lg:text-4xl mb-4 lg:mb-6 tracking-[2px] font-bold uppercase">
                                Yahyea Almuwail flutter Developer
                            </h2>
                            <p className="t2 leading-loose text-md lg:text-lg opacity-80 text-balance">
                                I’m a Telecommunications Engineering graduate from Damascus University with 1 year of focused experience in Flutter development.
                                Based in Damascus, Syria, I work on <span className='text-base'>&ndash;</span> site crafting pixel <span className='text-base'>&ndash;</span> perfect, high <span className='text-base'>&ndash;</span>performant mobile applications using <SpecialText>Flutter</SpecialText>.  
                                I take pride in writing <SpecialText>clean</SpecialText>, <SpecialText>maintainable</SpecialText> code, following industry best practices and patterns to ensure every project is robust and future <span className='text-base'>&ndash;</span> proof.
                            </p>
                            <div className='icons pb-8'>

                                <SocialIcon className="absolute !w-10 !h-10" target='_blank' url="https://github.com/yahyea-almuwail" bgColor="transparent" />

                                <SocialIcon className="absolute !w-10 !h-10 " target='_blank' url="https://t.me/Yahyea_al" bgColor="transparent" />
                                <SocialIcon className="absolute !w-10 !h-10" target='_blank' url="http://wa.me/+963932717758" bgColor="transparent" />

                            </div>
                        </article>
                    </section>
                </div>

                {/* 
        1) Removed Tailwind’s `blur-2xl`.
        2) Added explicit `filter` and `WebkitFilter` inline.
        3) Added `transform: translateZ(0)` + `WebkitTransform: translateZ(0)` to force GPU layer.
        4) Added `backfaceVisibility: 'hidden'` (and prefix) so Safari won’t fallback to black.
      */}
                <div className='absolute h-full w-full top-0  left-0 pointer-events-none overflow-hidden '>
                    <div className='absolute h-full w-full top-1/2 -translate-x-1/2 left-0 lg:left-36 md:opacity-60'>
                        <Blob />
                    </div>
                </div>
            </Staris>
        </main>
    )
}
function SpecialText({ children }: { children: ReactNode }) {
    return <span className='text-purple-600'>{children}</span>
}