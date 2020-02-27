import React, { Fragment } from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <Fragment>
      <h1>Hello World!</h1>
    </Fragment>
  );
};

const rootElement = document.querySelector("#root");

render(<App />, rootElement);
