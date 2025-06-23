function Alerta({ tipo = "info", mensaje }) {
  const estilos = {
    exito: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    advertencia: "bg-yellow-100 text-yellow-800 border-yellow-300",
    info: "bg-blue-100 text-blue-800 border-blue-300"
  }

  const iconos = {
    exito: "✔️",
    error: "❌",
    advertencia: "⚠️",
    info: "ℹ️"
  }

  return (
    <div className={`flex items-center gap-3 border rounded-md p-4 text-sm shadow-sm ${estilos[tipo]}`}>
      <span className="text-xl">{iconos[tipo]}</span>
      <span>{mensaje}</span>
    </div>
  )
}

export default Alerta