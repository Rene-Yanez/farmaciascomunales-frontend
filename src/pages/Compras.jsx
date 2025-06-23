import { useState } from "react"

function Compras() {
  const [filtroProducto, setFiltroProducto] = useState("")
  const [filtroProveedor, setFiltroProveedor] = useState("")
  const [filtroTipo, setFiltroTipo] = useState("")
  const [filtroDesde, setFiltroDesde] = useState("")
  const [filtroHasta, setFiltroHasta] = useState("")

  const compras = [
    { producto: "Paracetamol", proveedor: "Lab Chile", cantidad: 100, fecha: "2024-06-01", tipo: "Factura" },
    { producto: "Ibuprofeno", proveedor: "Medifarma", cantidad: 50, fecha: "2024-06-03", tipo: "Nota de crédito" },
    { producto: "Amoxicilina", proveedor: "Salcobrand", cantidad: 80, fecha: "2024-06-05", tipo: "Factura" },
    { producto: "Omeprazol", proveedor: "Lab Chile", cantidad: 60, fecha: "2024-06-07", tipo: "Factura" },
  ]

  const comprasFiltradas = compras.filter((c) => {
    const fechaCompra = new Date(c.fecha)
    const desde = filtroDesde ? new Date(filtroDesde) : null
    const hasta = filtroHasta ? new Date(filtroHasta) : null

    return (
      c.producto.toLowerCase().includes(filtroProducto.toLowerCase()) &&
      c.proveedor.toLowerCase().includes(filtroProveedor.toLowerCase()) &&
      (!filtroTipo || c.tipo === filtroTipo) &&
      (!desde || fechaCompra >= desde) &&
      (!hasta || fechaCompra <= hasta)
    )
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">Gestión de Compras</h1>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Filtrar por producto"
            value={filtroProducto}
            onChange={(e) => setFiltroProducto(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Filtrar por proveedor"
            value={filtroProveedor}
            onChange={(e) => setFiltroProveedor(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
          <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="">Todos los documentos</option>
            <option value="Factura">Factura</option>
            <option value="Nota de crédito">Nota de crédito</option>
          </select>
          <input
            type="date"
            value={filtroDesde}
            onChange={(e) => setFiltroDesde(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="date"
            value={filtroHasta}
            onChange={(e) => setFiltroHasta(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">+ Agregar compra</button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto rounded-md shadow-md">
          <table className="w-full border text-left bg-white">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-4 py-2">Producto</th>
                <th className="px-4 py-2">Proveedor</th>
                <th className="px-4 py-2">Cantidad</th>
                <th className="px-4 py-2">Fecha</th>
                <th className="px-4 py-2">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {comprasFiltradas.map((c, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">{c.producto}</td>
                  <td className="px-4 py-2">{c.proveedor}</td>
                  <td className="px-4 py-2">{c.cantidad}</td>
                  <td className="px-4 py-2">{c.fecha}</td>
                  <td className="px-4 py-2">{c.tipo}</td>
                </tr>
              ))}
              {comprasFiltradas.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                    No se encontraron compras.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Compras