import { useState } from "react";
import { TopArtist, useFetchTopArtists } from "./hooks";
import "./style.css";

type OverlayProps = {
  text: string;
};

function Overlay({ text }: OverlayProps) {
  if (text === undefined || text === null) {
    return <div />;
  }
  return <div style={{ textAlign: "center" }}>{text}</div>;
}
export function ListeningTo() {
  const data = useFetchTopArtists(16);
  const [hoverArtist, setHoverArtist] = useState<string | null>();

  if (!data) {
    return <div />;
  }

  const handleMouseEnter = (artist: TopArtist) => {
    setHoverArtist(artist.name);
  };

  const handleMouseLeave = () => {
    setHoverArtist(null);
  };
  return (
    <div style={{ display: "flex", width: "400px", margin: "0 auto" }}>
      <div style={{ width: "360px" }}>
        <h2>What I've been listening to</h2>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20%",
            height: "50px",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          {hoverArtist && <Overlay text={hoverArtist} />}
        </div>
        <div className="listening-to-container">
          {data.map((artist) => {
            return (
              <div
                className="artist-image-container"
                onMouseEnter={() => handleMouseEnter(artist)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={artist.spotify_url}
                >
                  <div
                    className="artist-image"
                    style={{ backgroundImage: `url(${artist.image.url})` }}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
