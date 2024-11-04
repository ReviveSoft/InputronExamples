"use client";

import { SelecTron} from '@revivesoft/inputron';

export default function Playground() {
 
  return (
    <div className="    h-screen  flex flex-col items-center  p-8 ">
    <div className="mt-10 max-w-3xl w-full  rounded-3xl  flex  flex-col items-center justify-center space-y-4 ">
      <h1 className="text-3xl max-w-md  align-middle  text-center text-black font-extrabold pt-6 rounded-b-md p-2 flex  items-center justify-center  space-x-4">
        Selectron example
      </h1>
      <p className="p-6 text-xl">Ihe example below demonstrates how a dropdown can be populated using a text prompt. The data source can be the default large language model associated with your plan or any custom language model for enterprise use.</p>
    
        <SelectronDropdown 
        key={
          'Orange County California'
        }
        title='Beaches in Orange County California' 
        prompt={'list of 10 beaches in orange county California return a different icon at the begining of each beach.'}  /> 

      </div>
    </div>
  );

}


const SelectronDropdown = ({prompt,title}:GeniusDropdownType) => {
  return (
    <>
      <div className="w-full px-4 py-4  space-y-4 text-black  items-center ">
        <div className='text-xl ml-1 text-black font-semibold'>{title}</div>
        
        <SelecTron
          onValueChange={(value) => console.log("value", value)}
          className={"text-white bg-white"}
          selectOptionsClassName={"bg-white text-white font-bold text-md  "}
          selectTriggerClassName={" text-black font-bold text-md"}
          selectedItemClassName={
            " text-black text-blue-500 text-md font-semibold hover:bg-green-600  hover:text-white"
          }
          title={title|| ''}
          prompt={prompt}
        />
      </div>
    </>
  );
};


type GeniusDropdownType ={
    prompt:string
    title?:string
}


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


        {/* <SelectronDropdown
        title='Transportation in San Francisco city' 
        prompt={'A list of public transportation available in San Francisco city show an icon at the begining of each'}  
        /> */}
        {/* <SelectronDropdown 
        title='Cheap eats in Washington, DC' 
        prompt={'A list of the top cheap restaurents in Washington DC'}  /> */}