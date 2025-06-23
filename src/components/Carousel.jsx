import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect } from 'react'

import img1 from '../assets/Imagen-carrusel1.png'
import img2 from '../assets/Imagen-carrusel2.png'
import img3 from '../assets/Imagen-carrusel3.png'
import img4 from '../assets/Imagen-carrusel4.png'

function Carousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 3000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <div className="mx-auto mt-10">
      <div
        ref={sliderRef}
        className="keen-slider max-w-[160px] sm:max-w-[200px] aspect-square mx-auto rounded-xl overflow-hidden shadow-md"
      >
        <div className="keen-slider__slide">
          <img src={img1} alt="Imagen 1" className="w-full h-full object-cover" />
        </div>
        <div className="keen-slider__slide">
          <img src={img2} alt="Imagen 2" className="w-full h-full object-cover" />
        </div>
        <div className="keen-slider__slide">
          <img src={img3} alt="Imagen 3" className="w-full h-full object-cover" />
        </div>
        <div className="keen-slider__slide">
          <img src={img4} alt="Imagen 4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Carousel