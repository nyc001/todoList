import React from "react";

function Footer() {
  const today = new Date();
  return (
    <footer>
      <p>
        Made with LOVE in Canada{" "}
        <span role="img" aria-label="maple leaf">
          🍁
        </span>{" "}
      </p>
      <p>Copyright © Henry.X {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
