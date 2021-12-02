/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { NavBar } from './components/nav';
import { AppRoutes } from './components/routes';
 import { Html } from "./html";


 export default function App({assets}: any) {

   return (
        <>
            <NavBar />
           <AppRoutes />
        </>
   );
 }
