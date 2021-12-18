import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HomeContextProvider } from "./hooks/context";
import "./style.css";

export function Home() {
  return (
    <HomeContextProvider>
      <div className="home-container">
        <HomeAboutMe />
        <SectionNav />
      </div>
    </HomeContextProvider>
  );
}

function HomeAboutMe() {
  return (
    <div className="home-about-me-container">
      <div className="home-profile-pic-container">
        <div className="home-profile-pic" />
      </div>
      <div className="home-about-me-text-container">
        <h1>Billy Yuan</h1>
        <p>
          I enjoy creating things through code, words, and images. Through this
          site, you can learn more about me, my work, and my interests.
        </p>
      </div>
    </div>
  );
}

function SectionNav() {
  const { t } = useTranslation();
  return (
    <div className="section-nav-container">
      <NavCard header={""} text={""} />
      <NavCard
        header={t("navSection.aboutMe.name")}
        text={t("navSection.aboutMe.text")}
      />
      <NavCard
        header={t("navSection.blog.name")}
        text={t("navSection.blog.text")}
      />
      <NavCard
        header={t("navSection.coffee.name")}
        text={t("navSection.coffee.text")}
      />
      <NavCard
        header={t("navSection.listening.name")}
        text={t("navSection.listening.text")}
      />
      <NavCard
        header={t("navSection.photos.name")}
        text={t("navSection.photos.text")}
      />
    </div>
  );
}

type NavCardProps = {
  header: string;
  text: string;
};
function NavCard({ header, text }: NavCardProps) {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const mouseOverStyle = { textDecoration: "underline" };

  return (
    <div
      className="nav-card-container"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <h2 style={isMouseOver ? mouseOverStyle : {}}>{header}</h2>
      <p>{text}</p>
    </div>
  );
}
