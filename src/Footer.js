import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by
      <a
        href="https://github.com/jengpark"
        target="_blank"
        className="sourceLink"
      >
        Jen Park
      </a>
      and is
      <a
        href="https://github.com/jengpark/cat-weather-app-project"
        target="_blank"
        className="sourceLink"
      >
        open-sourced on Github
      </a>
      and
      <a
        href="https://jp-cat-weather-app.netlify.app/"
        target="_blank"
        className="sourceLink"
      >
        hosted on Netlify
      </a>
    </div>
  );
}
