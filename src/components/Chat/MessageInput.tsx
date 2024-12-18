import React from 'react';
import { Smile, Paperclip, Mic, Send } from 'lucide-react';
import IconButton from '../shared/IconButton';

const MessageInput = () => {
  return (
    <div className="px-4 py-3 bg-gray-800">
      <div className="flex items-center space-x-2">
        <IconButton Icon={Smile} size={24} className="hidden sm:block" />
        <IconButton Icon={Paperclip} size={24} className="hidden sm:block" />
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <IconButton Icon={Mic} size={24} className="hidden sm:block" />
        <IconButton 
          Icon={Send} 
          size={24}
          className="text-green-500 hover:text-green-400"
        />
      </div>
    </div>
  );
};

export default MessageInput;