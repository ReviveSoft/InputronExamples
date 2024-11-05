"use client";

import { TextareaTron, LabelTron } from "@revivesoft/inputron";
import { useState } from "react";
import { BotMessageSquareIcon } from "lucide-react";
import { Input } from "@/app/components/input";
import { Button } from "@/app/components/button";
export default function Playground() {
  const [superpower, setSuperPower] = useState(" ");
  const languages = ["es", "cn", "es", "ko"];
  return (
    <div className=" h-screen  flex flex-col items-center  p-8 ">
      <div className="mt-10 max-w-3xl w-full  rounded-3xl  flex  flex-col items-center justify-center space-y-4 ">
        <LabelTron
          key={"title"}
          interval={1500}
          languages={languages}
          className="w-full mouse-pointer  text-3xl  align-middle  text-center text-black font-extrabold pt-6 rounded-b-md p-2 flex  items-center justify-center  space-x-4 cursor-pointer  "
        >
          Multi Language Form example
        </LabelTron>
        <LabelTron
          key={"name"}
          interval={1500}
          languages={languages}
          className="text-base  font-extrabold hover:text-pink-500 mouse-pointer "
        >
          This form supports the following languages : English, Chinese, Espanol
          and Korean
        </LabelTron>
        <LabelTron
          key={"intro"}
          interval={2000}
          languages={languages}
          className="p-3 text-xl  hover:text-pink-500 mouse-pointer hover:cursor-pointer"
          icon={{
            className: "text-base hover:text-pink-500 animate-rotate",
            visible: false,
          }}
        >
          In the form below, we demonstrate how Labeltrons can be translated
          into up to five languages when you hover over them. The update
          frequency, label colors, and translation text color are all
          configurable
        </LabelTron>

        <div className="w-full px-6 pb-4">
          <div className="">
            <LabelTron
              key={"name"}
              interval={600}
              languages={languages}
              className="text-base  font-extrabold hover:text-pink-500 mouse-pointer hover:cursor-pointer"
              icon={{
                className: "text-base hover:text-pink-500 animate-rotate",
                visible: true,
              }}
            >
              Name
            </LabelTron>
            <Input
              name="Name"
              type="text"
              className="w-full mt-1  text-black p-1 rounded-md mb-2 "
            />
            <LabelTron
              key={"name"}
              interval={600}
              languages={languages}
              className="text-base  font-extrabold hover:text-pink-500 mouse-pointer hover:cursor-pointer"
              icon={{
                className: "text-base hover:text-pink-500 animate-rotate",
                visible: true,
              }}
            >
              Location
            </LabelTron>

            <Input
              type="text"
              className="w-full text-white  mt-1  p-1 rounded-md "
            />
          </div>
          <div className="space-y-2 w-full pt-3  py-2">
            <LabelTron
              key={"location"}
              interval={600}
              languages={["fr", "cn", "es", "ko", "cn"]}
              className="text-base  font-extrabold hover:text-pink-500 mouse-pointer hover:cursor-pointer"
              icon={{
                className: "text-base hover:text-pink-500 animate-rotate",
                visible: true,
              }}
            >
              What is your super power?
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
        <div className="w-full flex justify-end pl-6 pr-6 ">
          <Button className="items-right min-w-24">
            <LabelTron
              key={"button"}
              interval={650}
              languages={languages}
              className="text-base  font-extrabold hover:text-white mouse-pointer hover:cursor-pointer"
              icon={{
                className: "text-base hover:text-pink-500 animate-rotate",
                visible: false,
              }}
            >
              Submit
            </LabelTron>
          </Button>
        </div>
      </div>
    </div>
  );
}
