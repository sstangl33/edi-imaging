import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    // function to run on scroll
    const updateIsScrollingDown = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? true : false;

      if (
        direction !== isScrollingDown &&
        (scrollY - lastScrollY > 6 || scrollY - lastScrollY < -6)
      ) {
        setIsScrollingDown(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("wheel", updateIsScrollingDown); // add event listener
    window.addEventListener("touchmove", updateIsScrollingDown); // add event listener
    return () => {
      window.removeEventListener("wheel", updateIsScrollingDown); // clean up
      window.removeEventListener("touchmove", updateIsScrollingDown); // clean up
    };
  }, [isScrollingDown]); // run when scroll direction changes

  return isScrollingDown;
}
