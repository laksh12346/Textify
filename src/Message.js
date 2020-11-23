import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message_Card ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_usercard" : "message_guestcard"}>
        <CardContent>
          <Typography color="white" components="h2">
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
