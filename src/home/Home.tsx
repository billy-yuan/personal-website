import { HomeContextProvider } from "./hooks/context";
import { HighlightNavSection } from "./HighlightNavSection";

export function Home() {
  return (
    <HomeContextProvider>
      <div className="home-container">
        <HighlightNavSection />
      </div>
    </HomeContextProvider>
  );
}
