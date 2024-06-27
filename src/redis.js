import React, { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const WS_URL = 'ws://localhost:3000';

const Redis = () => {
  const [messages, setMessages] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL);

  // Handle message received from WebSocket
  useEffect(()=>{
  if (lastMessage !== null) {
    setMessages(prevMessages => [...prevMessages, lastMessage.data]);
  }
},[lastMessage])
  const handleClickSendMessage = () => {
    sendMessage('Hello from React');
  };

  return (
    <div>
      <button onClick={handleClickSendMessage}>
        Send Message to WebSocket Server
      </button>
      <div>
        WebSocket state: {readyState === ReadyState.OPEN ? 'Open' : 'Closed'}
      </div>
      <div>
        <h2>Messages Received:</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Redis;
