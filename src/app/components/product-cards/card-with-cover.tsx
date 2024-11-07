'use client'
import {useState } from 'react';
import { Button } from "@/app/components/button";
export default function ProductCardWithCover  ({
    headerText,
    maskImage,
    videoFile,
    title,
    description,
    backgroundClass,
    coverName,
    buttonTextColor
  }: {
    headerText: string;
    maskImage: string;
    videoFile: string;
    title: string;
    description: string;
    backgroundClass: string;
    coverName: string;
    buttonTextColor: string;
  }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={`rounded-3xl ${backgroundClass}  text-black min-w-80 sm:w-1/2 md:w-[350px] min-h-[500px]
         flex flex-col items-center content-center justify-start`}
      >
        <div className=" text-sm font-thin  flex justify-start items-start w-full p-6 bg-transparent">
          {headerText}
        </div>
        <div
          className="parent-cover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={coverName}>
            <video
              hidden={!isHovered}
              className="video-cover  "
              autoPlay
              loop
              muted
              playsInline

            >
              <source src={videoFile} type="video/mp4"  />
              Your browser does not support the video tag.
            </video>
  
            <img
              src={maskImage}
              hidden={isHovered}
              className=" video-cover"
            />
          </div>
        </div>
  
  
        <div className="  text-black justify-start items-start w-full flex flex-col p-6 space-y-6 bg-transparent">
          <div>
            <div className="font-extrabold text-xl uppercase">{title}</div>
            <div className="text-md font-thin text-wrap">{description}</div>
          </div>
          <div className="w-full flex justify-start mb-4">
            <Button className={`rounded-full ${buttonTextColor ||'text-gray-200'} py-6 px-6 hover:bg-transparent border-2 border-transparent hover:text-black hover:border-black hover:border-2`}>
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    );
  };