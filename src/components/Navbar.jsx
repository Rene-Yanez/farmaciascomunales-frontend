import { useState } from "react"
import { Link } from "react-router-dom"
import { FiUser, FiSettings } from "react-icons/fi"
import logoTexto from "../assets/logo-blanco.png"

function Navbar() {
  const [mostrarMenu, setMostrarMenu] = useState(false)

  return (
    <div className="w-full">
      {/* BARRA SUPERIOR */}
      <div className="bg-green-700 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo con enlace al inicio */}
          <Link to="/">
            <img src={logoTexto} alt="Logo Farmacias Comunales" className="h-12" />
          </Link>
          <button
            onClick={() => setMostrarMenu(!mostrarMenu)}
            className="text-white font-semibold"
          >
            ☰ MENÚ
          </button>
        </div>
        <div className="w-2/5">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 rounded-full focus:outline-none"
          />
        </div>
        <div className="flex gap-4 text-white text-xl">
          <Link to="/login">
            <FiUser />
          </Link>
          <Link to="/configuraciones">
            <FiSettings />
          </Link>
        </div>
      </div>

      {/* MENÚ LATERAL */}
      {mostrarMenu && (
        <div className="bg-green-800 text-white px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold mb-2">Inicio</h3>
            <Link to="/" className="block hover:underline">Inicio</Link>
            <Link to="/dashboard" className="block hover:underline">Dashboard</Link>
          </div>

          <div>
            <h3 className="font-bold mb-2">Gestión</h3>
            <Link to="/productos" className="block hover:underline">Productos</Link>
            <Link to="/usuarios" className="block hover:underline">Usuarios</Link>
            <Link to="/crearusuario" className="block hover:underline">Crear Usuario</Link>
            <Link to="/beneficiarios" className="block hover:underline">Beneficiarios</Link>
            <Link to="/solicitudes" className="block hover:underline">Solicitudes</Link>
            <Link to="/ventas" className="block hover:underline">Ventas</Link>
            <Link to="/compras" className="block hover:underline">Compras</Link>
            <Link to="/caja" className="block hover:underline">Caja</Link>
          </div>

          <div>
            <h3 className="font-bold mb-2">Inventario</h3>
            <Link to="/stockinventarios" className="block hover:underline">Stock e Inventarios</Link>
            <Link to="/fraccionamiento" className="block hover:underline">Fraccionamiento</Link>
            <Link to="/dispersar" className="block hover:underline">Dispersar</Link>
            <Link to="/listaprecios" className="block hover:underline">Lista de Precios</Link>
            <Link to="/facturasguias" className="block hover:underline">Facturas y Guías</Link>
          </div>

          <div>
            <h3 className="font-bold mb-2">Informes</h3>
            <Link to="/informes" className="block hover:underline">Visualizar</Link>
            <Link to="/consultaprecio" className="block hover:underline">Consulta Precio</Link>
            <Link to="/historialpacientes" className="block hover:underline">Historial Pacientes</Link>
            <Link to="/alertasretiro" className="block hover:underline">Alertas de Retiro</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar