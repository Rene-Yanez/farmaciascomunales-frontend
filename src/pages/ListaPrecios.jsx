import { useState } from "react"

function ListaPrecios() {
  const [precios, setPrecios] = useState([
    { id: 1, nombre: "Paracetamol", precio: 500 },
    { id: 2, nombre: "Ibuprofeno", precio: 850 },
    { id: 3, nombre: "Amoxicilina", precio: 1500 },
  ])

  const actualizarPrecio = (id) => {
    const nuevoPrecio = prompt("Ingrese nuevo precio:")
    if (!nuevoPrecio || isNaN(nuevoPrecio)) return

    setPrecios((prev) =>
      prev.map((p) => (p.id === id ? { ...p, precio: parseInt(nuevoPrecio) } : p))
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white px-4 py-12 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg border border-yellow-200">
        <h1 className="text-2xl font-bold text-yellow-800 mb-6 text-center">Lista de Precios</h1>

        <table className="w-full text-sm text-left text-gray-700 border border-gray-300 rounded">
          <thead className="text-xs text-white uppercase bg-yellow-600">
            <tr>
              <th className="px-4 py-3">Producto</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Acción</th>
            </tr>
          </thead>
          <tbody>
            {precios.map((producto) => (
              <tr key={producto.id} className="bg-white border-b hover:bg-yellow-50">
                <td className="px-4 py-2">{producto.nombre}</td>
                <td className="px-4 py-2">${producto.precio}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => actualizarPrecio(producto.id)}
                    className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700"
                  >
                    Cambiar Precio
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListaPrecios