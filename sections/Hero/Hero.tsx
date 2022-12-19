'use client';
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Hero.module.scss";
import { staggerContainer,textVariant,slideIn } from "@utils/motion"
import { motion } from "framer-motion"
function Hero() {
  return (
    <motion.div 
    variants={staggerContainer(undefined,undefined)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={styles.container}>
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1)} className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
            Metaverse
          </motion.h1>
          <div className="flex justify-center items-center flex-row">
            <motion.h1  variants={textVariant(1.1)} className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              MA
            </motion.h1>
            <motion.div  variants={textVariant(1.2)} className="sm:mx-2 mx-[6px] border-white rounded-r-[50px] md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px]" />
            <motion.h1   variants={textVariant(1.3)}className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              NESS
            </motion.h1>
          </div>
        </div>
        <motion.div variants={slideIn('right','tween',0.2,1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/images/cover.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                <img src="/images/stamp.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
