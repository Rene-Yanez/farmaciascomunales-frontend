import { useState } from "react"

function Fraccionamiento() {
  const [producto, setProducto] = useState("")
  const [cantidadOriginal, setCantidadOriginal] = useState("")
  const [cantidadFraccionada, setCantidadFraccionada] = useState("")
  const [mensaje, setMensaje] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!producto || !cantidadOriginal || !cantidadFraccionada) {
      setMensaje("⚠️ Todos los campos son obligatorios")
      return
    }
    setMensaje(`✅ Producto "${producto}" fraccionado exitosamente`)
    setProducto("")
    setCantidadOriginal("")
    setCantidadFraccionada("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">Fraccionamiento de productos</h1>

        {mensaje && (
          <div className="bg-blue-100 text-blue-700 p-3 mb-4 rounded text-sm text-center">
            {mensaje}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-blue-700">Producto</label>
            <input
              type="text"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ej: Paracetamol 500mg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Cantidad original</label>
            <input
              type="number"
              value={cantidadOriginal}
              onChange={(e) => setCantidadOriginal(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ej: 10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700">Cantidad fraccionada</label>
            <input
              type="number"
              value={cantidadFraccionada}
              onChange={(e) => setCantidadFraccionada(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ej: 1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Registrar fraccionamiento
          </button>
        </form>
      </div>
    </div>
  )
}

export default Fraccionamiento