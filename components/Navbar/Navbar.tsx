import React from "react";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { navVariants } from "@utils/motion";
function Navbar() {
  return (
    <motion.nav
      initial="hidden"
      variants={navVariants}
      whileInView="show"
      viewport={{ once: true }}
      className={styles.nav}
    >
      <div className="absolute w-50% inset-0 gradient-01" />
      <div className={styles.container}>
        <div>
          <img
            className={styles.imgSearch}
            src="/images/search.svg"
            alt="Search"
          />
        </div>
        <div className="text-2xl font-extrabold text-[#FFFFFF]  ">
          METAVERSUS
        </div>
        <img className={styles.imgMenu} src="/images/menu.svg" alt="menu" />
      </div>
    </motion.nav>
  );
}

export default Navbar;
