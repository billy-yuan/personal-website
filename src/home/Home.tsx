import { HomeContextProvider } from "./hooks/context";
import { HighlightImage } from "./HighlightImage";
import { HighlightNavSection } from "./HighlightNavSection";

export function Home() {
  return (
    <HomeContextProvider>
      <div className="home-container">
        <HighlightImage />
        <HighlightNavSection />
      </div>
    </HomeContextProvider>
  );
}
