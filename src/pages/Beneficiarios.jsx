import { useState } from "react"

function Beneficiarios() {
  const [nombre, setNombre] = useState("")
  const [rut, setRut] = useState("")
  const [fechaNacimiento, setFechaNacimiento] = useState("")
  const [direccion, setDireccion] = useState("")
  const [lista, setLista] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !rut || !fechaNacimiento || !direccion) return

    setLista([
      ...lista,
      { nombre, rut, fechaNacimiento, direccion }
    ])

    setNombre("")
    setRut("")
    setFechaNacimiento("")
    setDireccion("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">Gestión de Beneficiarios</h1>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border border-blue-300 px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="RUT"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            className="border border-blue-300 px-4 py-2 rounded"
          />
          <input
            type="date"
            placeholder="Fecha de nacimiento"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            className="border border-blue-300 px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="border border-blue-300 px-4 py-2 rounded"
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Agregar beneficiario
            </button>
          </div>
        </form>

        {/* Tabla de beneficiarios */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-100 text-blue-800 text-left text-sm">
              <th className="p-2 border">Nombre</th>
              <th className="p-2 border">RUT</th>
              <th className="p-2 border">Nacimiento</th>
              <th className="p-2 border">Dirección</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((b, i) => (
              <tr key={i} className="text-sm border-t">
                <td className="p-2 border">{b.nombre}</td>
                <td className="p-2 border">{b.rut}</td>
                <td className="p-2 border">{b.fechaNacimiento}</td>
                <td className="p-2 border">{b.direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Beneficiarios