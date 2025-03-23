interface MainButtonProps {
    children: React.ReactNode;
    ariaLabel: string;
    size?: "small" | "large";
    variant?: "gray" | "blue";
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}

export const MainButton: React.FC<MainButtonProps> = ({
    children,
    ariaLabel,
    size = "small",
    variant = "gray",
    disabled = false,
    className,
    onClick,
}) => {
    const options = `${className} flex justify-center items-center cursor-pointer hover:bg-lightBlue/60 ${size === "small"
        ? "text-sm py-1 px-4 w-fit max-w-[7rem] "
        : "text-lg py-2  w-full"
        } ${variant === "gray" ? " bg-lightGray " : "bg-lightBlue"
        } text-white  rounded-md border border-secondaryDarkGray`;

    return (
        <div
            tabIndex={0}
            aria-label={ariaLabel}
            className={`${options} ${disabled ? "cursor-not-allowed" : ""}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

