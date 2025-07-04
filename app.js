import React, { useEffect, useState } from "react";
import "./App.css";

const messages = [
  "🧑‍💻 Initializing Hack Program...",
  "Bypassing firewall...",
  "Hacking username: aashish17...",
  "Connected to Facebook...",
  "Brute-forcing password...",
  "Password cracked: ********",
  "Injecting virus...",
  "Exfiltrating data...",
  "✔ Mission Complete."
];

function App() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const run = async () => {
      for (let msg of messages) {
        await typeMessage(msg);
        await delay(500 + Math.random() * 500);
      }
    };
    run();
  }, [index]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const typeMessage = async (text) => {
    for (let i = 0; i < text.length; i++) {
      setDisplayText((prev) => prev + text[i]);
      await delay(40 + Math.random() * 30);
    }
    setDisplayText((prev) => prev + "\n");
  };

  const handleReplay = () => {
    setDisplayText("");
    setIndex(index + 1); // re-trigger useEffect
  };

  return (
    <div className="container">
      <div className="terminal">
        <pre>{displayText}{showCursor && <span className="cursor">█</span>}</pre>
      </div>
      <button onClick={handleReplay} className="btn">↻ Replay</button>
    </div>
  );
}

export default App;
