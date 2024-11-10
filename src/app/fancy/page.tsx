//import ProductCardWithCover from "../components/product-cards/card-with-cover";
'use client';
import { VidedCard } from "@revivesoft/video-cards";
export default function FancyCurvedSections() {
  return (
    <div className="relative min-h-screen">
      {/* First section */}
      <section className="relative   w-full bg-gradient-to-b from-yellow-500 to-yellow-600 flex ijustify-start p-4">
        <div className="text-center text-white p-8 w-full flex items-center   justify-start flex-col  pb-32 ">
          <div className=" font-extrabold  text-pretty max-w-4xl   text-black uppercase text-xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-4xl ">
            Intelligent Building Blocks for React/Nextjs Forms
          </div>

          <div className="flex flex-col  align-middlei py-10 items-center w-full ">
            <div className="wide-parent-cover  max-w-3xl">
              <div className="wide-saw-cover ">
                <video
                  hidden={false}
                  className="video-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="./videos/multilang-form.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img
                  src={"./logos/logo_sign.svg"}
                  hidden={true}
                  className=" video-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Multiple wave layers for depth */}
      </section>

      {/* Second section */}
      <section className="relative  h-full min-h-screen w-full bg-gradient-to-b from-violet-600 to-violet-700 flex items-center justify-center">
        <div className="absolute top-[-200px] left-0 w-full overflow-hidden">
          {/* First wave layer */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-40"
            style={{ transform: "rotate(10deg)" }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              fillOpacity="0.1"
            />
          </svg>

          {/* Second wave layer */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-40 -mt-32"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#ffffff"
              fillOpacity="0.2"
            />
          </svg>

          {/* Third wave layer (main transition) */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-40 -mt-32"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#7c3aed"
            />
          </svg>
        </div>
        <div className="text-center text-white p-8 sm:p-4 md:p-4 lg:p-6 w-full flex flex-col items-center justify-center">
          <div className="text-white sm:text-xl text-4xl 2xl:text-7xl 2x:p-32 md:text-6xl md:p-12 p-24 sm:p-8 font-extralight">
            PRODUCTS
          </div>
          {/* <div className="flex   flex-wrap justify-evenly w-full max-w-7xl text-left gap-8 "> */}
          <div className="   w-full max-w-7xl     grid xs:grod-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-col-4 gap-8 ">
 


          <VidedCard
              variant="circle"
              maskImage={""}
              videoFile={""}
              headerText="MAGIC"
              title="TextareaTron"
              backgroundClass="bg-gradient-to-t from-green-300 to-green-400"
              buttonTextColor="text-green-300"
             
              description="TextareaTron enables users to enhance their writing by providing suggestions and translations."
              buttonText="GET STARTED"
            />



            <VidedCard
              variant="star"
              maskImage={"./images/translate2.jpg"}
              videoFile={"./videos/textareatron-latest.mp4"}
              headerText="MAGIC"
              title="TextareaTron"
              backgroundClass="bg-gradient-to-t from-green-300 to-green-400"
              buttonTextColor="text-green-300"
             
              description="TextareaTron enables users to enhance their writing by providing suggestions and translations."
              buttonText="GET STARTED"
            />

            <VidedCard
              maskImage={"./images/image1.svg"}
              videoFile={"./videos/autocomplete4.mp4"}
              headerText="AUTOCOMPLETE"
              title="Suggestron"
              backgroundClass="bg-gradient-to-t from-pink-200 to-pink-300"
              variant="flower"
              buttonTextColor="text-pink-200"
                            sizeClasses="w-full"
              description="Suggestron helps user complete their thoughts by providing context aware suggestions."
              buttonText="GET STARTED"
            />

            <VidedCard
              maskImage={"./images/translate2.jpg"}
              videoFile={"./videos/multilang-form.mp4"}
              headerText="TRANSLATE"
              title="translate"
              backgroundClass="bg-gradient-to-t from-blue-300 to-blue-200"
              variant="hexagon"
              description="Inputron provies a powerful translation api that can translate up to five languages in real-time."
              buttonTextColor="text-blue-200"
                            sizeClasses="w-full"
              buttonText="GET STARTED"
              onClick={() => { console.log('clickety click')} }
            
            />

            <VidedCard
              maskImage={"./images/image2.jpg"}
              videoFile={"./videos/multilang-form.mp4"}
              headerText="AGENTIC AI"
              title="AI AGENTS"
              backgroundClass="bg-gradient-to-t from-slate-300 to-gray-200"
              variant="circle"
              description="LabelTron is a simple component that wraps a label and an input element."
              buttonTextColor="text-gray-200"
                            sizeClasses="w-full"
              buttonText="GET STARTED"
            />

            <VidedCard
              maskImage={"./images/suggest.png"}
              videoFile={"./videos/animation6.mp4"}
              headerText="API"
              title="INPUTRON APIS"
              backgroundClass="bg-gradient-to-t from-yellow-300 to-orange-200"
              variant="heart"
                            sizeClasses="w-full"
              description="LabelTron is a simple component that wraps a label and an input element."
              buttonTextColor="text-orange-200"
              buttonText="GET STARTED"
            />

            <VidedCard
              maskImage={"./images/aihead.png"}
              videoFile={"./videos/animation3.mp4"}
              headerText="AGENTIC AI"
              title="AI AGENTS"
              backgroundClass="bg-gradient-to-t from-purple-300 to-purple-200"
              variant="mellow"
              description="LabelTron is a simple component that wraps a label and an input element."
              buttonTextColor="text-purple-200"
                            sizeClasses="w-full"
              buttonText="GET STARTED"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
