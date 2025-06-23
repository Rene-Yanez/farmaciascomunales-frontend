import { useEffect, useState } from 'react'
import { apiFetch } from '@/services/api'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    apiFetch('usuarios', '/usuarios')
      .then(setUsuarios)
      .catch(err => {
        console.error("Error al cargar usuarios:", err.message)
        setError(true)
      })
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      {error ? (
        <p className="text-red-500">No se pudo obtener usuarios 😕</p>
      ) : (
        <ul className="list-disc pl-6">
          {usuarios.map(u => (
            <li key={u.id}>{u.nombre} - {u.email} ({u.rol})</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Usuarios