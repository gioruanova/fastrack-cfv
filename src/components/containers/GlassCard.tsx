import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={` bg-white/10 backdrop-blur-md  md:border md:border-white/20 md:rounded-xl p-6
        shadow-lg  md:mt-10 text-foreground ${className}`}
    >
      {children}
    </div>
  );
}

export function GlassCardInner({ children, className = "" }: Props) {
  return (
    <div
      className={` bg-white/10 backdrop-blur-md border-b-2 border border-white/20 rounded-xl p-6
        shadow-lg  mt-10 text-foreground ${className}`}
    >
      {children}
    </div>
  );
}
