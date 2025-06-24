
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes } from "react-router-dom";
import Router from "./routes/Router.jsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
        <Router/>
  </QueryClientProvider>
);

export default App;
