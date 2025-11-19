'use client'
import React, { ReactNode, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)
export default function StrokeText({ children }: { children: ReactNode }) {
    const container = useRef(null)
    useGSAP(() => {
        gsap.fromTo(container.current, { scale: 0 }, { scale: 1, delay: 1 })
    })
    return (

        <span ref={container} className="stroke-text bg-blend-lighten  opacity-30 select-none">{children}</span>


    )
}
