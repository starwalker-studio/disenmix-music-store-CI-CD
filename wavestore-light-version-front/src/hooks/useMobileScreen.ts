import { useEffect, useState } from "react";
import { HEADER_ENV } from "../env/header.env";

export const useMobileScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const [isNavButtonOn, setIsNavButtonOn] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  const nav_transition = {
    transition: "all, transform 400ms",
    transform: isNavButtonOn
      ? "translateX(0px) translateY(0px)"
      : "translateX(-430px) translateY(0px)",
  };

  const isMobileScreen = () => {
    return width <= HEADER_ENV.MAX_MOBILE_WIDTH;
  };

  const handleClick = () => {
    setIsNavButtonOn((prevState) => !prevState);
  };

  return {
    isMobileScreen,
    handleClick,
    nav_transition,
  };
};
