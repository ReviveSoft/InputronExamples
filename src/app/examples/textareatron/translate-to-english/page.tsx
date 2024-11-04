"use client";

import { TextareaTron, LabelTron } from "@revivesoft/inputron";
import { useState } from "react";
import { BotMessageSquareIcon } from "lucide-react";
import { Input } from "@/app/components/input";
export default function Playground() {
  const [superpower, setSuperPower] = useState(" ");
  const [review, setReview] = useState(" ");
  return (
    <div className="    h-screen  flex flex-col items-center  p-8 ">
      <div className="mt-10 max-w-3xl w-full  rounded-3xl  flex  flex-col items-center justify-center space-y-4 ">
        <h1 className="text-3xl max-w-md  align-middle  text-center text-black font-extrabold pt-6 rounded-b-md p-2 flex  items-center justify-center  space-x-4">
          TextareaTron example
        </h1>
        <p className="p-6 text-xl">
          The form below demonstrates how TextareaTron can help users enhance
          their writing. Depending on the form's context, developers can guide
          the AI to rewrite user input. Enhancements can be triggered either by
          displaying a configurable button or by linking the trigger to a
          keyboard key, such as Enter.
        </p>

        <div className="w-full px-6 pb-4">
          <div className="py-2">
            <label className="font-bold">Name</label>
            <Input
              type="text"
              className="w-full text-black  mt-1  p-1 rounded-md "
            />
          </div>
          <div className="space-y-2 w-full pt-3 ">
            <LabelTron
              key="review"
              interval={600}
              languages={["fr", "cn", "es", "ko", "cn"]}
              className="text-base  font-extrabold hover:text-pink-500 mouse-pointer hover:cursor-pointer"
              icon={{
                className: "text-base hover:text-pink-500 animate-rotate",
                visible: true,
              }}
            >
              Write a review about our product.
            </LabelTron>
            <p className='italic'>Type [Enter] on the Keyboard to trigger the enhancement</p>
            <TextareaTron
            key='review'
              prompt="Enhance the review by rewriting it in a more engaging way."
              name="review"
              className="text-black"
              value={review}
              triggerKeys={["Enter"]}
              setTextValue={(review) => {
                setReview(review);
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

          <div className="space-y-2 w-full pt-4  py-2">
            <LabelTron
              key={"super-power"}
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
             key='superpower'
              prompt="translate to english."
              name="superpower"
              className="text-black"
              value={superpower}
              triggerKeys={["Enter"]}
              setTextValue={(superpower) => {
                setSuperPower(superpower);
              }}
              buttonConfiguration={{
                button_visible: true,
                text_visible: true,
                text: "Translate",
                icon: (
                  <BotMessageSquareIcon className="w-3 h-3 mr-2 text-xs " />
                ),
                style:
                  "py-4 px-2 bg-white text-xs h-3 hover:bg-pink-500 hover:text-white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
