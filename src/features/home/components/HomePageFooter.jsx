import React from "react";
import { FaDiscord, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FLEX_CENTER } from "constants/tailwindConstants";
import useStoreData from "hooks/useStoreData";
import MagneticElement from "components/MagneticElement";

const HomePageFooter = () => {
  const { theme } = useStoreData();
  return (
    <div className="h-22 [&>*]items-center flex flex-wrap justify-around gap-5 rounded-lg p-5 [background:var(--primary-bg-gradient)]">
      <img
        src={`/logo/logo-${theme}.png`}
        alt="S Mart logo"
        className="w-24 md:w-28"
      />
      <ul className="flex flex-wrap items-center justify-center gap-3 [font-size:var(--fs-m)]">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Pricing</Link>
        </li>
      </ul>

      <ul className="flex items-center justify-end gap-3 [font-size:var(--fs-m)]">
        <li
          className={`h-7 w-7 rounded-full border border-solid ${FLEX_CENTER} cursor-pointer`}
        >
          <MagneticElement>
            <FaFacebookF />
          </MagneticElement>
        </li>
        <li
          className={`h-7 w-7 rounded-full border border-solid ${FLEX_CENTER} cursor-pointer`}
        >
          <MagneticElement>
            <RiInstagramFill />
          </MagneticElement>
        </li>
        <li
          className={`h-7 w-7 rounded-full border border-solid ${FLEX_CENTER} cursor-pointer`}
        >
          <MagneticElement>
            <FaLinkedin />
          </MagneticElement>
        </li>
        <li
          className={`h-7 w-7 rounded-full border border-solid ${FLEX_CENTER} cursor-pointer`}
        >
          <MagneticElement>
            <FaTwitter />
          </MagneticElement>
        </li>
        <li
          className={`h-7 w-7 rounded-full border border-solid ${FLEX_CENTER} cursor-pointer`}
        >
          <MagneticElement>
            <FaDiscord />
          </MagneticElement>
        </li>
      </ul>
    </div>
  );
};

export default HomePageFooter;
