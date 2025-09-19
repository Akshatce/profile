import React from 'react';

interface SmoothScrollProps {
  to: string;
  children: React.ReactNode;
  offset?: number;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ 
  to, 
  children, 
  offset = -100 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    
    const targetId = to.startsWith('#') ? to.slice(1) : to;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.offsetTop + offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};
