import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [correo, setCorreo] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [mensaje, setMensaje] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setMensaje("")

    fetch(import.meta.env.VITE_API_USUARIOS + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, contrasena }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Credenciales inválidas")
        return res.json()
      })
      .then((data) => {
        // Simulación de sesión
        localStorage.setItem("usuario", JSON.stringify(data))
        setMensaje(`✅ Bienvenido ${data.nombre}`)
        setTimeout(() => navigate("/"), 1500)
      })
      .catch((err) => setMensaje("❌ " + err.message))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">Iniciar sesión</h1>

        {mensaje && (
          <div className="bg-blue-100 text-blue-700 p-3 mb-4 rounded text-sm text-center">
            {mensaje}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-700">Correo</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Contraseña</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login