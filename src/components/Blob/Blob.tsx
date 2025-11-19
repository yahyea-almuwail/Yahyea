'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(useGSAP)
export default function Blob() {

    const blobRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        const maxX = window.innerWidth
        const maxY = window.innerHeight - 300
        function MoveBlob() {

            const edges = [
                { x: 0, y: gsap.utils.random(0, maxY) },   // left edge
                { x: maxX, y: gsap.utils.random(0, maxY) },   // right edge
                { x: gsap.utils.random(0, maxX), y: 0 },   // top edge
                { x: gsap.utils.random(0, maxX), y: maxY }    // bottom edge

            ];
            const target = edges[Math.floor(Math.random() * edges.length)];

            const mm = gsap.matchMedia()
            const tl = gsap.timeline({})
            console.log(target);
            mm.add({
                isDesktop: '(min-width: 1024px)',
                isTablet: '(min-width: 768px) and (max-width: 1023px)',
                isMobile: '(max-width: 767px)',
            }, (context) => {
                const { isMobile, isDesktop, isTablet } = context.conditions!
                let scaleValue = 1
                if (isDesktop) scaleValue = 2
                else if (isTablet) scaleValue = 3
                else if (isMobile) scaleValue = 2

                tl.to('.blob', {
                    borderRadius: '8% 92% 44% 56% / 94% 17% 83% 6%',
                    duration: 1,
                    delay: 0.5,
                    scale: scaleValue + 0.1,
                    translateX: target.x - 200,
                    translateY: target.y - 200
                })
                tl.to('.blob', {
                    borderRadius: '8% 92% 44% 56% / 94% 17% 83% 6%',
                    duration: 1,
                    delay: 0.5,
                    scale: scaleValue + 0.1,
                    onComplete: MoveBlob

                })
                // .to('.blob', {
                //     borderRadius: '59% 41% 91% 9% / 80% 61% 39% 20%',
                //     duration: 1,
                //     delay: 0.5,
                //     scale: scaleValue + 0.1

                // })
                // .to('.blob', {
                //     borderRadius: '59% 41% 91% 9% / 80% 61% 39% 20%',
                //     duration: 1,
                //     delay: 0.5,

                //     scale: scaleValue + 0.1
                // })
                // .to('.blob', {
                //     borderRadius: '53% 47% 83% 17% / 94% 15% 85% 6%',
                //     duration: 1,
                //     delay: 0.5,

                //     scale: scaleValue + 0.1, onComplete: MoveBlob
                // })
            })
        }








        MoveBlob()

        // gsap.to('.blob', { left: 100, y: -100, repeat: -1, yoyo: true, duration: 1 })
        gsap.to('.blob', {
            rotation: '360',    // add 45° on each pass
            duration: 5,         // every 1 second
            ease: 'none',
            repeat: -1,          // loop forever
            // transformOrigin: '50% 50%',
        })



    })
    return (
        <div ref={blobRef}
            className="  blob  bg-gradient-to-b v from-purple-400/20 via-purple-500/30    to-purple-600/50  to-70% absolute scale-100 w-52 h-52 will-change-[filter]
        "
            style={{
                borderRadius: '85% 15% 44% 56% / 94% 17% 83% 6%',
                // Force hardware acceleration on iOS Safari:
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                /* Explicitly set both filter props: */
                filter: 'blur(35px)',
                WebkitFilter: 'blur(35px)',
            }}
        />
    )
}
