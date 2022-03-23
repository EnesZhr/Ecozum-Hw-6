import { useCallback } from "react";

export const useCookie = () => {
  const getCookie = useCallback((cookieName: string) => {
    return (
      document.cookie
        .match("(^|;)\\s*" + cookieName + "\\s*=\\s*([^;]+)")
        ?.pop() || ""
    );
  }, []);

  const setCookie = useCallback((cookieName: string, value: string) => {
    document.cookie = `${cookieName}=${value}`;
  }, []);

  const deleteCookie = useCallback((cookieName: string) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }, []);

  return { getCookie, setCookie, deleteCookie };
};
