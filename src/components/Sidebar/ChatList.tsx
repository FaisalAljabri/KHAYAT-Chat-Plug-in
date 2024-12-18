import React from 'react';
import { Video, Image, Mic } from 'lucide-react';
import Avatar from '../shared/Avatar';
import { ChatItem } from '../../types/chat';

interface ChatListProps {
  isCollapsed?: boolean;
}

const chats: ChatItem[] = [
  {
    id: '1',
    name: 'Faisal (You)',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    lastMessage: 'https://youtu.be/XfTn...',
    time: 'Now',
    type: 'text'
  },
  {
    id: '2',
    name: 'Huda',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    lastMessage: 'Image',
    time: '22:31',
    type: 'image'
  }
];

const ChatList: React.FC<ChatListProps> = ({ isCollapsed = false }) => {
  return (
    <div className="h-full bg-gray-900">
      {!isCollapsed && (
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search or start a new chat"
              className="w-full bg-gray-800 text-gray-200 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      )}
      
      <div className="overflow-y-auto">
        {chats.map((chat) => (
          <div 
            key={chat.id} 
            className={`flex items-center ${
              isCollapsed ? 'justify-center p-2' : 'p-3'
            } hover:bg-gray-800 cursor-pointer`}
          >
            <Avatar 
              src={chat.avatar} 
              alt={chat.name} 
              size={isCollapsed ? "md" : "lg"} 
            />
            {!isCollapsed && (
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <span className="text-gray-200 font-medium">{chat.name}</span>
                  <span className="text-gray-400 text-sm">{chat.time}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  {chat.type === 'video' && <Video size={16} className="mr-1" />}
                  {chat.type === 'image' && <Image size={16} className="mr-1" />}
                  {chat.type === 'audio' && <Mic size={16} className="mr-1" />}
                  <span className="text-sm truncate">{chat.lastMessage}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;