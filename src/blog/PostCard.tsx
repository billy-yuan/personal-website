import { useState } from "react";
import "./style.css";

type PostCardProps = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
};

export function PostCard({
  id,
  title,
  date,
  excerpt,
  imageUrl,
}: PostCardProps) {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  const postCardImageStyle = {
    base: {
      backgroundImage: "url('" + imageUrl + "')",
    },
    hover: {
      backgroundImage: "url('" + imageUrl + "')",
      transition: "opacity 0.3s",
      opacity: "0.8",
    },
  };

  const postCardImageStyleHover = {};
  return (
    <div
      className="post-card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="post-card-image"
        style={mouseEnter ? postCardImageStyle.hover : postCardImageStyle.base}
      />
      <div className="post-card-text">
        <h3
          style={{
            margin: "0",
            textDecoration: mouseEnter ? "underline" : "none",
          }}
        >
          {title}
        </h3>
        <p>{excerpt}</p>
        <div
          style={{
            color: "rgb(128,128,128)",
            fontWeight: 400,
            fontSize: "12px",
          }}
          className="post-card-date"
        >
          {date}
        </div>
      </div>
    </div>
  );
}
