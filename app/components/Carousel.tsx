'use client'
import useEmblaCarousel from "embla-carousel-react";

const Carousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <div>
            <h2 className="mb-4">Basic Setup</h2>

            {/* Embla Scope */}
            <div ref={emblaRef} className="embla">
                <div className="embla__container h-[450px]">
                    <div className="embla__slide bg-cyan-700 flex justify-center items-center">Slide 1</div>
                    <div className="embla__slide bg-cyan-800 flex justify-center items-center">Slide 2</div>
                    <div className="embla__slide bg-cyan-900 flex justify-center items-center">Slide 3</div>
                </div>
            </div>
            {/* --------------------------------- */}
            
        </div>
    )
}

export default Carousel;