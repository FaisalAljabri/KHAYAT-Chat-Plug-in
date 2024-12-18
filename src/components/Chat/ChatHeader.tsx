import React from 'react';
import { Phone, Video, Search, MoreVertical, Menu } from 'lucide-react';
import Avatar from '../shared/Avatar';
import IconButton from '../shared/IconButton';

interface ChatHeaderProps {
  name: string;
  avatar: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ name, avatar }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center">
        <Avatar src={avatar} alt={name} size="md" />
        <div className="ml-3">
          <h2 className="text-gray-200 font-medium">{name}</h2>
          <span className="text-gray-400 text-sm">online</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-4">
          <IconButton Icon={Phone} />
          <IconButton Icon={Video} />
          <IconButton Icon={Search} />
        </div>
        <IconButton Icon={MoreVertical} className="sm:hidden" />
        <div className="relative group sm:hidden">
          <IconButton Icon={Menu} as="span" />
          <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg hidden group-hover:block z-50">
            <div className="py-2">
              <div className="w-full px-4 py-2 text-left text-gray-200 hover:bg-gray-700 flex items-center cursor-pointer">
                <Phone className="mr-2" size={16} /> Call
              </div>
              <div className="w-full px-4 py-2 text-left text-gray-200 hover:bg-gray-700 flex items-center cursor-pointer">
                <Video className="mr-2" size={16} /> Video Call
              </div>
              <div className="w-full px-4 py-2 text-left text-gray-200 hover:bg-gray-700 flex items-center cursor-pointer">
                <Search className="mr-2" size={16} /> Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;