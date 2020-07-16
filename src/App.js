import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1> FaceBook Messenger Clone</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Send</button>
    </div>
  );
};

export default App;
