
import React from "react";
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import App from "../App";
import { Html } from "../html";

export const render = (url, res) => {
    res.socket.on("error", (error) => {
      console.error("Fatal", error);
    });
    let didError = false;
    const { pipe, abort } = renderToPipeableStream(
        <Html>
            <StaticRouter location={ url }>
                <App />
            </StaticRouter>
        </Html>,
      {
        bootstrapScripts: ["/static/index.js"],
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
