import { useState } from "react"

function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState([
    { paciente: "Juana Pérez", medicamento: "Paracetamol", cantidad: 2, fecha: "2025-06-19" },
    { paciente: "Mario Soto", medicamento: "Ibuprofeno", cantidad: 1, fecha: "2025-06-18" }
  ])

  const [nuevaSolicitud, setNuevaSolicitud] = useState({
    paciente: "",
    medicamento: "",
    cantidad: "",
    fecha: ""
  })

  const [mensaje, setMensaje] = useState("")

  const handleChange = e => {
    setNuevaSolicitud({ ...nuevaSolicitud, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!nuevaSolicitud.paciente || !nuevaSolicitud.medicamento || !nuevaSolicitud.cantidad || !nuevaSolicitud.fecha) {
      setMensaje("Por favor, completa todos los campos.")
      return
    }

    setSolicitudes([...solicitudes, nuevaSolicitud])
    setNuevaSolicitud({ paciente: "", medicamento: "", cantidad: "", fecha: "" })
    setMensaje("✅ Solicitud registrada con éxito.")
    setTimeout(() => setMensaje(""), 3000)
  }

  return (
    <div className="p-6 max-w-5xl mx-auto text-blue-900">
      <h2 className="text-3xl font-bold mb-6">Solicitudes de Medicamentos</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-lg shadow mb-8 grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="paciente"
          placeholder="Nombre del paciente"
          value={nuevaSolicitud.paciente}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <input
          type="text"
          name="medicamento"
          placeholder="Medicamento solicitado"
          value={nuevaSolicitud.medicamento}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          value={nuevaSolicitud.cantidad}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <input
          type="date"
          name="fecha"
          value={nuevaSolicitud.fecha}
          onChange={handleChange}
          className="p-3 border rounded"
        />

        <button
          type="submit"
          className="col-span-2 bg-green-700 hover:bg-green-800 text-white py-2 rounded font-semibold"
        >
          Crear solicitud
        </button>
      </form>

      {/* Alerta */}
      {mensaje && (
        <div className="mb-4 text-center text-sm font-medium text-green-700 bg-green-100 px-4 py-2 rounded">
          {mensaje}
        </div>
      )}

      {/* Tabla */}
      <table className="w-full table-auto border border-blue-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border">Paciente</th>
            <th className="p-2 border">Medicamento</th>
            <th className="p-2 border">Cantidad</th>
            <th className="p-2 border">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((s, idx) => (
            <tr key={idx} className="text-center hover:bg-blue-50">
              <td className="p-2 border">{s.paciente}</td>
              <td className="p-2 border">{s.medicamento}</td>
              <td className="p-2 border">{s.cantidad}</td>
              <td className="p-2 border">{s.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Solicitudes