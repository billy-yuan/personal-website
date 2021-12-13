import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Executes the callback function when the user changes the site's language.
 * @param callback Callback function that should be executed.
 */
export function useOnLanguageChange(callback: () => void) {
  const { i18n } = useTranslation();
  useEffect(() => {
    callback();
  }, [i18n.language]);
}
