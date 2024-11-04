"use client";

import {
  TextareaTron,
  SelecTron,
  LabelTron,
  Predictron,
} from "@revivesoft/inputron";
import { useState } from "react";
import { CableCar } from "lucide-react";
export default function Playground() {
  const [explain, setExplain] = useState("I love chocolate and milk");

  return (
    <div
      className="h-screen w-screen  to-bg-pink-700  bg-gradient-to-tl  from-purple-500
     to-blue-800 flex flex-col items-center justify-center p-8 content-center"
    >
      <div className="h-screen rounded-3xl  bg-purple-500 flex flex-col items-center justify-center p-8 ">
        <h1 className="text-3xl  text-left text-white font-extrabold">
          SelecTron
        </h1>
        <OrangeCountryDropdown />
        {/* <TransportationDropdown location={"New York City"} /> */}
      </div>

      <div className="mt-10 h-screen rounded-3xl  bg-black flex flex-col items-center justify-center p-8 ">
        <h1 className="text-3xl  text-left text-white font-extrabold">
          TextareaTron
        </h1>
        <div className="space-y-4">
          <TextareaTron
            prompt="translate to french."
            labelConfig={{
              content: "Tell us how it started",
              visible: false,
              style: "text-sm font-semibold text-gray-700 text-white",
            }}
            customOnChange={(e) => console.log("e", e)}
            value={explain}
            triggerKeys={["Enter"]}
            setTextValue={setExplain}
            buttonConfiguration={{
              button_visible: true,
              text_visible: true,
              text: "Rewrite",
              icon: <CableCar className="w-3 h-3 mr-2 text-xs animate-pulse" />,
              style:
                "py-3 px-1 bg-pink-500 text-xs h-3 text-white hover:bg-pink-500 hover:text-black ",
            }}
          />
        </div>
      </div>
    </div>
  );
  return (
    <div className="h-scren w-screen bg- to-bg-pink-700  bg-gradient-to-tl  from-white to-blue-800 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl  text-left text-white font-extrabold">
        SelecTron
      </h1>

      <div className="  w-2/3  px-4 py-4  space-y-4 text-black  items-center h-screen">
        <SelecTron
          onValueChange={(value) => console.log("value", value)}
          className={"text-white bg-white"}
          selectOptionsClassName={"bg-white text-black font-bold text-md"}
          selectTriggerClassName={"bg-white text-black font-bold text-md"}
          selectedItemClassName={
            "bg-black-500 text-black text-md font-semibold hover:bg-black  hover:text-white"
          }
          title={"Orange Country Beaches"}
          prompt={
            "list of 10 beaches in orange county California return an icon at the begining of each item"
          }
        />

        <SelecTron
          onValueChange={(value) => console.log("value", value)}
          className={"text-white bg-white"}
          selectOptionsClassName={"bg-white text-black font-bold text-md"}
          selectTriggerClassName={"bg-white text-black font-bold text-md"}
          selectedItemClassName={
            "bg-black-500 text-black text-md font-semibold hover:bg-black  hover:text-white"
          }
          title={"Airports"}
          prompt={
            "list of 5 airports in orange county California return an icon at the begining of each item"
          }
        />

        {/* const handleChange = (name: string, value: string) => {
     console.log('handing change for value', value);
  }

 const [comments, setComments] = useState(''); */}

        {/* <SelecTron style={''} title={'Cool places' } prompt={'5 beaches in miami'} /> */}

        {/* <LabelTron
        languages={['en','es','fr']}
        icon={{
          className: "h-3 text-pink-500",
          visible: true,
        }}
        interval={1000}
        className="text-md font-bold "
      >
         provide your medical condition
      </LabelTron> */}
        {/* <Predictron name='comments' onChange={handleChange}/> */}
      </div>
    </div>
  );
}

const OrangeCountryDropdown = () => {
  return (
    <>
      <div className="w-full px-4 py-4  space-y-4 text-black  items-center ">
        <SelecTron
          onValueChange={(value) => console.log("value", value)}
          className={"text-white bg-white"}
          selectOptionsClassName={"bg-white text-black font-bold text-md"}
          selectTriggerClassName={"bg-white text-black font-bold text-md"}
          selectedItemClassName={
            "bg-black-500 text-black text-md font-semibold hover:bg-black  hover:text-white"
          }
          title={"Orange Country Beaches"}
          prompt={`list of 10 beaches in orange county California return an icon at the begining of each item`}
        />
      </div>
    </>
  );
};

const TransportationDropdown = ({ location }: { location: string }) => {
  return (
    <>
      <div className="  w-full  px-4 py-4  space-y-4 text-black  items-center ">
        <SelecTron
          onValueChange={(value) => console.log("value", value)}
          className={"text-white bg-white"}
          selectOptionsClassName={"bg-white text-black font-bold text-md"}
          selectTriggerClassName={"bg-white text-black font-bold text-md"}
          selectedItemClassName={
            "bg-black-500 text-black text-md font-semibold hover:bg-black  hover:text-white"
          }
          title={"Transportation"}
          prompt={`list of 5 public transportation types in ${location} return an icon at the begining of each item`}
        />
      </div>{" "}
    </>
  );
};
