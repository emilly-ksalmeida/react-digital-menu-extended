import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Pedido from "./pages/Pedido.jsx";
import PedidosContext from "./context/PedidosContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pedido",
    element: <Pedido />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PedidosContext>
      <RouterProvider router={router} />
    </PedidosContext>
  </StrictMode>
);
