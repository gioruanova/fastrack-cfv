import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainContainer({ children }: Props) {
  return (
    <div className="w-full mx-auto max-w-7xl px-0 md:px-4 flex flex-col md:flex-row gap-4 ">
      <div className="w-full text-foreground">{children}</div>
    </div>
  );
}
