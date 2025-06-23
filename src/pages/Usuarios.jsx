import { useEffect, useState } from 'react'
import { apiFetch } from '../services/api'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    apiFetch('usuarios', '/usuarios') // Asegúrate que este endpoint sea correcto
      .then(data => {
        setUsuarios(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="p-4 text-gray-600">Cargando usuarios...</p>
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Usuarios</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {usuarios.map(usuario => (
          <div
            key={usuario.id}
            className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <p><span className="font-semibold"> Nombre:</span> {usuario.nombre}</p>
            <p><span className="font-semibold"> Correo:</span> {usuario.correo}</p>
            <p><span className="font-semibold"> Rol:</span> {usuario.rol}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Usuarios