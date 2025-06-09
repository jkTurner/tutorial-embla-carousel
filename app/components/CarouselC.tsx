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

const CarouselC = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <div>
            <div className="flex w-full justify-between items-center">
                <h2 className="mb-4">Added Arrow Navigation</h2>
                <div className="flex items-center gap-4 text-xl">
                    <button onClick={scrollPrev}>&lt;</button>
                    <button onClick={scrollNext}>&gt;</button>
                </div>
            </div>

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

export default CarouselC;