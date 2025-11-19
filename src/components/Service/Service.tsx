'use client'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
export default function Service({ header, body, index, ref }: { header: string, body: string, index: number, ref: React.RefObject<null> }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                // markers: true,
                scrub: true,
                end: 'bottom center'
            }
        })
        tl.to(ref.current, {

            autoAlpha: 1,
            top: `${3 * index}%`,
            // scale the service based on index like service 1 scale down by 0.25 scale two by 0.50 and the last service don't scale 

        })
        gsap.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                // markers: {
                //     endColor: 'white',
                //     startColor: 'blue',
                //     indent: 2

                // },
                scrub: true,
                end: 'center center'
            },

            // 1 - 1+x=0.75
            //2 - 1 + x=0.50
            // 3 - 1
            //4-1 
            scale: 1 - ((4 - index) * 0.05)
        })
    })
    return (
        <div ref={ref} key={index} className='relative  opacity-0 flex flex-col items-start justify-start  h-[400px] lg:h-[200px] w-full  bg-black'>
            <div className='!p-4  border border-white/10 rounded-2xl shadow-sm shadow-purple-600/20 inset-shadow-2xs inset-shadow-purple-600 '>
                <h2 className='font-poppins-bold text-2xl lg:text-4xl mb-2'>
                    {header}
                </h2>
                <p className='opacity-70 leading-loose text-lg lg:text-xl'>
                    {body}
                </p>
            </div>
        </div>
    )
}
