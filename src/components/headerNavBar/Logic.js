import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

function Logic() {
  const size = window.innerWidth;
  const [navBarShow, setNavBarShow] = useState(false);
  const animationNavBar = useAnimation();

  useEffect(() => {
    if (navBarShow) {
      animationNavBar.start({
        width: "98%",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      return;
    }
    animationNavBar.start({
      width: "4rem",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navBarShow]);

  return {
    size,
    navBarShow,
    setNavBarShow,
    animationNavBar,
  };
}
export default Logic;
