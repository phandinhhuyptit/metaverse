"use client";
import React from "react";
import styles from "./About.module.scss";
import { staggerContainer,fadeIn } from "@utils/motion";
import { TypingText } from "@components/index";
import { motion } from "framer-motion";
function About() {
  return (
    <section className={styles.section}>
      <div className="gradient-02 z-0" />
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer(undefined, undefined)}
        viewport={{ once: true, amount:0.5 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
      >
        <TypingText title={"| About Metaversus"} />

        <motion.p variants={fadeIn("up","tween",0.2,0.5)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it's really real, you can feel what you feel in this metaverse
          world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let's{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>
        <motion.div
        
        variants={fadeIn("up","tween",0.3,0.5)}
        >
        <motion.img
          animate={{
            y: [0,20],
            transition : {
              duration:1, 
              type:"tween",
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }
          }}
          src="/images/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />

        </motion.div>
    
      </motion.div>
      <div className={styles.gradient}></div>
    </section>
  );
}

export default About;
