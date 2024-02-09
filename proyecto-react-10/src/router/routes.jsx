import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Contacto from "../views/Contacto";
import Productos from "../views/Productos";
import QuieresSomos from "../views/QuieresSomos";

const router = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/contacto", element: <Contacto /> },
  { path: "/productos", element: <Productos /> },
  { path: "about", element: <QuieresSomos /> },
  { path: "ruta-ejemplo", element: <h1>Ruta de ejemplo</h1>}
]);

export default router;
