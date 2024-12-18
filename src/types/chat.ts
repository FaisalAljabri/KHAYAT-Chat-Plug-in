export interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  type: MessageType;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'other';
  timestamp: string;
  type: MessageType;
}

export interface ChatAreaProps {
  name: string;
  avatar: string;
}

export type MessageType = 'video' | 'image' | 'text' | 'audio';