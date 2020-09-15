import React, { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import useDarkMode from 'use-dark-mode';

const stylesButton = {
   visibility: "hidden"
}

const ButtonColor = () => {
  const darkMode = useDarkMode(false);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <div>
      <button
        type="button"
        onClick={darkMode.enable}
        style={stylesButton}>
      </button>
      <DarkModeToggle
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={45}
        />
      <button
        type="button"
        onClick={darkMode.disable}
        style={stylesButton}>
      </button>
    </div>
  );
};

export default ButtonColor;
