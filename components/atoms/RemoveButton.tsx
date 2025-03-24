import Image from "next/image";
import { MainButton } from "./MainButton";
import trashIcon from "@/public/trash.svg";

interface RemoveButtonProps {
    onClick: () => void;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => {

    return (
        <MainButton
            ariaLabel={`Remove filter`}
            variant="gray"
            size="small"
            className="h-8"
            onClick={onClick}
        >
            <Image src={trashIcon} alt="remove" width={20} height={20} />
        </MainButton>
    )
}

