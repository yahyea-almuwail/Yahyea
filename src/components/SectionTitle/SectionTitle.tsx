import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <h1 className='uppercase  p-0 relative after:absolute after:w-1/3 after:h-0.5 after:bg-white/30 after:left-0 after:bottom-0 '>{children}</h1>


    )
}
