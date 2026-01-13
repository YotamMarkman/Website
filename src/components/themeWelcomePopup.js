import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  backdrop-filter: blur(4px);
`;

const PopupContent = styled.div`
  background-color: var(--light-navy);
  border: 2px solid var(--green);
  border-radius: 10px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  transform: ${props => (props.isVisible ? 'scale(1)' : 'scale(0.9)')};
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 25px;
    max-width: 90%;
  }
`;

const PopupTitle = styled.h2`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(20px, 4vw, 24px);
  margin: 0 0 15px 0;
`;

const PopupText = styled.p`
  color: var(--light-slate);
  font-size: var(--fz-lg);
  line-height: 1.6;
  margin: 0 0 25px 0;

  @media (max-width: 768px) {
    font-size: var(--fz-md);
  }
`;

const PopupButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  color: var(--green);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  padding: 12px 24px;
  transition: var(--transition);

  &:hover {
    background-color: var(--green-tint);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ArrowPointer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  z-index: 10000;
  display: ${props => (props.isVisible ? 'block' : 'none')};
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) rotate(-45deg);
    }
    40% {
      transform: translateY(-10px) rotate(-45deg);
    }
    60% {
      transform: translateY(-5px) rotate(-45deg);
    }
  }

  @media (max-width: 768px) {
    bottom: 80px;
    right: 80px;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-right: 4px solid var(--green);
  border-bottom: 4px solid var(--green);
  box-shadow: 0 0 20px var(--green);
`;

const ThemeWelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hasSeenThemePopup');

    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as seen in localStorage
    localStorage.setItem('hasSeenThemePopup', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <PopupOverlay isVisible={isVisible} onClick={handleClose}>
        <PopupContent isVisible={isVisible} onClick={e => e.stopPropagation()}>
          <PopupTitle>🎨 Welcome!</PopupTitle>
          <PopupText>
            Hey! Did you know you can customize the look of this site? Click the theme button in the
            bottom-right corner to choose from 6 different color schemes. Pick your favorite!
          </PopupText>
          <PopupButton onClick={handleClose}>Got it, thanks!</PopupButton>
        </PopupContent>
      </PopupOverlay>
      <ArrowPointer isVisible={isVisible}>
        <Arrow />
      </ArrowPointer>
    </>
  );
};

export default ThemeWelcomePopup;
