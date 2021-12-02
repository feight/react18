/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 import { hydrateRoot } from "react-dom";
 import { BrowserRouter } from "react-router-dom";
 import App from "./App";

 const root = document.getElementById("app");

 if(!root){
     console.warn(`Could not find app insertion element #app`)
 }else{

    hydrateRoot(root,
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

 }
