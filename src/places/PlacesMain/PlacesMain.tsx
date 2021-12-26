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
import { CurrentPlaceProvider, useCurrentPlaceContext } from "./hooks/context";

function PlacesMain() {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const { data, loading, error, refetch } = useQuery(PLACES_QUERY, {
    variables: { slug, locale: i18n.language },
  });
  const { state, dispatch } = useCurrentPlaceContext();

  useOnLanguageChange(refetch);

  if (loading || error) {
    return <div />;
  }

  const filters = useGetFilters(data.places);
  return (
    <CurrentPlaceProvider>
      <div className="places-main-container">
        <Filter filters={filters} />
        <div className="places-main-content-container">
          <PlaceSidebar data={data} />
          <CityMap data={data} />
        </div>
      </div>
    </CurrentPlaceProvider>
  );
}

export default PlacesMain;
