import { useState } from "react"

function CrearUsuario() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [rol, setRol] = useState("cajero")
  const [contrasena, setContrasena] = useState("")
  const [confirmar, setConfirmar] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [usuariosSimulados, setUsuariosSimulados] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nombre || !correo || !contrasena || !confirmar) {
      setMensaje("❌ Todos los campos son obligatorios")
      return
    }

    if (contrasena !== confirmar) {
      setMensaje("❌ Las contraseñas no coinciden")
      return
    }

    // Simulamos guardar usuario
    const nuevoUsuario = { nombre, correo, rol }
    setUsuariosSimulados([...usuariosSimulados, nuevoUsuario])
    setMensaje(`✅ Usuario "${nombre}" creado exitosamente con rol "${rol}"`)

    // Limpiar
    setNombre("")
    setCorreo("")
    setRol("cajero")
    setContrasena("")
    setConfirmar("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">Crear nuevo usuario</h1>

        {mensaje && (
          <div className="bg-blue-100 text-blue-700 p-3 mb-4 rounded text-sm text-center">
            {mensaje}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-700">Nombre completo</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Correo electrónico</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Rol</label>
            <select
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="cajero">Cajero/a</option>
              <option value="vendedor">Vendedor/a</option>
              <option value="inventario">Inventario</option>
              <option value="admin">Administrador/a</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Contraseña</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Confirmar contraseña</label>
            <input
              type="password"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Crear usuario
          </button>
        </form>

        {/* Lista simulada de usuarios */}
        {usuariosSimulados.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-blue-800 mb-2">Usuarios creados:</h2>
            <ul className="text-sm text-blue-700 space-y-1">
              {usuariosSimulados.map((u, i) => (
                <li key={i}>👤 {u.nombre} - {u.rol}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default CrearUsuario