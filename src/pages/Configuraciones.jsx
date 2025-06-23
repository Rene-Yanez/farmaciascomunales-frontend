import { useState } from 'react'

function Configuraciones() {
  const [nombre, setNombre] = useState('Florencio Cabeza de Balde')
  const [correo, setCorreo] = useState('florencio@comunal.cl')
  const [notificaciones, setNotificaciones] = useState(true)
  const [tema, setTema] = useState('claro')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Configuraciones</h1>

        <form className="space-y-6">

          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de usuario</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nueva contraseña</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Switch Notificaciones */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Recibir notificaciones</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notificaciones}
                onChange={() => setNotificaciones(!notificaciones)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 relative">
                <div className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5 left-0.5 peer-checked:translate-x-full transition-transform"></div>
              </div>
            </label>
          </div>

          {/* Selector de Tema */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tema</label>
            <select
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="claro">Claro</option>
              <option value="oscuro">Oscuro</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Guardar cambios
          </button>
        </form>
      </div>
    </div>
  )
}

export default Configuraciones