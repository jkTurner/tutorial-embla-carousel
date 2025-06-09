'use client'
import useEmblaCarousel from "embla-carousel-react";
import Slide from "./Slide";
import { useEffect, useState } from "react";

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

const CarouselD = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const scrollTo = (index: number) => emblaApi?.scrollTo(index);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect); // listen to slide changes
        onSelect(); // run it once on mount
    }, [emblaApi])

    return (
        <div>
            <div className="flex w-full justify-between items-center">
                <h2 className="mb-4">Added Dot Navigation</h2>
                <div className="flex items-center gap-4 text-xl">
                    <button onClick={scrollPrev}>&lt;</button>
                    {slideInfo.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`w-3 h-3 ${
                                i === selectedIndex ? 'bg-teal-300' : 'bg-gray-700'
                            }`}
                        />
                    ))}
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

export default CarouselD;