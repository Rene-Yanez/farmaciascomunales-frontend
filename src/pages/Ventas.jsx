import { useState } from "react"

const ventasSimuladas = [
  { id: 1, producto: "Paracetamol 500mg", cantidad: 3, total: 1500, fecha: "2025-06-18", vendedor: "Violeta Parra" },
  { id: 2, producto: "Ibuprofeno 400mg", cantidad: 2, total: 2000, fecha: "2025-06-19", vendedor: "Luis Jara" },
  { id: 3, producto: "Amoxicilina 250mg", cantidad: 1, total: 1000, fecha: "2025-06-20", vendedor: "Violeta Parra" },
  { id: 4, producto: "Vitamina C", cantidad: 5, total: 2500, fecha: "2025-06-20", vendedor: "Ana Tijoux" },
]

function Ventas() {
  const [busqueda, setBusqueda] = useState("")
  const [fechaDesde, setFechaDesde] = useState("")
  const [fechaHasta, setFechaHasta] = useState("")
  const [vendedor, setVendedor] = useState("")

  const ventasFiltradas = ventasSimuladas.filter((venta) => {
    const coincideProducto = venta.producto.toLowerCase().includes(busqueda.toLowerCase())
    const coincideVendedor = vendedor ? venta.vendedor === vendedor : true
    const enRangoFecha = (!fechaDesde || venta.fecha >= fechaDesde) && (!fechaHasta || venta.fecha <= fechaHasta)
    return coincideProducto && coincideVendedor && enRangoFecha
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Gestión de Ventas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar por producto"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="date"
          value={fechaDesde}
          onChange={(e) => setFechaDesde(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="date"
          value={fechaHasta}
          onChange={(e) => setFechaHasta(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <select
          value={vendedor}
          onChange={(e) => setVendedor(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="">Todos los vendedores</option>
          <option value="Violeta Parra">Violeta Parra</option>
          <option value="Luis Jara">Luis Jara</option>
          <option value="Ana Tijoux">Ana Tijoux</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm">
          <thead className="bg-blue-200 text-blue-900">
            <tr>
              <th className="px-4 py-2 text-left">Producto</th>
              <th className="px-4 py-2 text-left">Cantidad</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Vendedor</th>
            </tr>
          </thead>
          <tbody>
            {ventasFiltradas.map((venta) => (
              <tr key={venta.id} className="border-t">
                <td className="px-4 py-2">{venta.producto}</td>
                <td className="px-4 py-2">{venta.cantidad}</td>
                <td className="px-4 py-2">${venta.total}</td>
                <td className="px-4 py-2">{venta.fecha}</td>
                <td className="px-4 py-2">{venta.vendedor}</td>
              </tr>
            ))}
            {ventasFiltradas.length === 0 && (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                  No se encontraron ventas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
          + Agregar Venta
        </button>
      </div>
    </div>
  )
}

export default Ventas