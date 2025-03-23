"use client";
import Image from "next/image";
import pinIcon from "@/public/pin.svg";
import trashIcon from "@/public/trash.svg";
import truckIcon from "@/public/truck.svg";
import shieldIcon from "@/public/shield.svg";
import calendarIcon from "@/public/calendar.svg";
import cardIcon from "@/public/card.svg";
import { useAppSelector } from "@/lib/hooks";

export const Nav = () => {
  const isMobile = useAppSelector((state) => state.skips.isMobile);

  return (
    <div className="flex bg-darkGray justify-center align-center h-16">
      <div className="flex gap-2 items-center">
        {!isMobile && <>
          <button className={prevButtonStyles}>
            <Image src={pinIcon} alt="pin" width={24} height={24} />
            <span className="ml-2 text-white">Postcode</span>
          </button>
          <div className="w-16 h-px bg-lightBlue"></div>

          <button className={prevButtonStyles}>
            <Image src={trashIcon} alt="pin" width={24} height={24} />
            <span className="ml-2 text-white">Waste Type</span>
          </button>
        </>}
        <div className="w-16 h-px bg-lightGray"></div>
        <button className={prevButtonStyles}>
          <Image src={truckIcon} alt="pin" width={24} height={24} />
          <span className="ml-2 text-white">Select Skip</span>
        </button>
        <div className="w-16 h-px bg-lightGray"></div>
        {!isMobile && <>
          <button disabled={true} className={nextButtonStyles}>
            <Image src={shieldIcon} alt="pin" width={24} height={24} />
            <span className="ml-2 text-white">Permit Check</span>
          </button>
          <div className="w-16 h-px bg-lightGray"></div>
          <button disabled={true} className={nextButtonStyles}>
            <Image src={calendarIcon} alt="pin" width={24} height={24} />
            <span className="ml-2 text-white">Choose Date</span>
          </button>
          <div className="w-16 h-px bg-lightGray"></div>
          <button disabled={true} className={nextButtonStyles}>
            <Image src={cardIcon} alt="pin" width={24} height={24} />
            <span className="ml-2 text-white">Payment</span>
          </button>
        </>}
      </div>
    </div>);
};

const prevButtonStyles = "flex items-center text-blue cursor-pointer"
const nextButtonStyles = "flex items-center text-white/60 cursor-not-allowed opacity-50"
