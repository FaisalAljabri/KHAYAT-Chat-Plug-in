import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarToggleProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SidebarToggle: React.FC<SidebarToggleProps> = ({ isCollapsed, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full p-1 border border-gray-700 hover:bg-gray-700 cursor-pointer"
    >
      <span className="text-gray-400">
        {isCollapsed ? (
          <ChevronRight size={16} />
        ) : (
          <ChevronLeft size={16} />
        )}
      </span>
    </div>
  );
};