import { useEffect } from "react";
import { Place } from "../CityMap/types";
import { usePlaceContext } from "../PlacesMain/hooks/context";
import { PlacesActionType } from "../PlacesMain/hooks/reducer";
import "./style.css";

type MobilePlaceCarouselProps = {
  data: Place[];
};

function MobilePlaceCarousel({ data }: MobilePlaceCarouselProps) {
  const { state, dispatch } = usePlaceContext();

  // Set currentPlace on load
  useEffect(() => {
    dispatch({
      type: PlacesActionType.SET_PLACE,
      payload: {
        currentPlace: data.length > 0 ? data[0] : null,
      },
    });
  }, [data]);

  // Update currentIndex if data changes
  useEffect(() => {
    let newIndex = 0;
    for (let index in data) {
      if (state.currentPlace?.id === data[index].id) {
        newIndex = Number(index);
        break;
      }
    }
    dispatch({
      type: PlacesActionType.SET_INDEX,
      payload: {
        currentIndex: newIndex,
      },
    });
  }, [data]);

  // Update currentIndex if currentPlace changes. If the user clicks on a marker,
  // then the currentPlace changes. This hook updates the currentIndex.
  useEffect(() => {
    let newIndex = 0;
    for (let index in data) {
      if (state.currentPlace?.id === data[index].id) {
        newIndex = Number(index);
        dispatch({
          type: PlacesActionType.SET_INDEX,
          payload: {
            currentIndex: newIndex,
          },
        });
        break;
      }
    }
  }, [state.currentPlace]);

  const handleBackClick = () => {
    const newIndex =
      state.currentIndex === 0 ? data.length - 1 : state.currentIndex - 1;
    console.log(newIndex);
    dispatch({
      type: PlacesActionType.SET_PLACE,
      payload: { currentPlace: data[newIndex] },
    });
  };

  const handleForwardClick = () => {
    const newIndex =
      state.currentIndex === data.length - 1 ? 0 : state.currentIndex + 1;
    console.log(newIndex);
    dispatch({
      type: PlacesActionType.SET_PLACE,
      payload: { currentPlace: data[newIndex] },
    });
  };

  if (!state.currentPlace) {
    return <div className="mobile-place-carousel-no-results">No results.</div>;
  }

  return (
    <div className="mobile-place-carousel-container">
      <div className="mobile-place-carousel-text-container">
        <h3>{state.currentPlace?.name}</h3>
        <p>{state.currentPlace?.description}</p>
        <p>
          <span style={{ fontWeight: "bold" }}>Go to order:</span>{" "}
          {state.currentPlace?.goToOrder.join(" + ")}
          <br />
          <span style={{ fontWeight: "bold" }}>Good for:</span>{" "}
          {state.currentPlace?.goodfor.join(" + ")}
        </p>
        <div className="mobile-place-carousel-nav-buttons">
          <button onClick={() => handleBackClick()}>{"<"}</button>
          <button onClick={() => handleForwardClick()}>{">"}</button>
        </div>
      </div>
    </div>
  );
}

export default MobilePlaceCarousel;
