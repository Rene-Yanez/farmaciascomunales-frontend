import { Link } from "react-router-dom"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import logoTextoVerde from "../assets/logoTextoVerde.png"
import carrusel1 from "../assets/Imagen-carrusel1.png"
import carrusel2 from "../assets/Imagen-carrusel2.png"
import carrusel3 from "../assets/Imagen-carrusel3.png"
import carrusel4 from "../assets/Imagen-carrusel4.png"

function Home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Botones principales */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link to="/usuarios" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Ir a Usuarios
          </Link>
          <Link to="/productos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Ver Productos
          </Link>
          <Link to="/solicitudes" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Solicitudes
          </Link>
          <Link to="/consultaprecio" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Consultar Precios
          </Link>
          <Link to="/beneficiarios" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Ver Beneficiarios
          </Link>
          <Link to="/stockinventarios" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Inventario
          </Link>
        </div>

        {/* Texto de bienvenida */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Bienvenido al Sistema de Farmacias Comunales
        </h1>

        {/* Carrusel estilo banner horizontal */}
        <div ref={sliderRef} className="keen-slider mx-auto mt-6 w-full max-w-3xl h-48 rounded-xl overflow-hidden shadow-md">
          <img src={carrusel1} className="keen-slider__slide object-cover w-full h-full" alt="Imagen 1" />
          <img src={carrusel2} className="keen-slider__slide object-cover w-full h-full" alt="Imagen 2" />
          <img src={carrusel3} className="keen-slider__slide object-cover w-full h-full" alt="Imagen 3" />
          <img src={carrusel4} className="keen-slider__slide object-cover w-full h-full" alt="Imagen 4" />
        </div>

        {/* Logo al final */}
        <img src={logoTextoVerde} alt="Logo Farmacias Comunales" className="w-64 mx-auto my-6" />
      </div>
    </div>
  )
}

export default Home