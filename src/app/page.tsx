import Link from "next/link";

type Example = {
  title: string;
  description: string;
  link: string;
};

type ExamplesType = {
  labeltron: Example[];
  selectron: Example[];
  textareatron: Example[];
  predictron: Example[];
  combotron: Example[];
};

const examples: ExamplesType = {
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
  predictron: [
    {
      title: "Autocomplete",
      description: "Predictron is used to predict the next word in a sentence.",
      link: "/examples/predictron/autocomplete",
    },
  ],
  combotron: [
    {
      title: "TextEditComboTron",
      description: "An editable text area where users can interact with a variety custom AI agents.",
      link: "/examples/texteditcombotron/",
    },
  ],
};
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center p-2">
      <main className="flex-grow p-4 container flex flex-col space-y-4 ">
        <h1 className="text-4xl font-bold mb-2">Examples</h1>

        <ExampleComponent title="LabelTron" examples={examples.labeltron} />

        <ExampleComponent title="SelecTron" examples={examples.selectron} />

        <ExampleComponent title="PredicTron" examples={examples.predictron} />

        <ExampleComponent
          title="TextareaTron"
          examples={examples.textareatron}
        />

        <ExampleComponent title="combotron" examples={examples.combotron} />
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

const ExampleComponent = ({
  title,
  examples,
}: {
  title: string;
  examples: Example[];
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2 ">{title}</h2>
      <div className="p-3  flex flex-col space-y-1">
        {examples.map((example) => {
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
        })}
      </div>
    </>
  );
};
