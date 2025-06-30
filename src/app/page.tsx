import Hero from "../custom/hero";
import DefinitionBox from "../custom/definitionBox";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Navigation from "../custom/navbar";

export default function Home() {
  return (
    <div>
      <SmoothCursor />
      <Navigation />
      <Hero />
      <DefinitionBox />
    </div>
  );
}
