"use client";

import { TextareaTron, LabelTron } from "@revivesoft/inputron";
import { useState } from "react";
import { BotMessageSquareIcon } from "lucide-react";
export default function Playground() {
  const [superpower, setSuperPower] = useState(" ");

  return (
    <div className="    h-screen  flex flex-col items-center  p-8 ">
      <div className="mt-10 max-w-3xl w-full  rounded-3xl  flex  flex-col items-center justify-center space-y-4 ">
        <h1 className="text-3xl max-w-md  align-middle  text-center text-black font-extrabold pt-6 rounded-b-md p-2 flex  items-center justify-center  space-x-4">
          LabelTron example
        </h1>
        <p className="p-6 text-xl font-semibold">
          In the form below, we demonstrate how Labeltrons can be translated
          into 3 languages when you hover over them. The update frequency is set
          to 1 second and the icon is hidden.
        </p>

        <div className="w-full px-6 pb-4">
          <div className="">
            <LabelTron
              key={"name"}
              interval={1000}
              languages={["es", "cn", "hi", "ko"]}
              className="text-base   font-extrabold hover:text-pink-500 mouse-pointer hover:cursor-pointer"
              icon={{
                className: "text-base hover:text-pink-500 animate-rotate",
                visible: false,
              }}
            >
              Write a summary of the book you&apos;ve just read.
            </LabelTron>

            <TextareaTron
              prompt="translate all the text into english regardless of the language."
              name="superpower"
              className="text-black"
              value={superpower}
              triggerKeys={["Enter"]}
              setTextValue={(superpower) => {
                setSuperPower(superpower);
              }}
              buttonConfiguration={{
                button_visible: false,
                text_visible: true,
                text: "Translate",
                icon: (
                  <BotMessageSquareIcon className="w-3 h-3 mr-2 text-xs " />
                ),
                style:
                  "py-4 px-2 bg-pink-500 text-xs h-3 hover:bg-pink-500 hover:text-black ",
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-3xl w-full  rounded-3xl  flex  flex-col items-center justify-center space-y-4 ">
        <p className="p-6 text-xl items-start w-full font-semibold">
          Example with faster translation ,colored translation and a different icon.
        </p>
        <div className="w-full px-6 pb-4">
          <div className="">
            <LabelTron
              key={"story"}
              interval={ 500}
              languages={["es", "cn", "hi", "ko"]}
              className="text-base mb-2  font-extrabold hover:text-teal-500 mouse-pointer hover:cursor-pointer"
              icon={{
                iconElement: (
                  <BotMessageSquareIcon className="w-4 h-4 mr-2 text-xs mb-2  " />
                ),
                className: "text-base  animate-rotate mb-2",
                visible: true,
              }}
            >
              Who are the main characters of the story?
            </LabelTron>

            <TextareaTron
              prompt="translate all the text into english regardless of the language."
              name="superpower"
              className="text-black"
              value={superpower}
              triggerKeys={["Enter"]}
              setTextValue={(superpower) => {
                setSuperPower(superpower);
              }}
              buttonConfiguration={{
                button_visible: false,
                text_visible: true,
                text: "Translate",
                icon: (
                  <BotMessageSquareIcon className="w-3 h-3 mr-2 text-xs " />
                ),
                style:
                  "py-4 px-2 bg-pink-500 text-xs h-3 hover:bg-pink-500 hover:text-black mb-4 ",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
