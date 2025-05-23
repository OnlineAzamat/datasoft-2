'use client';

import { motion } from 'framer-motion';

import styles from '@/styles/index';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import { startingFeatures } from '@/constants';
import { StartSteps } from '@/components/StartSteps';

export const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img 
            src="/get-started.webp" 
            alt="get-started" 
            className="w-[90%] h-[90%] object-contain rounded-xl"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TitleText title={<>Что ты получишь:</>} />
          <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
            {
              startingFeatures.map((feature, index) => (
                <StartSteps 
                  key={feature}
                  number={index + 1}
                  text={feature}
                />
              ))
            }
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
