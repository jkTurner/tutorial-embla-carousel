'use client'
import useEmblaCarousel from "embla-carousel-react";
import Slide from "./Slide";

const slideInfo = [
    {
        city: "tokyo",
        image: "/images/tokyo.jpg",
        photographer: "Willian Justen de Vasconcellos"
    },
    {
        city: "barcelona",
        image: "/images/barcelona.jpg",
        photographer: "Alina Shazka",
    },
    {
        city: "cairo",
        image: "/images/cairo.jpg",
        photographer: "Alex Azabache",
    }
]

const CarouselB = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <div>
            <h2 className="mb-4">Separated Slide Component Setup</h2>

            {/* Embla Scope */}
            <div ref={emblaRef} className="embla my-0">
                <div className="embla__container  h-[450px]">
                    {slideInfo.map((item) => (
                        <div key={item.city} className="embla__slide">
                            <Slide city={item.city} image={item.image} photographer={item.photographer} />
                        </div>
                    ))}
                </div>
            </div>
            {/* --------------------------------- */}

        </div>
    )
}

export default CarouselB;