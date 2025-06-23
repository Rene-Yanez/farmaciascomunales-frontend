import { useState } from "react"

function HistorialPacientes() {
  const [rut, setRut] = useState("")
  const [resultados, setResultados] = useState([])

  const pacientesMock = [
    {
      rut: "12345678-9",
      nombre: "Juan Pérez",
      historial: [
        { fecha: "2024-03-01", medicamento: "Paracetamol 500mg", estado: "Retirado" },
        { fecha: "2024-04-15", medicamento: "Amoxicilina 250mg", estado: "Pendiente" },
      ],
    },
    {
      rut: "98765432-1",
      nombre: "María López",
      historial: [
        { fecha: "2024-02-20", medicamento: "Ibuprofeno 400mg", estado: "Retirado" },
      ],
    },
  ]

  const buscarHistorial = (e) => {
    e.preventDefault()
    const paciente = pacientesMock.find((p) => p.rut === rut)
    setResultados(paciente ? paciente.historial : [])
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">Historial de Pacientes</h1>

        <form onSubmit={buscarHistorial} className="flex gap-4 mb-6 justify-center">
          <input
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            placeholder="Ingrese RUT del paciente"
            className="px-4 py-2 border border-blue-300 rounded-lg w-2/3"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Buscar
          </button>
        </form>

        {resultados.length > 0 ? (
          <table className="w-full text-left border-t border-blue-200">
            <thead>
              <tr className="bg-blue-100 text-blue-800">
                <th className="px-4 py-2">Fecha</th>
                <th className="px-4 py-2">Medicamento</th>
                <th className="px-4 py-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((registro, index) => (
                <tr key={index} className="border-b border-blue-100">
                  <td className="px-4 py-2">{registro.fecha}</td>
                  <td className="px-4 py-2">{registro.medicamento}</td>
                  <td className="px-4 py-2">{registro.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-blue-700">No hay historial disponible para este RUT.</p>
        )}
      </div>
    </div>
  )
}

export default HistorialPacientes