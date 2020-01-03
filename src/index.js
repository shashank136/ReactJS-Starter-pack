import React from 'react';
import ReactDOM from 'react-dom';
import LoadableApp from "./LoadableApp";

const rootId = document.getElementById("root");

ReactDOM.render(<LoadableApp/>, rootId);

if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept("./LoadableApp", () => {
      const NextApp = require("./LoadableApp").default;
      ReactDOM.render(<NextApp/>, rootId);
    });
}