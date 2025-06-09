import Image from "next/image";

interface SlideProps {
    city: string;
    image: string;
    photographer: string;
}

const Slide = ({ city, image, photographer }: SlideProps ) => {
    return (
        <div className="flex w-full h-full bg-slate-900">
            <div className="flex flex-col gap-2 w-[50%] justify-center items-center">
                <h2 className="font-bold text-4xl uppercase text-white">{city}</h2>
                <span>By {photographer}</span>
            </div>
            <div className="flex w-[50%] relative">
                <Image
                    src={image}
                    alt={city}
                    fill
                    priority
                    className="object-cover overflow-hidden"
                />
            </div>
        </div>
    )
}

export default Slide;