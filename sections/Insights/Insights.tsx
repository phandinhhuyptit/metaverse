import React from "react";
import { insights } from "@constant/index";
import { Insight } from "@components/index";
import { TypingText, TitleText } from "@components/index";
import { staggerContainer } from "@utils/motion";
import { motion } from "framer-motion";
function Insights() {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        initial="hidden"
        variants={staggerContainer(undefined, undefined)}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col "
      >
        <TypingText title={"| Insight"} />
        <TitleText title={"Insight about metaverse"} />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insights, index) => (
            <Insight index={index} key={`${insights.title}_${index}`} {...insights} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Insights;
