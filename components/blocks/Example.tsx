import cn from "clsx";
import { ImageData } from "../../types/types";
import { DisplayHeading } from "../DisplayHeading";
import { P } from "../P";
import { BlockWrapper } from "./BlockWrapper";

export type ExampleProps = {
  header: string;
  text: React.ReactNode;
  image?: ImageData;
  children?: React.ReactNode;
  className?: string;
};

export const Example: React.FC<ExampleProps> = ({
  header,
  text,
  image,
  children,
  className,
  ...props
}) => {
  return (
    <BlockWrapper className={cn("text-center", className)} {...props}>
      <DisplayHeading tag="h3" className="mb-4">
        {header}
      </DisplayHeading>
      <P className="mb-10" variant="tertiary">
        {text}
      </P>
      {children}
    </BlockWrapper>
  );
};
