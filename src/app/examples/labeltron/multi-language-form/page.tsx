"use client";

import { TextareaTron, LabelTron } from "@revivesoft/inputron";
import { useState } from "react";
import { BotMessageSquareIcon } from "lucide-react";
import { Input } from "@/app/components/input"
export default function Playground() {
  const [superpower, setSuperPower] = useState(" ");

  return (
    <div className="    h-screen  flex flex-col items-center  p-8 ">
      <div className="mt-10 max-w-3xl w-full  rounded-3xl  flex  flex-col items-center justify-center space-y-4 ">
        <h1 className="text-3xl max-w-md  align-middle  text-center text-black font-extrabold pt-6 rounded-b-md p-2 flex  items-center justify-center  space-x-4">
          LabelTron example
        </h1>
        <p className="p-6 text-xl">In the form below, we demonstrate how Labeltrons can be translated into up to five languages when you hover over them. The update frequency, label colors, and translation text color are all configurable</p>
    
        <div className="w-full px-6 pb-4">
           <div className="">
            <LabelTron
              key={"name"}
              interval={600}
              languages={["fr", "cn", "es", "ko"]}
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
              languages={["fr", "cn", "es", "ko"]}
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
              languages={["fr", "cn", "es", "ko","cn"]}
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
      </div>
    </div>
  );
}

/*

<LabelTron
key={"name"}
interval={600}
languages={["fr", "cn", "es", "ko"]}
className="text-white  font-extrabold hover:text-pink-500 mouse-pointer hover:cursor-pointer"
icon={{
  className: "text-white hover:text-pink-500 animate-rotate",
  visible: true,
}}
>
Name
</LabelTron> 




<LabelTron
key={"location"}
interval={600}
languages={["fr", "cn", "es", "ko"]}
className="text-white  font-extrabold hover:text-pink-500 mouse-pointer hover:cursor-pointer"
icon={{
  className: "text-white hover:text-pink-500 animate-rotate",
  visible: true,
}}
>
Location
</LabelTron> 

*/

{
  /* <LabelTron
            key={"superpowerLabel"}
            interval={600}
            languages={["fr", "cn", "es", "ko"]}
            className="text-white  font-extrabold hover:text-pink-500 mouse-pointer hover:cursor-pointer"
            icon={{
              className: "text-white hover:text-pink-500 animate-rotate",
              visible: true,
            }}
          >
            What is your super power?
          </LabelTron> */
}

{
  /* <div className="space-y-2 w-full  py-2">
          <LabelTron
            key={"WhoAreYouLabel"}
            interval={750}
            languages={["fr", "cn", "es", "ko"]}
            className="text-white  font-extrabold hover:text-pink-500 mouse-pointer hover:cursor-pointer"
            icon={{
              className: "text-white hover:text-pink-500",
              visible: true,
            }}
          >
            Who is your nemsis?
          </LabelTron>
          <TextareaTron
            prompt="translate all the text into russian regardless of the language."
            name="nemesis"
            className="text-black"
            value={nemesis}
           // onChange={customOnChange}
            triggerKeys={["Enter"]}
            setTextValue={(nemesis) => {
              setNemesis(nemesis);
            }}
            buttonConfiguration={{
              button_visible: false,
              text_visible: true,
              text: "Translate",
              icon: <BotMessageSquareIcon className="w-3 h-3 mr-2 text-xs " />,
              style:
                "py-4 px-2 bg-pink-500 text-xs h-3 hover:bg-pink-500 hover:text-black ",
            }}
          />
        </div> */
}

// const [nemesis, setNemesis] = useState("");

// const customOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   console.log("custom on change was called", e.target.value);
//   setSuperPower(e.target.value);
// };
