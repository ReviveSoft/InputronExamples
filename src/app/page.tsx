import Link from "next/link";
import Image from "next/image";

import { LogoPink } from "@/app/components/logo";

const examples = {
  labeltron: [
    {
      title: "Multi-Language Form",
      description:
        "LabelTron is a simple component that wraps a label and an input element.",
      link: "/examples/labeltron/multi-language-form",
    },
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
        "Selectron is a simple component that wraps a label and an input element.",
      link: "/examples/selectron/public-transportation",  
    },
  ],
  textareatron:[
    {
      title: "TextareaTron Triggers",
      description:
        "TextareaTron is a simple component that wraps a label and an input element.",
      link: "/examples/textareatron/textarea-tron-triggers",
    },
    {
      title: "Translate to English",
      description:
        "TextareaTron is a simple component that wraps a label and an input element.",
      link: "/examples/textareatron/translate-to-english",
    },
  ]
};
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center p-2">
      <main className="flex-grow p-4 container flex flex-col space-y-4 ">
        <h1 className="text-6xl font-bold mb-2">Examples</h1>
        <h2 className="text-4xl font-bold mb-2">LabelTron</h2>
        {examples.labeltron.map((example) => {
          return (
            <Link href={example.link} className=" text-blue-500 text-xl" key={example.title}>
              {example.title}:{" "}
              <span className="text-gray-600">{example.description}</span>
            </Link>
          );
        })}

        <h2 className="text-4xl font-bold mb-4">Selectron</h2>
        {examples.selectron.map((example) => {
          return (
            <Link href={example.link} className=" text-blue-500 text-xl" key={example.title}>
              {example.title}:{" "}
              <span className="text-gray-600">{example.description}</span>
            </Link>
          );
        })}


<h2 className="text-4xl font-bold mb-4">Selectron</h2>
        {examples.textareatron.map((example) => {
          return (
            <Link href={example.link} className=" text-blue-500 text-xl" key={example.title}>
              {example.title}:{" "}
              <span className="text-gray-600">{example.description}</span>
            </Link>
          );
        })}
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
