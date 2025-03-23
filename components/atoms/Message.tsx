interface MessageProps {
    title: string;
    subtitle: string;
}

export const Message = ({ title, subtitle }: MessageProps) => (
    <div className="place-self-center bg-lightGray w-fit p-8 rounded-md">
        <p className="text-4xl mb-2">{title}</p>
        <p className="text-2xl text-center">{subtitle}</p>
    </div>
);