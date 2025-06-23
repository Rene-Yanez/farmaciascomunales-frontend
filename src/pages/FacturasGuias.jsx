import { useState } from "react";

function FacturasGuias() {
  const [facturas, setFacturas] = useState([]);
  const [form, setForm] = useState({
    numero: "",
    tipo: "factura",
    fecha: "",
    proveedor: "",
    monto: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFacturas([...facturas, form]);
    setForm({ numero: "", tipo: "factura", fecha: "", proveedor: "", monto: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Carga de Facturas y Guías de Despacho
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            name="numero"
            placeholder="Número de documento"
            value={form.numero}
            onChange={handleChange}
            className="border border-blue-300 p-2 rounded"
            required
          />
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className="border border-blue-300 p-2 rounded"
          >
            <option value="factura">Factura</option>
            <option value="guia">Guía de Despacho</option>
          </select>
          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            className="border border-blue-300 p-2 rounded"
            required
          />
          <input
            type="text"
            name="proveedor"
            placeholder="Proveedor"
            value={form.proveedor}
            onChange={handleChange}
            className="border border-blue-300 p-2 rounded"
            required
          />
          <input
            type="number"
            name="monto"
            placeholder="Monto"
            value={form.monto}
            onChange={handleChange}
            className="border border-blue-300 p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition md:col-span-2"
          >
            Cargar documento
          </button>
        </form>

        <h2 className="text-lg font-semibold text-blue-700 mb-2">Documentos cargados</h2>
        <table className="w-full border border-blue-200 text-sm">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2 border">Número</th>
              <th className="p-2 border">Tipo</th>
              <th className="p-2 border">Fecha</th>
              <th className="p-2 border">Proveedor</th>
              <th className="p-2 border">Monto</th>
            </tr>
          </thead>
          <tbody>
            {facturas.map((f, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{f.numero}</td>
                <td className="p-2 border">{f.tipo}</td>
                <td className="p-2 border">{f.fecha}</td>
                <td className="p-2 border">{f.proveedor}</td>
                <td className="p-2 border">${f.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FacturasGuias;