import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Lobby from "./pages/Lobby";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:lobbyId",
    element: <Lobby />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
