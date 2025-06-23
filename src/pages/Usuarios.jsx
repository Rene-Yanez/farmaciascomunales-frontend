import { useEffect, useState } from 'react'
import { apiFetch } from '../services/api'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    apiFetch('usuarios', '/usuarios') // o el endpoint real que tengas
      .then(data => {
        setUsuarios(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando usuarios...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <ul className="space-y-2">
        {usuarios.map(usuario => (
          <li key={usuario.id} className="border p-2 rounded shadow">
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>Correo:</strong> {usuario.correo}</p>
            <p><strong>Rol:</strong> {usuario.rol}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Usuarios