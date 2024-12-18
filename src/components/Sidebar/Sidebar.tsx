import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ChatList from './ChatList';
import { useResizable } from '../../hooks/useResizable';
import { SidebarProps } from '../../types/sidebar';
import { SidebarToggle } from './SidebarToggle';
import { ResizeHandle } from './ResizeHandle';

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const { width, isResizing, startResizing } = useResizable(280, 480);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (isCollapsed) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isCollapsed) setIsHovered(false);
  };

  const isEffectivelyCollapsed = isCollapsed && !isHovered;

  return (
    <div
      className={`relative flex-shrink-0 transition-all duration-300 ease-in-out border-r border-gray-700 ${
        isEffectivelyCollapsed ? 'w-[72px]' : ''
      }`}
      style={{ width: isEffectivelyCollapsed ? undefined : width }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full overflow-hidden">
        <ChatList isCollapsed={isEffectivelyCollapsed} />
      </div>

      <ResizeHandle 
        show={!isEffectivelyCollapsed}
        isResizing={isResizing}
        onResizeStart={startResizing}
      />

      <SidebarToggle 
        isCollapsed={isEffectivelyCollapsed}
        onToggle={onToggle}
      />
    </div>
  );
};

export default Sidebar;