"use client";
import React from "react";
import { newFeatures } from "@constant/index";
import { NewFeatures } from "@components/index";
import { slideIn,planetVariants  } from "@utils/motion" 
import { motion } from "framer-motion"
import { TypingText , TitleText } from "@components/index"

function WhatsNew() {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        initial="hidden"
        viewport={{
          once : true,
          amount : 0.25
        }}
        whileInView="show"
        className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div 
        variants={slideIn("left", "tween",0.5,0.5)}
        className="flex-[0.95] flex justify-center flex-col">
          <TypingText title="| Whats new?" />  
          <TitleText title="What's new about Metaversus?"/>
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature, key) => (
              <NewFeatures key={`${feature?.title}_${key}`} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div variants={planetVariants("right")} className="flex-1 flex justify-center items-center">
          <img
            src="/images/whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhatsNew;
