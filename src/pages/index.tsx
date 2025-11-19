'use client'
import Staris from "@/components/Staris";
import StrokeText from "@/components/StrokeText";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Head from "next/head";
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(SplitText)
export default function Home() {
  const banner = [
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
    'Flutter', 'Bloc', 'Cubit', 'Clean Architecture', 'Dio', 'Hive', 
  ]
  useGSAP(() => {
    const split = SplitText.create('.split', { type: 'chars' })
    gsap.fromTo(split.chars, { opacity: 0 }, { opacity: 1, stagger: 0.03, delay: 1.5 })
    gsap.to('.banner', { x: '200vh', duration: 180 })
  })
  return (
    <>
      <Head>
        <title>Yahyea Almuwail</title>
        <meta
          name="description"
          content="Yahyea Almuwail – Flutter Developer specializing in Next.js, React, Tailwind, GSAP animations, and more."
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Yahyea Almuwail",
              url: "https://mayaralsalem.vercel.app",
              description: "Flutter Developer portfolio and services by Yahyea Almuwail."
            })
          }}
        />
      </Head>
      <main>
        <Staris>
          <div className=" h-[calc(100vh-64px)]   overflow-hidden relative ">
            <section className="flex items-center relative top-1/2 -translate-y-1/2 px-8 md:pl-28 ">

              <div className="flex items-center   text-[250px] lg:text-[350px]">
                <StrokeText>Y</StrokeText>
              </div>
              <h1 className="split absolute left-14 md:left-44 lg:left-44 text-nowrap text-2xl md:text-3xl lg:text-6xl  leading-16 md:leading-28 text-white">
                Code.<span className="opacity-60">Design</span>.<span className="opacity-60">Interaction</span>. <br />

                From Vision to User <br /> Experience.
              </h1>
            </section>
            {/* banners */}
            <div className="w-[150vw] h-[30px] md:h-[50px] px-5 flex items-center bg-[#212121] fixed  bottom-0 origin-bottom-left -rotate-[30deg] md:-rotate-[20deg] lg:-rotate-12 z-10">
              <div className="banner relative flex items-center gap-16 font-roboto-regular -translate-x-[200vh] text-white">
                {
                  banner.map((l, i) => (
                    <div key={i} className="flex items-center gap-16">
                      <p className="text-sm text-nowrap">{l}</p>
                      <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                    </div>
                  ))
                }
              </div>

            </div>
            <div className="w-[230vw] h-[30px] md:h-[50px] flex items-center px-12 bg-[#FAFAFA] text-black fixed 
        -top-5 right-[-205%] origin-top-left rotate-[75deg]  
        md:w-full md:-top-10 md:-right-[60%] md:rotate-[55deg]
        lg:w-full lg:-top-10 -lg:right-1/2 lg:rotate-[42deg] 
        ">
              <div className="banner relative flex items-center gap-16 font-roboto-regular -translate-x-[200vh] text-black">
                {
                  banner.map((l, i) => (
                    <div key={i} className="flex items-center gap-16">
                      <p className="text-sm text-nowrap">{l}</p>
                      <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                    </div>
                  ))
                }
              </div>

            </div>
          </div>

        </Staris >
      </main>
    </>
  );
}
