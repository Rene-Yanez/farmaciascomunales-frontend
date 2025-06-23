import { useState } from "react"

function AlertasRetiro() {
  const [alertas] = useState([
    { nombre: "Pedro Páramo", medicamento: "Clonazepam", fechaRetiro: "2025-06-25" },
    { nombre: "Laura Palma", medicamento: "Sertralina", fechaRetiro: "2025-06-18" },
    { nombre: "Manuel Ríos", medicamento: "Diazepam", fechaRetiro: "2025-06-10" }
  ])

  const hoy = new Date()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-10 text-blue-900">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-blue-100">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">
          Alertas de Retiro de Medicamentos Controlados
        </h1>

        <table className="min-w-full divide-y divide-blue-200 text-sm">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Paciente</th>
              <th className="px-4 py-2 text-left font-semibold">Medicamento</th>
              <th className="px-4 py-2 text-left font-semibold">Fecha esperada</th>
              <th className="px-4 py-2 text-left font-semibold">Estado</th>
            </tr>
          </thead>
          <tbody>
            {alertas.map((a, i) => {
              const fecha = new Date(a.fechaRetiro)
              const diasDiff = Math.ceil((fecha - hoy) / (1000 * 60 * 60 * 24))

              let estado = "✅ En rango"
              let color = "text-green-600"
              if (diasDiff <= 3 && diasDiff >= 0) {
                estado = "⚠️ Próximo retiro"
                color = "text-yellow-600"
              } else if (diasDiff < 0) {
                estado = "❌ Atrasado"
                color = "text-red-600"
              }

              return (
                <tr key={i} className="hover:bg-blue-50">
                  <td className="px-4 py-2">{a.nombre}</td>
                  <td className="px-4 py-2">{a.medicamento}</td>
                  <td className="px-4 py-2">{a.fechaRetiro}</td>
                  <td className={`px-4 py-2 font-semibold ${color}`}>{estado}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AlertasRetiro