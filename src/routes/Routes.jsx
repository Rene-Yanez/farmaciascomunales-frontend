import {
  Home, Productos, Usuarios, Solicitudes, Informes, Login, Perfil,
  CrearUsuario, Configuraciones, Dashboard, ConsultaPrecio,
  StockInventarios, Dispersar, Caja, Ventas, Compras,
  Fraccionamiento, Beneficiarios, FacturasGuias, ListaPrecios,
  HistorialPacientes, AlertasRetiro
} from "../pages"

const routes = [
  { path: "/", element: <Home /> },
  { path: "/productos", element: <Productos /> },
  { path: "/usuarios", element: <Usuarios /> },
  { path: "/solicitudes", element: <Solicitudes /> },
  { path: "/informes", element: <Informes /> },
  { path: "/login", element: <Login /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/crear-usuario", element: <CrearUsuario /> },
  { path: "/configuraciones", element: <Configuraciones /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/consultaprecio", element: <ConsultaPrecio /> },
  { path: "/stock", element: <StockInventarios /> },
  { path: "/dispersar", element: <Dispersar /> },
  { path: "/caja", element: <Caja /> },
  { path: "/ventas", element: <Ventas /> },
  { path: "/compras", element: <Compras /> },
  { path: "/fraccionamiento", element: <Fraccionamiento /> },
  { path: "/beneficiarios", element: <Beneficiarios /> },
  { path: "/facturasguias", element: <FacturasGuias /> },
  { path: "/listaprecios", element: <ListaPrecios /> },
  { path: "/historial", element: <HistorialPacientes /> },
  { path: "/alertas", element: <AlertasRetiro /> }
]

export default routes