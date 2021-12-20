import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

type PostCardProps = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
};

export function PostCard({ title, slug, date, excerpt }: PostCardProps) {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  const postLink = `/post/${slug}`;

  return (
    <Link to={postLink}>
      <div
        className="post-card-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="post-card-text">
          <h3 style={{ textDecoration: mouseEnter ? "underline" : "none" }}>
            {title}
          </h3>
          <p>{excerpt}</p>
          <div className="post-card-date">{date}</div>
        </div>
      </div>
    </Link>
  );
}
