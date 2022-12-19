"use client";
import React, { useState } from "react";
import styles from "./Explore.module.scss";
import { exploreWorlds } from "@constant/index";
import { ExplorerCard } from "@components/index";
import { TypingText,TitleText } from "@components/index";
import { staggerContainer, fadeIn } from "@utils/motion";
import { motion } from "framer-motion";
function Explore() {
  const [active, setActive] = useState("world-2");
  return (
    <section className={styles.container} id="explore">
      <motion.div
        variants={staggerContainer(undefined, undefined)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| The World"/>

        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExplorerCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
