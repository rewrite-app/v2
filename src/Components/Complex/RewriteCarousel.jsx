import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/shadcn/components/ui/carousel.jsx";
import TextContent from "@/Components/Text/TextContent.jsx";
import { keygen } from "@/api/keygen.js";
import Block from "@/Components/Core/Block.jsx";


// TODO - refactor
const RewriteCarousel = ({ blockData }) => {
    const basis = "basis-1/3 pl-";
    const renderCarouselItem = (block) => {
        return (
            <CarouselItem key={keygen()}>
                <div className="w-full h-full flex content-center flex-col justify-center">
                    <Block blockData={block}/>
                </div>
            </CarouselItem>
        );
    };

    return (
        <Carousel className={"my-4"}>
            <CarouselContent>
                {blockData.items.map(item => (
                    item.blocks.map(block => (
                        renderCarouselItem(block)
                    ))
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    );
};

export default RewriteCarousel;