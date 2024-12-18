import React from 'react';

interface ResizeHandleProps {
  show: boolean;
  isResizing: boolean;
  onResizeStart: () => void;
}

export const ResizeHandle: React.FC<ResizeHandleProps> = ({ 
  show, 
  isResizing, 
  onResizeStart 
}) => {
  if (!show) return null;

  return (
    <div
      className={`absolute right-0 top-0 w-1 h-full cursor-col-resize hover:bg-green-500 ${
        isResizing ? 'bg-green-500' : 'bg-gray-700'
      }`}
      onMouseDown={onResizeStart}
    />
  );
};