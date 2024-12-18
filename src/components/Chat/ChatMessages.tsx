import React from 'react';
import { Message } from '../../types/chat';

const messages: Message[] = [
  {
    id: '1',
    content: 'Electric socket',
    sender: 'other',
    timestamp: '12:53',
    type: 'text'
  },
  {
    id: '2',
    content: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500',
    sender: 'user',
    timestamp: '12:54',
    type: 'image'
  }
];

const ChatMessage: React.FC<{ message: Message }> = ({ message }) => (
  <div
    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
  >
    <div
      className={`max-w-[70%] rounded-lg p-3 ${
        message.sender === 'user'
          ? 'bg-green-600 text-white'
          : 'bg-gray-700 text-gray-200'
      }`}
    >
      {message.type === 'image' ? (
        <img src={message.content} alt="" className="rounded-lg" />
      ) : (
        <p>{message.content}</p>
      )}
      <span className="text-xs opacity-75 mt-1 block">
        {message.timestamp}
      </span>
    </div>
  </div>
);

const ChatMessages = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatMessages;