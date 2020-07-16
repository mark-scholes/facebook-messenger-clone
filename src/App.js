import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./components/Message";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Mark", text: "a" },
    { username: 2, text: "b" },
  ]);
  const [userName, setUserName] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: userName, text: input }]);
    setInput("");
  };

  useEffect(() => {
    setUserName(prompt("Enter you name"));
  }, []);

  return (
    <div className="App">
      <h1> FaceBook Messenger Clone</h1>
      <h2>Welcome {userName}</h2>
      <form>
        <FormControl>
          <InputLabel>message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
          >
            Send
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message userName={userName} message={message} />
      ))}
    </div>
  );
};

export default App;
