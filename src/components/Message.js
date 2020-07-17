import React from "react";
import { CardContent, Card, Typography } from "@material-ui/core";
import "../../src/Message.css";

const Message = ({ username, message }) => {
  const isUser = username === message.username;

  return (
    <div className={`message_card ${isUser && "message_user"} `}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.username} : {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
