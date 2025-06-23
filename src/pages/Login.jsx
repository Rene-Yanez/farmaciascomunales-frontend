import { useState } from 'react'

function Login() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!correo || !contrasena) {
      setError('Todos los campos son obligatorios.')
      return
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_USUARIOS + '/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, contrasena }),
      })

      if (!response.ok) {
        const text = await response.text()
        throw new Error(text)
      }

      const data = await response.json()
      console.log('Login exitoso:', data)

      // Aquí puedes guardar datos de sesión si quieres
      // localStorage.setItem('usuario', JSON.stringify(data))

      setError('')
      // Redireccionar si es necesario
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        {error && <p className="mb-4 text-red-600 text-sm">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Correo</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Contraseña</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default Login