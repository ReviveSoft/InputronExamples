"use client";
import { useState } from "react";


export default function Component() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full h-screen py-12  text-white md:py-24 lg:py-32 xl:py-48 bg-blue-600 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 lg:grid-cols-1 lg:gap-12 xl:grid-cols-1">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Build Multilingual Forms
              </h1>
              <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
                Combine LabelTron with Inputron to create multilingual forms in
                seconds.
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-3xl shadow-lg ">
            <video
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/multilang-form.mp4" type="video/mp4" /> 
            
              
              Your browser does not support the video tag.
            </video>
            <div
              className={`absolute inset-0 transition-opacity text-6xl flex items-center justify-center w-full h-full duration-300 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
            

            {/* <Image className="animate-pulse" src='/camera-mask.svg' alt="Camera Mask" layout="fill" objectFit="overlay" /> */}

               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" fill="black">
                <path
                  d="M960 100 L1920 540 L960 980 L200 540 Z"
                                  fill="black"
                  fillOpacity={1}
                    fillRule={"nonzero"}
                  stroke="rgba(255, 255, 255, 1)"
                  stroke-width="10"
               
            
        
                /> 

                 <path
                  d="M960 100 L1920 540 L960 980 L200 540 Z"
                  fill="black"
                  fillOpacity={1}

                  stroke="rgba(255, 255, 255, 1)"
                  stroke-width="10" /> 
              </svg> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
