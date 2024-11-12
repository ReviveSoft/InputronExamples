//import ProductCardWithCover from "../components/product-cards/card-with-cover";
"use client";
import { VidedCard } from "@revivesoft/video-cards";

import  Link  from "next/link";
export default function FancyCurvedSections() {

  const handleButtonClick = () => {
    window.open("https://www.npmjs.com/package/@revivesoft/video-cards");
   };


  return (
    <div className="relative min-h-screen">
      <section className="relative  h-full min-h-screen w-full bg-gradient-to-b from-violet-600 to-violet-700 flex items-center justify-center">
        <div className="text-center text-white p-8 sm:p-4 md:p-4 lg:p-6 w-full flex flex-col items-center justify-center gap-8">
          <div className="text-white sm:text-xl text-4xl 2xl:text-7xl 2x:p-32 md:text-6xl md:p-12 p-24 sm:p-8 font-extralight ">
             Animate your Cards
          </div>

          <div className="text-white text-xl text-left font-semibold max-w-6xl">
            Add beautiful video cards to your website with ease. Use any of the following shapes to create a unique look for your content.
            heart, circle, hexagon, star, flower, mellow and many more shapes to choose from.
            <p><Link className="underline" href="https://www.npmjs.com/package/@revivesoft/video-cards" target="_blank">Read the documentation here</Link>
            </p>
          </div>

{/* 
          <VidedCard
              maskImage={"./images/aihead.png"}
              videoFile={"https://file-examples.com/storage/fe91352fe66730de9982024/2017/04/file_example_MP4_480_1_5MG.mp4"}
              headerText="AGENTIC AI"
              title="mellow"
              backgroundClass="bg-gradient-to-t from-purple-300 to-purple-200"
              variant="mellow"
              description="LabelTron is a simple component that wraps a label and an input element."
              buttonTextColor="text-purple-200"
              sizeClasses="w-full"
              buttonText="GET STARTED"
            /> */}
          



            <div className="   w-full  max-w-6xl     ">
            <VidedCard
              variant="flower"
              maskImage={"./images/image1.svg"}
              videoFile={"./videos/revivesofthd.mp4"}
              headerText="FLOWER COVER"
              title="Flower"
              backgroundClass="bg-gradient-to-t from-red-300 to-orange-400"
              buttonTextColor="text-red-300"
              sizeClasses="w-full"
              description="Add artistic flair to your content with a flower shaped video/animation."
              buttonText="GET STARTED"
              onClick={handleButtonClick}
            />
            </div>

            <div className="   w-full max-w-6xl     grid xs:grod-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-col-2 gap-8 ">

            <VidedCard
              maskImage={"./images/image2.jpg"}
              videoFile={"./videos/slowvid.mp4"}
              headerText="PILL COVER"
              title="pill cover"
              backgroundClass="bg-gradient-to-t from-blue-300 to-green-200"
              variant="pill"
              sizeClasses="w-full"
              description="Give your content a modern and trendy look with a pill shaped video/animation."
              buttonTextColor="text-blue-300"
              buttonText="GET STARTED"
            />
                        <VidedCard
              maskImage={"./images/plush.png"}
              videoFile={"./videos/animation6.mp4"}
              headerText="CIRCLE COVER"
              title="CIRCLE COVER"
              backgroundClass="bg-gradient-to-t from-pink-400 to-pink-400"
              variant="circle"
                            sizeClasses="w-full"
              description="Use the circle shape to highlight content that requires more space for text."
              buttonTextColor="text-pink-400"
              buttonText="GET STARTED"
            />


            </div>

          <div className="   w-full max-w-6xl     grid xs:grod-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-col-4 gap-8 ">
            <VidedCard
              maskImage={"./images/bag2.png"}
              videoFile={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"}
              headerText="HEXAGON COVER"
              title="Hexagon"
              backgroundClass="bg-gradient-to-t from-green-300 to-green-200"
              variant="hexagon"
              description="Hightlight content that requires a modern look with a hexagon shaped video/animation."
              buttonTextColor="text-green-300"
              sizeClasses="w-full"
              buttonText="GET STARTED"
              onClick={handleButtonClick}
            />
            <VidedCard
              maskImage={"./images/aihead.png"}
              videoFile={"./videos/autocomplete4.mp4"}
              headerText="MELLOW COVER"
              title="mellow"
              backgroundClass="bg-gradient-to-t from-purple-300 to-purple-200"
              variant="mellow"
              description="Mellow shaped video/animation to add a touch of elegance to your content."
              buttonTextColor="text-purple-200"
              sizeClasses="w-full"
              buttonText="GET STARTED"
              onClick={handleButtonClick}
            />
            <VidedCard
              maskImage={"./images/suggest.png"}
              videoFile={"./videos/makeup.mp4"}
              headerText="HEART COVER"
              title="heart"
              backgroundClass="bg-gradient-to-t from-yellow-300 to-orange-200"
              variant="heart"
              sizeClasses="w-full"
              description="Highlight content that evokes strong emotions or connections."
              buttonTextColor="text-orange-200"
              buttonText="GET STARTED"
              onClick={handleButtonClick}
            />
            {/* 

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
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
