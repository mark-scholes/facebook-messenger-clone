import React, { forwardRef } from "react";

import { CardContent, Card, Typography } from "@material-ui/core";
import "../../src/Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message_card ${isUser && "message_user"} `}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {!isUser && `${message.username} :`} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
