import "./styles.css";
import { useState } from "react";
import MetaTags from "react-meta-tags";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Chatbot from "react-chatbot-kit";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import TypedReact from "./TypedReact";
import React from "react";

export default function App() {
  const [showBot, toggleBot] = useState(false);

  return (
    <div className="App">
      <div className="app-chatbot-container">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}
