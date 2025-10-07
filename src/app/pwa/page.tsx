import { GlassCard } from "@/components/containers/GlassCard";
import MainContainer from "@/components/containers/MainContainer";
import { ShapeLeft, ShapeRight } from "@/components/ui/shape";

export default function NamePage() {
  return (
    <MainContainer>
      <ShapeLeft />
      <GlassCard>
        
        <h1 className="text-3xl text-center font-semibold tracking-tight text-balance text-foreground sm:text-4xl italic">
            Este es un ejemplo de funcionalidad PWA
        </h1>
      </GlassCard>
      <ShapeRight />
    </MainContainer>
  );
}
