import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useOnLanguageChange(callback: () => void) {
  const { i18n } = useTranslation();
  useEffect(() => {
    callback();
  }, [i18n.language]);
}
