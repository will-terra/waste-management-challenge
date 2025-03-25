"use client"
import { Dialog } from '@base-ui-components/react/dialog';
import { MainButton } from '../atoms/MainButton';
import { useAppDispatch } from '@/lib/hooks';
import { setSelectedSkip } from '@/lib/features/skips/skipsSlice';
import { resetFiltersThunk } from '@/lib/features/filter/filterSlice';

interface MainDialogProps {
    size: number;
}

export const MainDialog = ({ size }: MainDialogProps) => {
    const dispatch = useAppDispatch();
    const handleOnClick = () => {
        dispatch(setSelectedSkip(null));
        dispatch(resetFiltersThunk());
    };

    const handleOnKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleOnClick();
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger tabIndex={1}>
                <MainButton ariaLabel={`Continue with ${size} Yard selected Skip`} variant="blue" size="large">
                    Continue
                </MainButton>
            </Dialog.Trigger>
            <Dialog.Portal keepMounted>
                <Dialog.Backdrop className="fixed inset-0 bg-black opacity-20 transition-opacity duration-150" />
                <Dialog.Popup className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/10 md:w-120 max-w-120 mt-[-2rem] p-6 rounded-lg border-4 border-lightBlue bg-secondaryDarkGray text-white transition-all duration-150">
                    <Dialog.Title className="mt-2 text-2xl font-semibold text-center">Congratulations</Dialog.Title>
                    <Dialog.Description className="mt-8 text-xl max-w-100">
                        You have finished the process of selecting your skip.
                    </Dialog.Description>
                    <div className="mt-4 flex justify-end">
                        <Dialog.Close onKeyDown={handleOnKeyDown}>
                            <MainButton ariaLabel="Close dialog" variant="gray" size="large" onClick={handleOnClick}>
                                Close
                            </MainButton>
                        </Dialog.Close>
                    </div>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root >
    );
}