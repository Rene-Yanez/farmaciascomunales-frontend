import { useState } from "react"

const datosIniciales = [
  { id: 1, producto: "Paracetamol 500mg", bodega: "Central", stock: 25, alerta: 10 },
  { id: 2, producto: "Ibuprofeno 400mg", bodega: "Sucursal A", stock: 8, alerta: 15 },
  { id: 3, producto: "Amoxicilina 500mg", bodega: "Central", stock: 60, alerta: 20 },
  { id: 4, producto: "Loratadina", bodega: "Sucursal B", stock: 4, alerta: 5 },
  { id: 5, producto: "Vitamina C", bodega: "Sucursal A", stock: 3, alerta: 10 }
]

function StockInventarios() {
  const [bodegaSeleccionada, setBodegaSeleccionada] = useState("Todas")

  const bodegas = ["Todas", ...new Set(datosIniciales.map(item => item.bodega))]

  const datosFiltrados = bodegaSeleccionada === "Todas"
    ? datosIniciales
    : datosIniciales.filter(item => item.bodega === bodegaSeleccionada)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">Stock e Inventarios</h1>

      <div className="max-w-md mx-auto mb-4">
        <label className="block text-sm font-medium text-blue-700 mb-1">Filtrar por bodega:</label>
        <select
          value={bodegaSeleccionada}
          onChange={(e) => setBodegaSeleccionada(e.target.value)}
          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {bodegas.map((bodega, index) => (
            <option key={index} value={bodega}>{bodega}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md border border-blue-200">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="py-2 px-4 text-left">Producto</th>
              <th className="py-2 px-4 text-left">Bodega</th>
              <th className="py-2 px-4 text-left">Stock actual</th>
              <th className="py-2 px-4 text-left">Alerta</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.map((item) => (
              <tr key={item.id} className={item.stock < item.alerta ? "bg-red-50" : ""}>
                <td className="py-2 px-4">{item.producto}</td>
                <td className="py-2 px-4">{item.bodega}</td>
                <td className="py-2 px-4">{item.stock}</td>
                <td className="py-2 px-4">{item.alerta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StockInventarios