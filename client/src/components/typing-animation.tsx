import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  'data-testid'?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  className = '',
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  'data-testid': testId
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const targetText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        // Deleting characters
        setCurrentText(prev => prev.slice(0, -1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        // Adding characters
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else {
          // Full text displayed, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseDuration]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className} data-testid={testId}>
      {currentText}
      <span 
        className={`border-r-2 border-purple-500 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        style={{ animation: 'none' }}
      >
        |
      </span>
    </span>
  );
};
