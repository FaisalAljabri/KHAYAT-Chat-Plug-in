import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  Icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  size?: number;
  as?: 'button' | 'span';
}

const IconButton: React.FC<IconButtonProps> = ({ 
  Icon, 
  onClick, 
  className = 'text-gray-400 hover:text-gray-200',
  size = 20,
  as = 'button'
}) => {
  const Component = as;
  return (
    <Component 
      className={`inline-flex items-center justify-center ${className}`} 
      onClick={onClick}
      role={as === 'span' ? 'button' : undefined}
      tabIndex={as === 'span' ? 0 : undefined}
    >
      <Icon size={size} />
    </Component>
  );
};

export default IconButton;