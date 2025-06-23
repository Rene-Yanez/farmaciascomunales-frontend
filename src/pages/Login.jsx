function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-white px-4 py-12">
      {/* Contenedor del formulario */}
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-green-200">
        <h1 className="text-2xl font-bold text-green-800 mb-6 text-center">Iniciar sesión</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              placeholder="correo@comunal.cl"
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login