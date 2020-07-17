import React, { useState, useEffect } from "react";
import { FormControl, Input, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./components/Message";
import db from "./Firebase";
import "./App.css";
import firebase from "firebase";
import Flipmove from "react-flip-move";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("Enter you name..."));
  }, []);

  useEffect(() => {
    db.collection("messages")
      //this will be ordered in reverse for now until auto scroll is implimented
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img
        alt="facebook_logo"
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?v=100&h=100"
      />
      <h1> FaceBook Messenger Clone</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton type="submit" onClick={sendMessage} disabled={!input}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <Flipmove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </Flipmove>
    </div>
  );
};

export default App;
