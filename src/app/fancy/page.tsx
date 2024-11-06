import ProductCardWithCover from "../components/product-cards/card-with-cover";

export default function FancyCurvedSections() {
    return (
      <div className="relative min-h-screen">
        {/* First section */}
        <section className="relative h-screen w-full bg-gradient-to-b from-yellow-500 to-yellow-600 flex items-center justify-center">
          <div className="text-center text-white p-8 w-full h-full">
 
            <div className="flex flex-col  items-start justify-start space-y-6 w-full ">
              <div className="wide-parent-cover ">
                <div className="wide-saw-cover  ">
                  <video
                    hidden={false}
                    className="video-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src="./videos/multilang-form.mp4"
                      type="video/mp4"
                    />
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
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            {/* First wave layer */}
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
              className="relative block w-full h-40"
              style={{ transform: 'rotate(180deg)' }}
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
              style={{ transform: 'rotate(180deg)' }}
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
              style={{ transform: 'rotate(180deg)' }}
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                fill="#7c3aed"
              />
            </svg>
          </div>
        </section>
  
        {/* Second section */}
        <section className="relative min-h-screen w-full bg-gradient-to-b from-violet-600 to-violet-700 flex items-center justify-center">
          <div className="text-center text-white p-8 w-full flex flex-col items-center justify-center">
            <div className="text-white text-7xl p-24 font-extralight">PRODUCTS</div>
          <div className="flex gap-8  flex-wrap w-full max-w-7xl ">
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
        </section>
      </div>
    );
  }