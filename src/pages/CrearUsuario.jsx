import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiFetch } from '../services/api'

function CrearUsuario() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [rol, setRol] = useState('')
  const [mensaje, setMensaje] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await apiFetch(`${import.meta.env.VITE_API_USUARIOS}/api/usuarios`, {
        method: 'POST',
        body: { nombre, correo, rol },
      })
      setMensaje('Usuario creado exitosamente')
      setTimeout(() => {
        navigate('/usuarios')
      }, 2000)
    } catch (error) {
      setMensaje('Error al crear usuario')
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen bg-green-50 p-8 text-green-900">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Crear Nuevo Usuario</h2>
        {mensaje && <p className="text-center mb-4 text-sm">{mensaje}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <select
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Selecciona un rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Funcionario">Funcionario</option>
            <option value="Inventario">Inventario</option>
            <option value="Vendedor">Vendedor</option>
            <option value="Director">Director</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800"
          >
            Crear Usuario
          </button>
        </form>
      </div>
    </div>
  )
}

export default CrearUsuario