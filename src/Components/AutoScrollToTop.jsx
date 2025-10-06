import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AutoScrollToTop = () => {
  // taking path
  const { pathname } = useLocation();
  // run every time when path  or url change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default AutoScrollToTop;
