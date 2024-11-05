"use client";
import { Predictron } from "@revivesoft/inputron";
import { useState } from "react";

const PredictRonExample = () => {
  const handleChange = (name: string, value: string) => {
    console.log("handing change for value", value);
    setComments(value);
    console.log("comments", comments);
    
  };

   const [comments, setComments] = useState("");
  return (
    <div className="    h-screen  flex flex-col items-center  p-8 ">
      <div className="mt-10 max-w-3xl w-full  rounded-3xl  flex  flex-col items-center justify-center space-y-4 ">
        <h1 className="text-3xl max-w-md  align-middle  text-center text-black font-extrabold pt-6 rounded-b-md p-2 flex  items-center justify-center  space-x-4">
          Predictron example with auto-complete
        </h1>
        <p className="p-6 text-xl font-semibold">
          In the form below, we demonstrate how Predictron can be used to
          predict the next word in a sentence.
        </p>
        <div className="p-6 w-full">
          <Predictron  name="comments" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default PredictRonExample;
