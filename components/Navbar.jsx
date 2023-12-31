"use client";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { FaServicestack } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";

const Navbar = () => {
  const router = useRouter();
  const [hideNav, setHideNav] = useState(false);
  return (
    <nav className={styles.navContainer}>
      <div className={styles.rightSideNav}>
        <h3
          className={styles.navigationLogo}
          onClick={() => {
            router.push("/");
            setHideNav(false);
          }}
        >
          Qendel
        </h3>
        <ul
          className={
            hideNav ? styles.navigationContainer : styles.hiddenNavigation
          }
        >
          <li
            className={styles.navigationText}
            onClick={() => {
              router.push("/");
              setHideNav(false);
            }}
          >
            <AiFillHome className={styles.navIcons} />
            Home
          </li>
          <li
            className={styles.navigationText}
            onClick={() => {
              router.push("/about");
              setHideNav(false);
            }}
          >
            <IoPeople className={styles.navIcons} />
            About
          </li>
          <li
            className={styles.navigationText}
            onClick={() => {
              router.push("/services");
              setHideNav(false);
            }}
          >
            <FaServicestack className={styles.navIcons} />
            Services
          </li>
          <li
            className={styles.navigationText}
            onClick={() => router.push("/contact")}
          >
            <RiContactsBook2Fill className={styles.navIcons} />
            Contact
          </li>
        </ul>
      </div>
      <div className={styles.leftSideNav}>
        {/* <div className={styles.topMenubarLine}></div>
        <div className={styles.bottomMenubarLine}></div> */}
        <IoMdCall
          className={styles.call}
          onClick={() => router.push("/contact")}
        />
        <p className={styles.phone} onClick={() => router.push("/contact")}>
          0970722734
        </p>

        <div className={styles.smallDevice}>
          {hideNav ? (
            <IoCloseOutline
              className={styles.closeIcon}
              onClick={() => setHideNav(!hideNav)}
            />
          ) : (
            <RxHamburgerMenu
              className={styles.openIcon}
              onClick={() => setHideNav(!hideNav)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
