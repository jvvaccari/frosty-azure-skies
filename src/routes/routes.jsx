import { createBrowserRouter } from "react-router-dom";
import LiveWeather from "../pages/LiveWeather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LiveWeather />,
  },
]);

export default router;
