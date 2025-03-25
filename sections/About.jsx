'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';

import styles from '@/styles/index';
import { fadeIn, staggerContainer } from '@/utils/motion';

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className='gradient-02 z-0' />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| DataSoft Academy" textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Data SoftAcademy</span> — это одно из ключевых направлений сообщества <span className='font-extrabold text-white'>Qiriq Qiz</span>, созданное для того, чтобыдевушки могли свободно и уверенно развиваться в сфере информационных технологий.<br />
          Наша онлайн-платформа предлагает доступные курсы по самым востребованнымИТ-направлениям: компьютерная грамотность, веб-разработка, программирование, дизайн и многое другое. <br />
          Цель проекта— помочь девушкам овладеть цифровыми навыками, повысить свою конкурентоспособность на рынке труда и вдохновиться возможностями, которые открывает технологическиймир.
          {/* <span className='font-extrabold text-white'>DATA LIFE</span> is a training center that is a resident of <span className='font-extrabold text-white'>IT Park.</span> We are proud of our achievements and dedication to education in the field of information technology. Over the years, we have trained more than <span className='font-extrabold text-white'>1,500 graduates</span> who have successfully started their careers in various IT companies. Currently, we have more than <span className='font-extrabold text-white'>150 students</span> studying with us, striving to master modern technologies and achieve success in the IT field. We strive for constant growth and development, as well as to provide high-quality education in the field of information technology for all our students. */}
        </motion.p>
        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src='/arrow-down.svg'
          alt='arrow down'
          className='w-[18px] h-[18px] object-contain mt-[28px]'
        />
      </motion.div>
    </section>
  )
}

export default About