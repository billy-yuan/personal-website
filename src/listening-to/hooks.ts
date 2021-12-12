import { useEffect, useState } from "react";

const ENDPOINT = {
  DEV: "http://localhost:4000/get-top-artists",
  PROD: "",
};

export type TopArtist = {
  genres: string[];
  id: string;
  name: string;
  spotify_url: string;
  image: { height: number; url: string; width: number };
};

export function useFetchTopArtists(limit: number) {
  const [data, setData] = useState<TopArtist[]>();
  const url = new URL(ENDPOINT[import.meta.env.VITE_ENV]);
  url.searchParams.append("limit", `${limit}`);

  useEffect(() => {
    fetch(url.href)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => console.log(e));
  }, []);
  return data;
}
