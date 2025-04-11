import React, { useState } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat history
    const newMessage = {
      sender: 'user',
      content: message,
      timestamp: new Date()
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage('');

    // Here you would typically call your API to get a bot response
    // For now, we'll just simulate a response
    setTimeout(() => {
      const botResponse = {
        sender: 'bot',
        content: 'This is a simulated response. The AI integration will come later!',
        timestamp: new Date()
      };
      setChatHistory((history) => [...history, botResponse]);
    }, 1000);
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {chatHistory.map((msg, index) => (
          <div 
            key={index} 
            className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-content">{msg.content}</div>
            <div className="message-timestamp">
              {msg.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;