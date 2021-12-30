import { useTranslation } from "react-i18next";
import "./style.css";

export function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      {t("footer.text")}
      <a href="https://github.com/billy-yuan/personal-website">
        {t("footer.here")}
      </a>
    </div>
  );
}
