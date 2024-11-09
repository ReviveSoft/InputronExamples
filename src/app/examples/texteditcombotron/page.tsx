"use client";
import React, { useState } from "react";
import { TextEditorComboTron, AgentTypes, ButtonConfigType } from "@revivesoft/inputron";
import { Wand, Edit3, Copy, MessageCircle, Check, MessageSquareText, RectangleEllipsis, ChartSpline, Languages } from "lucide-react"; // Import icons for agents and copy

export default function CombotronStyledExample() {
  const [textValue, setTextValue] = useState("");

  const buttonConfig: ButtonConfigType = {
    text: "Enhance",
    text_visible: true,
    button_visible: true,
    style: "bg-blue-800 text-white px-4 py-2 rounded",
    alignment: "right",
  };

  const agentsConfig = [
    {
      name: "EnhanceAgent",
      actionType: AgentTypes.enhance,
      icon: <Edit3 className="h-6 w-6 text-white-300" />, // Edit icon for enhance
      suggestionLabelTextOverride: "Suggested Enhancement",
      suggestionLabelVisibility: true
    },
    {
      name: "PredictAgent",
      actionType: AgentTypes.predict,
      icon: <Wand className="h-6 w-6 text-white-300" />, // Wand icon for predict
      suggestionLabelVisibility: true
    },
    {
      name: "FeedbackAgent",
      actionType: AgentTypes.feedback,
      icon: <MessageSquareText />, // Edit icon for enhance
      suggestionLabelTextOverride: "Feedback",
      suggestionLabelVisibility: true
    },
    {
      name: "ReasonAgent",
      actionType: AgentTypes.reason,
      icon: <RectangleEllipsis />, // Edit icon for enhance
      suggestionLabelTextOverride: "Reason",
      suggestionLabelVisibility: true
    },
    {
      name: "AnalyzeAgent",
      actionType: AgentTypes.analyze,
      icon: <ChartSpline />, // Edit icon for enhance
      suggestionLabelTextOverride: "Analyze",
      suggestionLabelVisibility: true
    },
    {
      name: "TranslateAgent",
      actionType: AgentTypes.translate,
      icon: <Languages />, // Edit icon for enhance
      suggestionLabelTextOverride: "Translate",
      suggestionLabelVisibility: true
    },
  ];

  const [activeAgent, setActiveAgent] = useState(agentsConfig[1].name);

  const handleAgentSelect = (agentName: string) => {
    setActiveAgent(agentName);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Styled Combotron Mode</h2>
      <TextEditorComboTron
        value={textValue}
        setTextValue={setTextValue}
        agentsConfig={agentsConfig}
        activeAgent={activeAgent}
        displayMode="replace" // Suggest mode for predictions
        buttonConfiguration={buttonConfig}
        triggerInterval={300}
        placeholderText="Start typing to get started ..."
        editorStyle={{
          fontSize: "15px",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #D1D5DB",
          color: "#374151",
          backgroundColor: "#f9fafb",
        }}
        suggestionConfig={{
          suggestionLabel: "Suggested Completion",
          containerAlignment: 'bottom',
          suggestionLabelStyle: {
            fontWeight: "bold",
            color: "#4B5563", // Dark gray for label
          },
          suggestionStyle: {
            fontSize: "14px",
            color: "#6B7280", // Subtle gray for predictions
            fontStyle: "italic",
          },
          //nerAlignment: "right", // Align suggestion box to the right
          copyButtonConfig: {
            visible: true, // Enable the copy icon
            icon: <Copy className="h-4 w-4" />, // Copy icon
          },
          applyButtonConfig: {
            text: "Apply", // 'Apply' button text
            visible: true,
            icon: <Check className="h-4 w-4" />,

          },
        }}
        labelConfig={{
          content: "Please provide detailed employee review:",
          visible: true,
          style: { fontWeight: "bold", color: "#1f2937", marginBottom: "8px" },
        }}
      />
    </div>
  );
}
