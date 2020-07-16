import React from "react";
import { CardContent, Card, Typography } from "@material-ui/core";
import "../../src/Message.css";

const Message = ({ message, userName }) => {
  const isUser = userName === message.username;
  return (
    <div className={`message_card ${isUser && "message_user"} `}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username} : {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
