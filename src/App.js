import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["a", "bv", "C"]);
  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1> FaceBook Messenger Clone</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
};

export default App;
