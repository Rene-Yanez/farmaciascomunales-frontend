import { useState } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function Informes() {
  const [seccionActiva, setSeccionActiva] = useState("grafico")

  // Datos para gráfico
  const datos = {
    labels: ["Enero", "Febrero", "Marzo", "Abril"],
    datasets: [
      {
        label: "Solicitudes por mes",
        data: [25, 40, 32, 28],
        backgroundColor: "rgba(34,197,94,0.8)"
      }
    ]
  }

  // Datos de tabla
  const informes = [
    { id: 'INF001', titulo: 'Stock Mayo 2025', fecha: '2025-05-31', tipo: 'Stock', estado: 'Generado' },
    { id: 'INF002', titulo: 'Solicitudes Pendientes', fecha: '2025-06-01', tipo: 'Solicitudes', estado: 'Revisión' },
    { id: 'INF003', titulo: 'Usuarios Activos', fecha: '2025-06-02', tipo: 'Usuarios', estado: 'Completado' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white px-4 py-10 text-yellow-900">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-yellow-200">

        <h1 className="text-3xl font-bold mb-8 text-center">Informes</h1>

        {/* Botones de navegación */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              seccionActiva === "grafico"
                ? "bg-yellow-500 text-white"
                : "bg-yellow-100 hover:bg-yellow-200"
            }`}
            onClick={() => setSeccionActiva("grafico")}
          >
            Gráfica Anual
          </button>

          <button
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              seccionActiva === "tabla"
                ? "bg-yellow-500 text-white"
                : "bg-yellow-100 hover:bg-yellow-200"
            }`}
            onClick={() => setSeccionActiva("tabla")}
          >
            Revisar Informes
          </button>
        </div>

        {/* Contenido dinámico */}
        {seccionActiva === "grafico" && (
          <>
            <p className="text-center text-sm mb-6 text-yellow-700">
              Visualización de solicitudes de medicamentos por mes (datos simulados)
            </p>
            <Bar data={datos} options={{
              responsive: true,
              plugins: { legend: { position: 'top' } },
              scales: {
                y: { beginAtZero: true, ticks: { stepSize: 10 } }
              }
            }} />
          </>
        )}

        {seccionActiva === "tabla" && (
          <>
            <p className="text-center text-sm mb-6 text-yellow-700">
              Informes generados por el sistema
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border">
                <thead className="bg-yellow-100 text-yellow-800 font-semibold">
                  <tr>
                    <th className="px-6 py-3 border">ID</th>
                    <th className="px-6 py-3 border">Título</th>
                    <th className="px-6 py-3 border">Fecha</th>
                    <th className="px-6 py-3 border">Tipo</th>
                    <th className="px-6 py-3 border">Estado</th>
                    <th className="px-6 py-3 border text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {informes.map((i) => (
                    <tr key={i.id} className="hover:bg-yellow-50 border-t">
                      <td className="px-6 py-2 border">{i.id}</td>
                      <td className="px-6 py-2 border">{i.titulo}</td>
                      <td className="px-6 py-2 border">{i.fecha}</td>
                      <td className="px-6 py-2 border">{i.tipo}</td>
                      <td className="px-6 py-2 border">{i.estado}</td>
                      <td className="px-6 py-2 border text-center">
                        <button className="text-yellow-600 hover:underline mr-2">Ver</button>
                        <button className="text-blue-600 hover:underline">Descargar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Informes