import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}