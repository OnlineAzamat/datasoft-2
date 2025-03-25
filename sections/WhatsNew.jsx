'use client';

import { motion } from 'framer-motion';

import styles from '@/styles/index';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import { newFeatures } from '@/constants';
import { NewFeatures } from '@/components/NewFeatures';
import { CCarousel, CCarouselItem } from '@coreui/react';

import '@coreui/coreui/dist/css/coreui.min.css'

export const WhatsNew = () => {
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
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| Team" />
          <TitleText title={<>Our Team Values</>} />
          <CCarousel className='mt-[48px] min-h-[270px] border-4 border-secondary-white rounded-3xl flex flex-wrap justify-between gap-[24px]' interval={5000} controls>
            {
              newFeatures.map((feature) => (
                <CCarouselItem className="flex-1 flex flex-col w-full" key={feature.title}>
                  <NewFeatures 
                    {...feature}
                  />
                </CCarouselItem>
              ))
            }
          </CCarousel>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img 
            src="/team.webp" 
            alt="team" 
            className="w-[90%] h-[90%] object-contain rounded-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
