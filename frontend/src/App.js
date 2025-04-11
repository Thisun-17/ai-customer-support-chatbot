import React from 'react';
import './App.css';
import ChatBox from './components/Chat/ChatBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Customer Support Chatbot</h1>
      </header>
      <main className="App-main">
        <ChatBox />
      </main>
    </div>
  );
}

export default App;