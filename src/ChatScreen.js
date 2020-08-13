import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Elon",
      image:
        "https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg",
      message: "Whats up?",
    },
    {
      name: "Elon",
      image:
        "https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg",
      message: "Hows it going!",
    },
    {
      message: "Hi! How are you Elon!",
    },
  ]);

  const handleSend = e => {
      e.preventDefault();

      setMessages([...messages, {message: input}]);
      setInput('');
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATHCED WITH ELON ON 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message..."
          />
          <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
