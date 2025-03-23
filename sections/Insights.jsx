'use client'

import { motion } from "framer-motion";

import styles from "@/styles";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { insights } from "@/constants";
import InsightCard from "@/components/InsightCard";

export const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Patners" textStyles="text-center" />
        <TitleText title="Data Soft's partners" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard 
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
