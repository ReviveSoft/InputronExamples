"use client";

import { TextareaTron } from "@revivesoft/inputron";
import { useState } from "react";
import { BotMessageSquareIcon } from "lucide-react";

export default function Playground() {

  const [review1, setReview1] = useState(" ");
  const [review2, setReview2] = useState(" ");
  return (
    <div className="    h-screen  flex flex-col items-center  p-8 ">
      <div className="mt-10 max-w-3xl w-full  rounded-3xl  flex  flex-col items-center justify-center space-y-4 ">
        <h1 className="text-3xl max-w-md  align-middle  text-center text-black font-extrabold pt-6 rounded-b-md p-2 flex  items-center justify-center  space-x-4">
          TextareaTron example
        </h1>
        <p className="p-6 text-xl">
          The form below demonstrates how TextareaTron can help users enhance
          their writing. Depending on the form&apos;s context, developers can guide
          the AI to rewrite user input. Enhancements can be triggered either by
          displaying a configurable button or by linking the trigger to a
          keyboard key, such as Enter.
        </p>

        <div className="w-full px-6 pb-4">

          <div className="flex flex-col w-full pt-4  py-2 space-y-4">
            <h3 className="text-4xl ">Button trigger</h3>
            <p className=''>In the example below , the enhancement is triggered using a button. The button&apos;s text, color , position and icon are fully configurable</p>
          <label className="text-base  font-extrabold
           hover:text-pink-500 mouse-pointer hover:cursor-pointer">Tell us a little bit about yourself</label>
           
         
            <TextareaTron
             key='superpower'
              prompt="Rewrite in a more engaging way."
              name="superpower"
              className="text-black"
              value={review1}
              triggerKeys={[]}
              setTextValue={(review1) => {
                setReview1(review1);
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



          <div className="flex flex-col w-full pt-4  py-2 space-y-4">
            <h3 className="text-4xl ">Key trigger</h3>
            <p className=''>In the example below, the enhancement is triggered when the user presses [ENTER] on the keyboard. The developer can also configure multiple trigger keys.</p>
          <label className=" text-base  font-extrabold
           hover:text-pink-500 mouse-pointer hover:cursor-pointer">Tell us a little bit about yourself</label>
           
         
            <TextareaTron
             key='superpower'
              prompt="Rewrite in a more engaging way."
              name="superpower"
              className="text-black"
              value={review2}
              triggerKeys={["Enter"]}
              setTextValue={(review2) => {
                setReview2(review2);
              }}
              buttonConfiguration={{
                button_visible: false,
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
