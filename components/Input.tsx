import cn from "clsx";
import { ComponentProps } from "react";

export type InputProps = ComponentProps<"input"> & {};

export const Input = ({ children, ...props }: InputProps) => {
  return (
    <input
      type="text"
      {...props}
      className={cn(
        "h-12 min-w-[5rem] px-4 border border-gray-300 dark:border-gray-700 focus:dark:ring-primary-400/70 focus:dark:ring-offset-primary-400/70 rounded",
        props.disabled && "opacity-70",
        props.className
      )}
    />
  );
};
