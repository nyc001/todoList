import React, { useState } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  // const time = new Date().toLocaleTimeString();
  const [time, setTime] = useState(getNewTime());
  const date = getNewDate();

  setInterval(() => {
    setTime(getNewTime());
  }, 1000);

  function getNewTime() {
    return new Date().toLocaleTimeString();
  }
  function getNewDate() {
    return new Date().toDateString();
  }
  return (
    <header>
      <h1>
        <HighlightIcon />
        <span> </span>Keeper App
      </h1>
      <p>
        {date}, {time}
      </p>
    </header>
  );
}

export default Header;
