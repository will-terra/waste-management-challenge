import { removeRadioFilter } from "@/lib/features/skips/skipsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { MainButton } from "./MainButton";

interface RemoveButtonProps {
    property: "allowedOnRoad";
}

export const RemoveButton = (props: RemoveButtonProps) => {
    const { property } = props;
    const dispatch = useAppDispatch();
    const handleRemoveFilter = () => {
        dispatch(removeRadioFilter({ property }));
    }
    return (
        <MainButton
            ariaLabel={`Remove filter`}
            variant="gray"
            size="small"
            onClick={() => handleRemoveFilter()}
        >
            X
        </MainButton>
    )
}

