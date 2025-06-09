import Carousel from "./components/Carousel";
import CarouselB from "./components/CarouselB";
import CarouselC from "./components/CarouselC";
import CarouselD from "./components/CarouselD";


export default function Home() {
	return (
		<div className="flex flex-col gap-[40px] w-full max-w-[1280px] mx-auto py-[40px]">
			<Carousel />
			<CarouselB />
			<CarouselC />
			<CarouselD />
		</div>
	);
}
