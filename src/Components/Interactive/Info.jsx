import { AiOutlineInfoCircle } from "react-icons/ai";
import { Button } from "@/shadcn/components/ui/button.jsx";

const Info = ({ props }) => {
    const iconStyling = "text-orange-400 hover:text-orange-500 hover:cursor-pointer transition duration-300 ease-in-out";

    return (
        <Button size={'icon'} className={"bg-transparent hover:bg-transparent"} {...props}>
            <AiOutlineInfoCircle className={`${iconStyling} text-neutral-400`} size={"1.7em"}/>
        </Button>
    );
};

export default Info;
