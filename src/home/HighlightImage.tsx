import { useEffect, useState } from "react";
import { NavSection } from "../utility/types";
import { useHomeContext } from "./hooks/context";
import "./style.css";

type HighlightImageProps = {
  name: NavSection;
};
function highlightImageStyle(
  sectionName: NavSection,
  userStyle: { [key: string]: string }
) {
  const style = {
    ...userStyle,
    transition: "opacity 0.6s",
    backgroundRepeat: "no-repeat",
    willChange: "opacity",
    backgroundSize: "cover",
    filter: "grayscale(85%)",
  };

  switch (sectionName) {
    case NavSection.Blog:
      return {
        ...style,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      };
    case NavSection["About Me"]:
      return {
        ...style,
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/54988db1e4b0a4688eafc081/1608593203154-EKQQ3QLCIJVM2BH232XK/OpenTable_044.jpg')",
      };
    case NavSection.People:
      return {
        ...style,
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/5f31890c64aa72049cf5f2e6/1598006977532-8NNIA475UFB12ZTDCEFH/tokyo-5396-2.jpg?format=1000w')",
      };
    case NavSection.Places:
      return {
        ...style,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1577640204417-a73c72c7cb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      };
    default:
      return {
        ...style,
        backgroundImage:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEXv6d1yGkyLAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=')",
      };
  }
}

export function HighlightImage({ name }: HighlightImageProps) {
  const { state } = useHomeContext();
  const [currentHighlightImageStyle, setHighlightImageStyle] = useState({});

  useEffect(() => {
    console.log(state.mouseoverNav, name);
    if (state.mouseoverNav === name) {
      const newHighlightImageStyle = highlightImageStyle(state.mouseoverNav, {
        opacity: "1",
      });

      setHighlightImageStyle(newHighlightImageStyle);
    } else {
      const newHighlightImageStyle = highlightImageStyle(name, {
        opacity: "0",
      });
      setHighlightImageStyle(newHighlightImageStyle);
    }
  }, [state.mouseoverNav]);

  return (
    <div
      className="home-highlight-image-container"
      style={currentHighlightImageStyle}
    ></div>
  );
}
