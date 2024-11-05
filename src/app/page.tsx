import Link from "next/link";


const examples = {
  labeltron: [
    {
      title: "Multi-Language Form",
      description:
        "LabelTron is a simple component that wraps a label and an input element.",
      link: "/examples/labeltron/multi-language-form",
    },
    {
      title: "LabelTron Custom Options",
      description:
        "A demonstration of the different configuration options for Labeltron.",
      link: "/examples/labeltron/labeltron-custom-options",
    }
  ],
  selectron: [
    {
      title: "Orange County Beaches",
      description:
        "A Selectron examples that lists the best Orange Country beaches in California.",
      link: "/examples/selectron/orange-county-beaches",
    },
    {
      title: "Public Transportation",
      description:
        "This example demonstrates how to use multiple Selectrons to create a dynamic chain of dropdowns populated with text prompts. In the first dropdown, the user selects a region. The second dropdown then shows the largest metro areas within that region, and the final dropdown provides available public transportation options for the chosen metro area.",
      link: "/examples/selectron/public-transportation",
    },
  ],
  textareatron: [
    {
      title: "TextareaTron Triggers",
      description:
        "TextareaTron is a simple component that wraps a label and an input element.",
      link: "/examples/textareatron/textarea-tron-triggers",
    },
    {
      title: "Translation to English",
      description:
        "TextareaTron is used to capture non english text and translates it to english.",
      link: "/examples/textareatron/translate-to-english",
    },
  ],
};
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center p-2">
      <main className="flex-grow p-4 container flex flex-col space-y-4 ">
        <h1 className="text-6xl font-bold mb-2">Examples</h1>
        <h2 className="text-4xl font-bold mb-2">LabelTron</h2>
        <div className="p-3  flex flex-col space-y-1">        {examples.labeltron.map((example) => {
          return (
            <Link
              href={example.link}
              className=" text-blue-500 text-xl hover:text-pink-500"
              key={example.title}
            >
              {example.title}:{" "}
              <span className="text-gray-600">{example.description}</span>
            </Link>
          );
        })}</div>


        <h2 className="text-4xl font-bold mb-4">Selectron</h2>
        <div className="p-3  flex flex-col space-y-1">{examples.selectron.map((example) => {
          return (
            <Link
              href={example.link}
              className=" text-blue-500 text-xl  hover:text-pink-500"
              key={example.title}
            >
              {example.title}:{" "}
              <span className="text-gray-600">{example.description}</span>
            </Link>
          );
        })} </div>

        <h2 className="text-4xl font-bold mb-4">TextareaTron</h2>
        <div className="p-3 flex flex-col space-y-1">   {examples.textareatron.map((example) => {
          return (
            <Link
              href={example.link}
              className=" text-blue-500 text-xl  hover:text-pink-500"
              key={example.title}
            >
              {example.title}:{" "}
              <span className="text-gray-600">{example.description}</span>
            </Link>
          );
        })} 
        </div>
      </main>

      <footer className="py-4 px-4 bg-gray-100 text-center">
        <p>
          <Link href={"https://www.inputron.com"} target="_blank">
            &copy; {new Date().getFullYear()} Inputron
          </Link>
        </p>
      </footer>
    </div>
  );
}
