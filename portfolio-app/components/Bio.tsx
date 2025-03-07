"use client";

import React from 'react'
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";

export function Bio() {
  return (
    <section id="about">
    <HeroHighlight containerClassName='dark:bg-transparent'>
        <div className="avatar flex-row">
          <div className="h-80 rounded-full">
            <img src="/images/profile.jpg" />
          </div>
        
      <motion.h1
        initial={{
            opacity: 0,
            y: 20,
        }}
        animate={{
            opacity: 1,
            y: [20, -5, 0],
        }}
        transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto ml-10"
        >

        &quot;I am a <Highlight className="text-black dark:text-white">Ph.D. student and a Graduate Research Assistant</Highlight> focusing on 
        <Highlight className="text-black dark:text-white">Reinforcement Learning and Multi-Armed Bandits.</Highlight> 
        My ongoing Ph.D. research explores advanced algorithms and neural forecasting models to improve 
        <Highlight className="text-black dark:text-white">the quality of the decisions</Highlight>
        taken by Multi-Armed Bandits and make them robust against <Highlight className="text-black dark:text-white">data integrity issues.</Highlight> 
        <Highlight className="text-black dark:text-white">Practical applications include</Highlight> automotive vehicles, addressing networking challenges, improving adaptive cyber-physical systems
        and even stock trading. I am committed to advancing AI and machine learning by integrating practical engineering skills with 
        <Highlight className="text-black dark:text-white">cutting-edge</Highlight> academic research to <br></br> 
        <Highlight className="text-black dark:text-white"> address complex challenges and drive innovation.</Highlight>&quot;

        </motion.h1>
        </div>
    </HeroHighlight>
    </section>
  );
}

export default Bio