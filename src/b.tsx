/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 import {lazy, Suspense} from 'react';
 import { Html } from "./html";
 // This happens at runtime -- a lazy component returns a async component
 const Articles = lazy(async () => import('./components/Articles'));

 export default function B({assets}: any) {

   return (
       <Html>
            <Suspense fallback={<div>Loading...</div>}>
                <Articles />
            </Suspense>
       </Html>
   );
 }
