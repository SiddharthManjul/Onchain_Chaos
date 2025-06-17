import Hero from "../custom/hero";
import DefinitionBox from "../custom/definitionBox";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <div>
      <SmoothCursor />
      <Hero />
      <DefinitionBox />
    </div>
  );
}
