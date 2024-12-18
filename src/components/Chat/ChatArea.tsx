import React from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';

interface ChatAreaProps {
  name: string;
  avatar: string;
}

const ChatArea: React.FC<ChatAreaProps> = ({ name, avatar }) => {
  return (
    <div className="flex flex-col flex-1 min-w-0">
      <ChatHeader name={name} avatar={avatar} />
      <ChatMessages />
      <MessageInput />
    </div>
  );
};

export default ChatArea;