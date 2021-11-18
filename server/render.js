
import React from "react";
import { renderToPipeableStream } from 'react-dom/server';
import App from "../src/App";

export const render = (url, res) => {
    res.socket.on("error", (error) => {
      console.error("Fatal", error);
    });
    let didError = false;
    const { pipe, abort } = renderToPipeableStream(
        <App />,
      {
        onCompleteShell() {
          // If something errored before we started streaming, we set the error code appropriately.
          res.statusCode = didError ? 500 : 200;
          res.setHeader("Content-type", "text/html");
          pipe(res);
        },
        onError(x) {
          didError = true;
          console.error(x);
        }
      }
    );
    setTimeout(abort, 10000);
  };
