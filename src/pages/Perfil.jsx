function Perfil() {
  // Usuario simulado (igual que en Navbar)
  const usuario = {
    nombre: "Violeta Parra",
    correo: "violeta@farmaciascomunales.cl",
    rol: "Administrador General"
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 text-blue-900 bg-white shadow rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Perfil de Usuario</h2>

      <div className="flex flex-col items-center gap-6">

        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(usuario.nombre)}&background=0D8ABC&color=fff`}
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full shadow-md"
        />

        <div className="w-full text-left space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Nombre:</h3>
            <p>{usuario.nombre}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Correo:</h3>
            <p>{usuario.correo}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Rol:</h3>
            <p>{usuario.rol}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil