"use client";
import React from "react";
import { startingFeatures } from "@constant/index";
import { StartSteps, TypingText, TitleText } from "@components/index";
import { motion } from "framer-motion";
import { slideIn,planetVariants } from "@utils/motion";
function GetStarted() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={planetVariants("left")}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src="/images/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.5, 0.75)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={"Get started with just a few clicks"} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default GetStarted;
