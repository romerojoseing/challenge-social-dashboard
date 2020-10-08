import React from 'react';
import './switch.css';

let clickedClass = "clicked";
const body = document.body;
const lightTheme = "light";
const darkTheme = "dark";
let theme;

if (localStorage) {
  theme = localStorage.getItem("theme");
}

if (theme === lightTheme || theme === darkTheme) {
  body.classList.add(theme);
} else {
  body.classList.add(lightTheme);
}

const switchTheme = (e) => {
  if (theme === darkTheme) {
    body.classList.replace(darkTheme, lightTheme);
    e.target.classList.remove(clickedClass);
    localStorage.setItem("theme", "light");
    theme = lightTheme;
  } else {
    body.classList.replace(lightTheme, darkTheme);
    e.target.classList.add(clickedClass);
    localStorage.setItem("theme", "dark");
    theme = darkTheme;
  }
};

function Switch() {
  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        onClick={(e) => switchTheme(e)}
        className="checkbox"
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch