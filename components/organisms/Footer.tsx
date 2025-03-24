"use client"
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { MainButton } from '../atoms/MainButton'
import { setSelectedSkip } from '@/lib/features/skips/skipsSlice'

export const Footer = () => {
    const selectedSkip = useAppSelector(state => state.skips.selectedSkip)
    const { size, price_before_vat } = selectedSkip || {}
    const dispatch = useAppDispatch()
    const handleOnClick = () => {
        dispatch(setSelectedSkip(null))
    }

    return (
        <>
            {selectedSkip && (
                <div className="fixed bottom-0 left-0 right-0 flex justify-end gap-10 bg-secondaryDarkGray border-t border-lightGray p-4 animate-slideUp z-50">
                    <div className="flex items-center gap-4">
                        <p className=" text-white text-2xl font-bold"> {size} Yard Skip</p>
                        <p className="text-4xl font-black text-lightBlue">£{price_before_vat}<span className="text-sm text-gray-400 ">per week</span></p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <MainButton ariaLabel="Cancel Skip Selection" variant="gray" size="large" className="px-4" onClick={handleOnClick}>Cancel</MainButton>
                        <MainButton ariaLabel={`Continue with ${size} Yard selected Skip`} variant="blue" size="large">Continue</MainButton>
                    </div>
                </div>
            )}
        </>
    )
}

