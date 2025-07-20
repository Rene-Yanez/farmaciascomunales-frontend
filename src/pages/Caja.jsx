import { useEffect, useState } from "react"
import { apiFetch } from "../services/api"

function Caja() {
  const [montoInicial, setMontoInicial] = useState(0)
  const [ventas, setVentas] = useState(0)
  const [egresos, setEgresos] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const totalCaja = parseFloat(montoInicial) + parseFloat(ventas) - parseFloat(egresos)

  //  Cargar datos al iniciar
  useEffect(() => {
    apiFetch("caja", "/resumen")
      .then(data => {
        setVentas(data.ventas || 0)
        setEgresos(data.egresos || 0)
        setLoading(false)
      })
      .catch(err => {
        setError("Error al cargar datos de caja")
        setLoading(false)
      })
  }, [])

  const guardarMontoInicial = () => {
    apiFetch("caja", "/apertura", {
      method: "POST",
      body: JSON.stringify({ montoInicial }),
    })
      .then(() => alert("Monto inicial guardado"))
      .catch(() => alert("Error al guardar el monto inicial"))
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-blue-600">Cargando...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">Módulo de Caja</h1>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

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
              readOnly
              className="w-full px-4 py-2 border border-gray-200 bg-gray-100 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Egresos</label>
            <input
              type="number"
              value={egresos}
              readOnly
              className="w-full px-4 py-2 border border-gray-200 bg-gray-100 rounded-lg"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-blue-800">
            Total en caja: <span className="text-green-600">${totalCaja.toFixed(2)}</span>
          </p>
          <button
            onClick={guardarMontoInicial}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Guardar monto inicial
          </button>
        </div>
      </div>
    </div>
  )
}

export default Caja