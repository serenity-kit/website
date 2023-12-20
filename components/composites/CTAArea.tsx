import { DisplayHeading } from "../DisplayHeading";

export type CTAAreaProps = {
  id?: string;
  header: string;
  text: string;
  children: React.ReactNode;
};

export const CTAArea: React.FC<CTAAreaProps> = ({
  header,
  text,
  children,
  ...props
}) => {
  return (
    <div
      className="h-[26rem] w-full my-5 flex justify-center items-center rounded-2xl bg-gray-300 text-center cta-gradient"
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        <DisplayHeading tag="h3" className="text-white">
          {header}
        </DisplayHeading>
        <p className="max-w-[70%] text-white">{text}</p>
        {children}
      </div>
    </div>
  );
};
