import { useEffect, useState } from "react"

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(import.meta.env.VITE_API_USUARIOS + "/usuarios")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los usuarios")
        return res.json()
      })
      .then((data) => {
        setUsuarios(data)
        setCargando(false)
      })
      .catch((err) => {
        setError(err.message)
        setCargando(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">Listado de Usuarios</h1>

        {cargando && <p className="text-center text-blue-600">Cargando usuarios...</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}

        {!cargando && !error && usuarios.length === 0 && (
          <p className="text-center text-gray-500">No hay usuarios registrados.</p>
        )}

        {!cargando && usuarios.length > 0 && (
          <table className="w-full table-auto border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 border">Nombre</th>
                <th className="px-4 py-2 border">Correo</th>
                <th className="px-4 py-2 border">Rol</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u, i) => (
                <tr key={i} className="hover:bg-blue-50">
                  <td className="px-4 py-2 border">{u.nombre}</td>
                  <td className="px-4 py-2 border">{u.correo}</td>
                  <td className="px-4 py-2 border capitalize">{u.rol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Usuarios