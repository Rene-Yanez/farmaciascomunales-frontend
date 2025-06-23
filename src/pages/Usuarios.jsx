import { useEffect, useState } from 'react'
import { apiFetch } from '@/services/api'

function Usuarios() {
  const [busqueda, setBusqueda] = useState('')
  const [usuarios, setUsuarios] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    apiFetch('usuarios', '/usuarios')
      .then(data => {
        setUsuarios(data)
        setError(false)
      })
      .catch(err => {
        console.error("Error al cargar usuarios:", err.message)
        setError(true)
      })
  }, [])

  const usuariosFiltrados = usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10">
      <div className="max-w-5xl mx-auto text-green-900">
        <h1 className="text-3xl font-bold mb-6 text-center">Gestión de Usuarios</h1>

        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-full border border-green-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div className="overflow-x-auto rounded-lg shadow-md bg-white p-4">
          {error ? (
            <p className="text-center text-red-600 font-semibold">No se encontraron usuarios 😕</p>
          ) : (
            <table className="min-w-full text-sm text-left">
              <thead className="bg-green-100 text-green-800 font-semibold">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Nombre</th>
                  <th className="px-6 py-3">Correo</th>
                  <th className="px-6 py-3">Rol</th>
                  <th className="px-6 py-3 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuariosFiltrados.map((u) => (
                  <tr key={u.id} className="border-b hover:bg-green-50">
                    <td className="px-6 py-3">{u.id}</td>
                    <td className="px-6 py-3">{u.nombre}</td>
                    <td className="px-6 py-3">{u.email}</td>
                    <td className="px-6 py-3">{u.rol}</td>
                    <td className="px-6 py-3 text-center">
                      <button className="text-green-600 hover:underline mr-2">Editar</button>
                      <button className="text-red-600 hover:underline">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Usuarios