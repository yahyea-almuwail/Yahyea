import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
export default function Stairs({ children }: { children: ReactNode }) {
    return (
        <div  >
            <div className='h-screen w-full flex absolute top-0 left-0 z-[1000]  pointer-events-none '>
                {
                    [...Array(5)].map((_, i) => {
                        return <motion.div
                            initial={{ translateY: 0 }}
                            animate={{ translateY: '100%', transition: { duration: 0.5, delay: 0.1 * (5 - i) }, transitionEnd: { height: 0, translateY: 0 } }}
                            exit={{ height: '100%', transition: { duration: 0.5, delay: 0.1 * (i) } }}
                            key={i} className='h-full w-full bg-purple-800 relative z-20 ' />
                    })
                }

            </div>
            <div className='  '>
                {children}
            </div>
        </div>
    )
}
