import React from "react";
import { fadeIn, staggerContainer } from "@utils/motion";
import { TypingText, TitleText } from "@components/index";
import { motion } from "framer-motion";
function World() {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        initial="hidden"
        variants={staggerContainer(undefined, undefined)}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title={"| People on the World"} />
        <TitleText
          title={
            "Track friends around you and invite them to play together in the same world"
          }
        />

        <motion.div
          variants={{
            hidden: {
              y: -100,
              opacity: 0,
            },
            show: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                type: "tween",
                delay: 0.5,
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/images/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.5,
                  delayChildren: 0.7,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    type: "tween",
                    ease: "easeIn",
                  },
                },
              }}
              className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
            >
              <img
                src="/images/people-02.png"
                alt="people"
                className="w-full h-full"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    type: "tween",
                    ease: "easeIn",
                  },
                },
              }}
              className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
            >
              <img
                src="/images/people-03.png"
                alt="people"
                className="w-full h-full"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    type: "tween",
                    ease: "easeIn",
                  },
                },
              }}
              className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
            >
              <img
                src="/images/people-01.png"
                alt="people"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default World;
