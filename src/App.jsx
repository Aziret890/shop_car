import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Map from "./pages/Map";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "*",
    element: "",
  },
  {
    path: "/map",
    element: <Map />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
