import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaDocker, FaGitAlt, FaNode, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </motion.div>

        <motion.div className="p-4"
           initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <TbBrandNextjs className="text-7xl animate" />
        </motion.div>

        <motion.div className="p-4"
           initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <SiMongodb className="text-7xl text-green-800 " />
        </motion.div>

        <motion.div className="p-4"
           initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >

          <FaNodeJs className="text-7xl text-green-500 " />
        </motion.div>

        <motion.div className="p-4"
           initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
        >
          <BiLogoPostgresql className="text-7xl text-blue-300" />
        </motion.div>

        <motion.div className="p-4"
           initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <RiTailwindCssFill className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div className="p-4"
           initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <FaGitAlt className="text-7xl text-red-500" />
        </motion.div>

        <motion.div className="p-4"
           initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <FaDocker className="text-7xl text-cyan-400" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
