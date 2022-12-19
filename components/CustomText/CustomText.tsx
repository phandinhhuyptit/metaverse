"use client";
import { useEffect,useState } from "react";
import { motion } from "framer-motion";
import { textVariant, textVariant2, textContainer } from "@utils/motion";

export const TypingText = ({ title }: any) => {
  return (
    <motion.p
      variants={textContainer}
      className="font-normal text-[14px] text-secondary-white text-center"
    >
      {Array.from(title).map((letter: any, index) =>{ 
        return (
        <motion.span
        variants={textVariant2} key={index}> {letter === ' ' ? '\u00A0' : letter}</motion.span>
      )})}
    </motion.p>
  );
};


export const TitleText = ({ title } : any) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      viewport={{
        once:true,
        amount : 0.25
      }}
      className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center"
    >
      {title}
    </motion.h2>
  );
  