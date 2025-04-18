"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setIsMobile } from "@/lib/features/skips/skipsSlice";

export function ResponsiveHandler({
  isServerSide = typeof window === "undefined",
} = {}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isServerSide) return;
    const updateIsMobile = () => {
      dispatch(setIsMobile(window.innerWidth <= 768));
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, [dispatch, isServerSide]);
  return null;
}
