import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function MainHeading({ children }: Props) {
  return (
    <h1 className="text-4xl font-bold text-center uppercase mb-6">
      {children}
    </h1>
  );
}

export function SecondaryHeading({ children }: Props) {
  return (
    <h2 className="text-4xl font-bold text-center uppercase mb-6">
      {children}
    </h2>
  );
}

export function DefaultParagraph({ children }: Props) {
  return <p className="mx-auto text-center max-w-3xl">{children}</p>;
}
