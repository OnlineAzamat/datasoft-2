'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from '@/styles/index';
import { staggerContainer } from '@/utils/motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import { exploreCourses } from '@/constants';
import { ExploreCard } from '@/components/ExploreCard';

export const Explore = () => {
  const [active, setActive] = useState('world-3');
  
  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText 
          title="| The courses" 
          textStyles="text-center" 
        />
        <TitleText 
          title={<>Choose the course you want <br className='md:block hidden' /> to learn</>} 
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreCourses.map((world, index) => (
            <ExploreCard 
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
