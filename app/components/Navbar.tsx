"use client";

import { useEffect, useState, CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import useScrollDirection from "../(site)/lib/useScrollDirection";
import { headerDataTypes } from "@/sanity/lib/types";
import "../(site)/styles/navbar.css";
import "../(site)/styles/hamburgerMenu.css";
import { usePathname } from "next/navigation";

interface MyCustomCSS extends CSSProperties {
  "--animateOrder": number;
  "--length": number;
}

export default function Navbar(headerDataRaw: headerDataTypes) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  const isScrollingDown = useScrollDirection();

  const headerData = Object.values(headerDataRaw);
  const headerDataArray = headerData[0];
  const { title, navTitle1, navTitle2, logoUrl } = headerDataArray;
  const navLinks = Object.values(headerDataArray.navItems);

  const currentRoute = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsPageScrolled(true);
      } else {
        setIsPageScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1400) setMobileNavOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    mobileNavOpen
      ? document.body.classList.add("noScroll")
      : document.body.classList.remove("noScroll");
  });

  return (
    <header
      id="header"
      className={
        isScrollingDown && isPageScrolled
          ? "hideHeader sticky"
          : isScrollingDown
          ? "hideHeader"
          : isPageScrolled
          ? "sticky"
          : undefined
      }
    >
      <div className="logoWrapper">
        <Link href="./">
          <Image
            className="logo"
            src={logoUrl}
            alt={`${title} logo`}
            width={180}
            height={68}
          />
        </Link>
      </div>

      <div className="menuIconWrapper">
        <div
          onClick={() => {
            setMobileNavOpen(!mobileNavOpen);
          }}
          className={mobileNavOpen ? "menuIcon open" : "menuIcon close"}
        >
          <div className="menuIcon_burger" />
        </div>
      </div>

      <nav className={mobileNavOpen ? "open " : undefined}>
        <ul className="navLinks">
          <li key={0}>
            <Link
              href={`/`}
              style={
                {
                  "--animateOrder": 0,
                  "--length": navLinks.length + 1,
                } as MyCustomCSS
              }
              className={currentRoute === "/" ? "active" : undefined}
              onClick={() => {
                setMobileNavOpen(false);
              }}
            >
              {`${navTitle1}\n${navTitle2}`}
            </Link>
            <div className="underline" />
          </li>
          {navLinks?.map((link: any, index) => (
            <li key={`${link.title}-${index}`}>
              <Link
                href={`/${link.currentSlug}`}
                style={
                  {
                    "--animateOrder": index + 1,
                    "--length": navLinks.length + 1,
                  } as MyCustomCSS
                }
                className={
                  currentRoute === `/${link.currentSlug}` ? "active" : undefined
                }
                onClick={() => {
                  setMobileNavOpen(false);
                }}
              >
                {`${link.navTitle1}\n${link.navTitle2}`}
              </Link>
              <div className="underline" />
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobileNavOverlay" />
      <div className="headerBg" />
    </header>
  );
}
