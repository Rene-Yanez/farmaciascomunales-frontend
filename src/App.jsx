import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Perfil from "./pages/Perfil"

import Usuarios from "./pages/Usuarios"
import Productos from "./pages/Productos"
import Solicitudes from "./pages/Solicitudes"
import Informes from "./pages/Informes"
import Beneficiarios from "./pages/Beneficiarios"
import Ventas from "./pages/Ventas"
import Compras from "./pages/Compras"
import Fraccionamiento from "./pages/Fraccionamiento"
import Dispersar from "./pages/Dispersar"
import Caja from "./pages/Caja"
import Dashboard from "./pages/Dashboard"
import ConsultaPrecio from "./pages/ConsultaPrecio"
import StockInventarios from "./pages/StockInventarios"
import CrearUsuario from "./pages/CrearUsuario"
import Configuraciones from "./pages/Configuraciones"
import ListaPrecios from "./pages/ListaPrecios"
import HistorialPacientes from "./pages/HistorialPacientes"
import FacturasGuias from "./pages/FacturasGuias"
import AlertasRetiro from "./pages/AlertasRetiro"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />

        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
        <Route path="/informes" element={<Informes />} />
        <Route path="/beneficiarios" element={<Beneficiarios />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/fraccionamiento" element={<Fraccionamiento />} />
        <Route path="/dispersar" element={<Dispersar />} />
        <Route path="/caja" element={<Caja />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/consultaprecio" element={<ConsultaPrecio />} />
        <Route path="/stockinventarios" element={<StockInventarios />} />
        <Route path="/crearusuario" element={<CrearUsuario />} />
        <Route path="/configuraciones" element={<Configuraciones />} />
        <Route path="/listaprecios" element={<ListaPrecios />} />
        <Route path="/historialpacientes" element={<HistorialPacientes />} />
        <Route path="/facturasguias" element={<FacturasGuias />} />
        <Route path="/alertasretiro" element={<AlertasRetiro />} />
      </Routes>
    </Router>
  )
}

export default App