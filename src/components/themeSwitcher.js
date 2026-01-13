import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '@contexts/ThemeContext';
import { themeKeys } from '@styles/themes';

const StyledThemeSwitcher = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const ThemeButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--green);
  background-color: var(--navy);
  color: var(--green);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: var(--transition);
  box-shadow: 0 10px 30px -15px var(--navy-shadow);

  &:hover {
    background-color: var(--green-tint);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
`;

const ThemeMenu = styled.div`
  position: absolute;
  bottom: 60px;
  right: 0;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  padding: 10px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transform: translateY(${props => (props.isOpen ? 0 : '10px')});
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  min-width: 150px;

  @media (max-width: 768px) {
    bottom: 55px;
  }
`;

const ThemeOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 15px;
  background: ${props => (props.isActive ? 'var(--green-tint)' : 'transparent')};
  border: none;
  border-radius: var(--border-radius);
  color: ${props => (props.isActive ? 'var(--green)' : 'var(--light-slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  cursor: pointer;
  transition: var(--transition);
  text-align: left;

  &:hover {
    background-color: var(--green-tint);
    color: var(--green);
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const ColorPreview = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 2px solid var(--lightest-navy);
  margin-left: 10px;
`;

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, changeTheme, themes } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleThemeChange = themeName => {
    changeTheme(themeName);
    setIsOpen(false);
  };

  return (
    <StyledThemeSwitcher>
      <ThemeMenu isOpen={isOpen}>
        {themeKeys.map(key => (
          <ThemeOption
            key={key}
            isActive={currentTheme === key}
            onClick={() => handleThemeChange(key)}>
            {themes[key].name}
            <ColorPreview color={themes[key].colors.accent} />
          </ThemeOption>
        ))}
      </ThemeMenu>
      <ThemeButton onClick={toggleMenu} aria-label="Change theme">
        🎨
      </ThemeButton>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
