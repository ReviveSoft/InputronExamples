"use client";
import ProductCardWithCover from "@/app/components/product-cards/card-with-cover";
export default function Component() {
  return (
    <section className="w-full min-h-screen py-12  text-white md:py-24 lg:py-32 xl:py-48 bg-gray-50 flex justify-center">
      <div className=" px-4 md:px-6 ">
        <div className="flex flex-col space-y-8 w-full items-center  p-6 w-3xl md:w-md ">
          <div className="flex flex-col items-start justify-start space-y-6 w-full">
            <div className="space-y-6">
              <h1 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Provide Exceptional Form Experience
              </h1>
              <p className="max-w-full text-black  md:text-2xl">
                Combine LabelTron with Inputron to create multilingual forms in
                seconds or Use Textarea tron to enhance user input or translate
                it to multiple languages.
              </p>
            </div>
          </div>
          <div className="flex gap-8  flex-wrap w-full">
            <ProductCardWithCover
              coverName={"star-cover"}
              maskImage={"./logos/logo_sign.svg"}
              videoFile={"./videos/multilang-form.mp4"}
              headerText="MAGIC"
              title="TextareaTron"
              backgroundClass="bg-gradient-to-t from-green-300 to-green-400"
              buttonTextColor="text-green-300"
              description="TextareaTron enables users to enhance their writing by providing suggestions and translations."
            />

            <ProductCardWithCover
              maskImage={"./images/image1.svg"}
              videoFile={"./videos/multilang-form.mp4"}
              headerText="AUTOCOMPLETE"
              title="Suggestron"
              backgroundClass="bg-gradient-to-t from-pink-200 to-pink-300"
              coverName="flower-cover"
              buttonTextColor="text-pink-200"
              description="Suggestron helps user complete their thoughts by providing context aware suggestions."
            />

            <ProductCardWithCover
              maskImage={"./images/translate2.jpg"}
              videoFile={"./videos/multilang-form.mp4"}
              headerText="TRANSLATE"
              title="translate"
              backgroundClass="bg-gradient-to-t from-blue-300 to-blue-200"
              coverName="hexagon-cover"
              description="Inputron provies a powerful translation api that can translate up to five languages in real-time."
              buttonTextColor="text-blue-200"
            />

            <ProductCardWithCover
              maskImage={"./images/image2.jpg"}
              videoFile={"./videos/multilang-form.mp4"}
              headerText="AGENTIC AI"
              title="AI AGENTS"
              backgroundClass="bg-gradient-to-t from-slate-300 to-gray-200"
              coverName="circle-cover"
              description="LabelTron is a simple component that wraps a label and an input element."
              buttonTextColor="text-gray-200"
            />

            <ProductCardWithCover
              maskImage={"./images/suggest.png"}
              videoFile={"./videos/animation6.mp4"}
              headerText="API"
              title="INPUTRON APIS"
              backgroundClass="bg-gradient-to-t from-yellow-300 to-orange-200"
              coverName="heart-cover"
              description="LabelTron is a simple component that wraps a label and an input element."
              buttonTextColor="text-orange-200"
            />

            <ProductCardWithCover
              maskImage={"./images/aihead.png"}
              videoFile={"./videos/animation3.mp4"}
              headerText="AGENTIC AI"
              title="AI AGENTS"
              backgroundClass="bg-gradient-to-t from-purple-300 to-purple-200"
              coverName="mellow-cover"
              description="LabelTron is a simple component that wraps a label and an input element."
              buttonTextColor="text-purple-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
