"use client";
import React, { useState } from "react";
import { TextEditorComboTron, AgentTypes } from "@revivesoft/inputron";
import { ExternalLink } from "lucide-react";

export default function CombotronStyledExample() {
  const [textValue, setTextValue] = useState("");
  //const [activeTab, setActiveTab] = useState("Simple");

  const agentsConfig = [
    {
      name: "PredictAgent",
      actionType: AgentTypes.predict,
      suggestionLabelVisibility: true,
      suggestionCopyButtonVisibility: true,
    },
    {
      name: "EnhanceAgent",
      actionType: AgentTypes.enhance,
      suggestionLabelTextOverride: "Suggested Enhancement",
      suggestionLabelVisibility: true,
      suggestionCopyButtonVisibility: true,
    },
    {
      name: "TranslateAgent",
      actionType: AgentTypes.translate,
      suggestionLabelTextOverride: "Translation",
      suggestionLabelVisibility: true,
    },
    {
      name: "FeedbackAgent",
      actionType: AgentTypes.feedback,
      suggestionLabelTextOverride: "Feedback",
      suggestionLabelVisibility: true,
      suggestionApplyButtonVisibility: false,
      suggestionCopyButtonVisibility: false,
    },
  ];

  const [activeAgent] = useState(agentsConfig[0].actionType);

  return (
    <>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Styled Combotron Mode</h2>
        <div className="mb-6">
          <a
            href="https://www.inputron.com/docs/components/texteditcombotron"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            View Documentation
          </a>
        </div>
        <TextEditorComboTron
          value={textValue}
          setTextValue={setTextValue}
          agentsConfig={agentsConfig}
          activeAgent={activeAgent}
          agentsIconsAlignment={'top-center'}
          refreshButtonConfiguration ={ {text: "Process", type: 'icon', alignment: 'top-right' }}
          undoButtonConfiguration = {{ text: "Undo", type: 'icon', alignment: 'top-right' }}
          displayMode={{
            initialState: "Apply",
          }}
          triggerInterval={300}
          placeholderText="Start typing to get started ..."
          labelConfig={{
            content: "Editable text area to suit variety of use cases:",
            visible: false,
            style: { fontWeight: "bold", color: "#1f2937", marginBottom: "8px" },
          }}
        />
      </div>
      <div className="p-4">
        {/* <div className="mb-6">
          <a
            href="https://inputron.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-center hover:bg-blue-600 transition-all"
          >
            Subscribe for Updates
          </a>
        </div> */}

        {/* <h2 className="text-lg font-bold mb-4 ">Example usage</h2> */}

        {/* Tab Navigation */}
        {/* <div className="flex space-x-4 mb-4 border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === "Simple" ? "border-b-2 border-blue-600 text-blue-600 font-bold" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Simple")}
          >
            Simple
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "ComboTron" ? "border-b-2 border-blue-600 text-blue-600 font-bold" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("ComboTron")}
          >
            ComboTron
          </button> */}
        </div>

        {/* Tab Content */}
        {/* <div className="mt-4">
          {activeTab === "Simple" && (
            <div>
              <h3 className="text-md font-semibold mb-2">Simple Employee Performance Review Form</h3>
              <EmployeeReviewForm />
            </div>
          )}
          {activeTab === "ComboTron" && (
            <div>
              <h3 className="text-md font-semibold mb-2">
                Inputron AI-enabled Employee Performance Review Form
              </h3>
              <TextEditCombotronEmployeeReviewForm />
            </div>
          )}
        </div> */}
      {/* </div> */}
    </>
  );
}
