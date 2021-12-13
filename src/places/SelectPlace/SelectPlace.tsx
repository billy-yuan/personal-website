import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { NavSectionURL } from "../../utility/types";
import { useOnLanguageChange } from "../../utility/useOnLanguageChange";
import { SelectCityCard } from "../SelectCityCard/SelectCityCard";
import { SELECT_PLACE_QUERY } from "./query";
import "./style.css";

type CityImage = {
  __typename: "Asset";
  url: string;
};
type City = {
  __typename: "City";
  id: string;
  name: string;
  imageUrl: CityImage[];
  slug: string;
};

export function SelectPlace() {
  const { i18n } = useTranslation();
  const { data, loading, error, refetch } = useQuery(SELECT_PLACE_QUERY, {
    variables: { locale: i18n.language },
  });

  useOnLanguageChange(refetch);

  // TODO: Make loading / error screen
  if (loading || error) {
    return <div />;
  }

  return (
    <div className="select-place-container">
      <div className="select-place-header">
        <h1>My favorite places</h1>
      </div>
      <div className="select-place-subheader">
        <p>
          I have lived extensively in Austin and New York, and friends would
          often ask for recommendations. In addition, I believe the places you
          visit can help someone know me more. So whether you're looking for a
          place to try or would like to learn more about me, feel free to look
          at my recommendations below!
        </p>
      </div>
      <div className="city-container">
        {data.cities.map((city: City) => (
          <Link to={`${NavSectionURL.Places}/${city.slug}`}>
            <SelectCityCard
              key={city.id}
              city={city.name}
              imageUrl={city.imageUrl[0].url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
