import { useRoutes } from "react-router";
import A from "../a";
import B from "../b";

export function AppRoutes() {
  const element = useRoutes([
    {
      path: '/',
      element: (
        <div className="row">
            <h2>React 18</h2>
        </div>
      ),
    },
    { path: '/a', element: <A /> },
    { path: '/b', element: <B /> },
  ]);

  return element;
}