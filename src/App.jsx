import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
