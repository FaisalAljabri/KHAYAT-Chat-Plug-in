import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12'
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md' }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${sizeClasses[size]} rounded-full object-cover`}
    />
  );
};

export default Avatar;