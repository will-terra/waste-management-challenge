"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { MainButton } from "../atoms/MainButton";
import { setSelectedSkip } from "@/lib/features/skips/skipsSlice";
import { MainDialog } from "../molecules/MainDialog";

export const Footer = () => {
  const selectedSkip = useAppSelector((state) => state.skips.selectedSkip);
  const { size, price_before_vat } = selectedSkip || {};
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    dispatch(setSelectedSkip(null));
  };

  return (
    <>
      {selectedSkip && (
        <footer className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row justify-end gap-4 md:gap-10 bg-secondaryDarkGray border-t border-lightGray py-3 px-4 animate-slideUp z-50">
          <div className="flex justify-center items-center text-center gap-4">
            <p className=" text-white text-2xl font-bold"> {size} Yard Skip</p>
            <p className="text-3xl md:text-4xl font-black text-secondaryLightBlue">
              £{price_before_vat}
              <span className="text-sm text-gray-400 ">per week</span>
            </p>
          </div>
          <div tabIndex={1} className="flex gap-4 items-center">
            <MainButton
              ariaLabel="Cancel Skip Selection"
              variant="gray"
              size="large"
              className="px-4"
              onClick={handleOnClick}
            >
              Cancel
            </MainButton>
            <MainDialog size={size!} />
          </div>
        </footer>
      )}
    </>
  );
};
