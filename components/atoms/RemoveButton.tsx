import { MainButton } from "./MainButton";

interface RemoveButtonProps {
    onClick: () => void;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => {

    return (
        <MainButton
            ariaLabel={`Remove filter`}
            variant="gray"
            size="small"
            onClick={onClick}
        >
            X
        </MainButton>
    )
}

