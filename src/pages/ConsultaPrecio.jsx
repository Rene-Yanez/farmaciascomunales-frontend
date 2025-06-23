import { useState } from "react"

function ConsultaPrecio() {
  const [busqueda, setBusqueda] = useState("")
  const [resultado, setResultado] = useState(null)

  const productosMock = [
    { nombre: "Paracetamol 500mg", precio: "$500", stock: "Disponible" },
    { nombre: "Ibuprofeno 400mg", precio: "$850", stock: "Pocas unidades" },
    { nombre: "Amoxicilina 250mg", precio: "$1.200", stock: "Sin stock" },
    { nombre: "Omeprazol 20mg", precio: "$1.000", stock: "Disponible" },
  ]

  const handleBuscar = () => {
    const productoEncontrado = productosMock.find((p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
    setResultado(productoEncontrado || { nombre: "Producto no encontrado", precio: "-", stock: "-" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Consulta de Precio de Productos
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Nombre del producto"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="flex-1 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleBuscar}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg transition"
          >
            Buscar
          </button>
        </div>

        {resultado && (
          <div className="bg-blue-100 text-blue-900 p-4 rounded text-sm space-y-1">
            <p><strong>Producto:</strong> {resultado.nombre}</p>
            <p><strong>Precio:</strong> {resultado.precio}</p>
            <p><strong>Stock:</strong> {resultado.stock}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ConsultaPrecio