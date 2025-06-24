import { createBrowserRouter } from "react-router-dom";
import LiveWeather from "../pages/LiveWeather";
import HistoryWeather from "../pages/HistoryWeather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LiveWeather />,
    children: [
        {path: "history",element: <HistoryWeather />}
    ]
  },
]);

export default router;
