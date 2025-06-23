import { useState } from "react"

function Caja() {
  const [montoInicial, setMontoInicial] = useState(0)
  const [ventas, setVentas] = useState(0)
  const [egresos, setEgresos] = useState(0)

  const totalCaja = parseFloat(montoInicial) + parseFloat(ventas) - parseFloat(egresos)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">Módulo de Caja</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-700">Monto inicial</label>
            <input
              type="number"
              value={montoInicial}
              onChange={(e) => setMontoInicial(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Ventas del día</label>
            <input
              type="number"
              value={ventas}
              onChange={(e) => setVentas(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Egresos</label>
            <input
              type="number"
              value={egresos}
              onChange={(e) => setEgresos(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-blue-800">
            Total en caja: <span className="text-green-600">${totalCaja.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Caja