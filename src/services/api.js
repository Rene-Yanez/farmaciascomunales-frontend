const baseUrls = {
  usuarios: import.meta.env.VITE_API_USUARIOS,
  beneficiarios: import.meta.env.VITE_API_BENEFICIARIOS,
  productos: import.meta.env.VITE_API_PRODUCTOS,
  stock: import.meta.env.VITE_API_STOCK,
  compras: import.meta.env.VITE_API_COMPRAS,
  ventas: import.meta.env.VITE_API_VENTAS,
  fraccionamiento: import.meta.env.VITE_API_FRACCIONAMIENTO,
  caja: import.meta.env.VITE_API_CAJA,
  dispersion: import.meta.env.VITE_API_DISPERSION,
  informes: import.meta.env.VITE_API_INFORMES,
  consultas: import.meta.env.VITE_API_CONSULTAS,
  configuraciones: import.meta.env.VITE_API_CONFIGURACIONES,
}

export async function apiFetch(servicio, endpoint, options = {}) {
  const baseUrl = baseUrls[servicio]
  if (!baseUrl) {
    throw new Error(Servicio desconocido: ${servicio})
  }
}

  const url = `${baseUrl}${endpoint.startsWith('/') ? endpoint : /${endpoint}}`
  const token = localStorage.getItem('token')


  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: Bearer ${token} }),
    ...(options.headers || {})
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(Error ${response.status}: ${errorText})
    }

    return await response.json()
  } catch (error) {
    console.error([apiFetch] Error al conectar con ${url}:, error.message)
    throw error
  }
}