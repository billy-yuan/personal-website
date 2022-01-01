import "./style.css";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useOnLanguageChange } from "../../utility/useOnLanguageChange";
import { CityMap } from "../CityMap/CityMap";
import { PLACES_QUERY } from "../CityMap/query";
import PlaceSidebar from "../PlaceSidebar";
import Filter from "../PlaceSidebar/Filter";
import { useGetFilters } from "./hooks/hooks";
import { PlaceProvider, usePlaceContext } from "./hooks/context";
import { Place } from "../CityMap/types";
import { useEffect, useState } from "react";
import MobilePlaceCarousel from "../MobilePlaceCarousel";
import { useIsMobile } from "../../utility/useIsMobile";

function useFilterData(places: Place[]) {
  const { state } = usePlaceContext();
  const [newData, setNewData] = useState<Place[]>(places);

  // TODO: Can we make filterData more efficient
  const filterData = (): Place[] => {
    let filteredData: Place[] = [];

    for (let place of places) {
      for (let goodforItem of place.goodfor) {
        if (state.filter.includes(goodforItem)) {
          filteredData.push(place);
          break;
        }
      }
    }
    return filteredData;
  };

  useEffect(() => {
    const filteredData = filterData();
    setNewData(filteredData);
  }, [state.filter]);

  return newData;
}

function PlacesContentContainer({ data }: { data: Place[] }) {
  const filteredData = useFilterData(data);
  const isMobile = useIsMobile();

  return (
    <div className="places-main-content-container">
      {isMobile ? (
        <MobilePlaceCarousel />
      ) : (
        <PlaceSidebar data={filteredData} />
      )}
      <CityMap data={filteredData} />
    </div>
  );
}

function PlacesMain() {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const { data, loading, error, refetch } = useQuery(PLACES_QUERY, {
    variables: { slug, locale: i18n.language },
  });

  useOnLanguageChange(refetch);

  if (loading || error) {
    return <div />;
  }
  const filters = useGetFilters(data.places);

  return (
    <PlaceProvider>
      <div className="places-main-container">
        <Filter filters={filters} />
        <PlacesContentContainer data={data.places} />
      </div>
    </PlaceProvider>
  );
}

export default PlacesMain;
