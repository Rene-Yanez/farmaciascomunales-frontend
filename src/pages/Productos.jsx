import { useState } from 'react'

function Productos() {
  const [busqueda, setBusqueda] = useState('')

  // Productos ficticios por ahora
  const productos = [
    { id: 1, nombre: 'Paracetamol 500mg', stock: 120, precio: 500, categoria: 'Analgésico' },
    { id: 2, nombre: 'Ibuprofeno 400mg', stock: 75, precio: 700, categoria: 'Antiinflamatorio' },
    { id: 3, nombre: 'Vitamina C', stock: 200, precio: 450, categoria: 'Suplemento' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-5xl mx-auto text-blue-900">

        <h1 className="text-3xl font-bold mb-6 text-center">Listado de Productos</h1>

        {/* Buscador */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-full border border-blue-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white text-sm text-left">
            <thead className="bg-blue-100 text-blue-800 font-semibold">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Precio ($)</th>
                <th className="px-6 py-3">Categoría</th>
                <th className="px-6 py-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id} className="border-b hover:bg-blue-50">
                  <td className="px-6 py-3">{producto.id}</td>
                  <td className="px-6 py-3">{producto.nombre}</td>
                  <td className="px-6 py-3">{producto.stock}</td>
                  <td className="px-6 py-3">${producto.precio}</td>
                  <td className="px-6 py-3">{producto.categoria}</td>
                  <td className="px-6 py-3 text-center">
                    <button className="text-blue-600 hover:underline mr-2">Editar</button>
                    <button className="text-red-600 hover:underline">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Productos