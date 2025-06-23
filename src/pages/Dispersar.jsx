import { useState } from "react"

function Dispersar() {
  const [seleccionados, setSeleccionados] = useState([])

  const productos = [
    { id: 1, nombre: "Paracetamol 500mg" },
    { id: 2, nombre: "Ibuprofeno 400mg" },
    { id: 3, nombre: "Amoxicilina 250mg" },
    { id: 4, nombre: "Vitamina C 1000mg" }
  ]

  const toggleSeleccion = (id) => {
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const handleDispersar = () => {
    if (seleccionados.length === 0) return alert("Selecciona al menos un producto")
    alert(`Productos dispersados: ${seleccionados.map(id => productos.find(p => p.id === id).nombre).join(", ")}`)
    setSeleccionados([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md border border-blue-100">
        <h1 className="text-xl font-bold text-blue-900 mb-4">Dispersar productos</h1>
        <p className="text-sm text-blue-800 mb-6">Selecciona los productos que deseas dispersar a otra unidad o farmacia.</p>

        <ul className="space-y-3 mb-6">
          {productos.map((producto) => (
            <li key={producto.id} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={seleccionados.includes(producto.id)}
                onChange={() => toggleSeleccion(producto.id)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-blue-800">{producto.nombre}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleDispersar}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition font-semibold"
        >
          Dispersar selección
        </button>
      </div>
    </div>
  )
}

export default Dispersar