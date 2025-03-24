'use client'

import styles from '@/styles';
import { CCarousel, CCarouselItem } from '@coreui/react';

export const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <CCarousel interval={5000}>
        <CCarouselItem>
          <div className="mx-auto flex lg:flex-row flex-col gap-6 2xl:max-w-[1280px] w-full">
            <div
              className='flex-[0.5] lg:max-w-[460px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
            >
              <div className="feedback-gradient" />

              <p className="mt-[24px] font-normal text-[18px] leading-[29px] text-white">🤝 Встреча с Министром цифровых технологий
              В рамках развития цифрового образования и поддержки женских инициатив в сфере ИТ мы провели важную встречу с <span className="font-bold">Шерзодом Шерматовым</span>, Министром цифровых технологий Республики Узбекистан.

              Во время визита была представлена концепция и направления <span className="font-bold">Data Soft Academy</span>. Мы обсудили возможности расширения доступа девушек к качественному ИТ-образованию, роль менторства и важность вовлечения женщин в цифровую экономику страны.

              Поддержка на таком уровне — это вдохновение для нас и подтверждение того, что мы движемся в правильном направлении.</p>
            </div>

            <div
              className="relative flex-1 flex justify-center items-center"
            >
              <img 
                src="/feedback-2.jpg"
                alt="feedback"
                className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
              />
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className="mx-auto flex lg:flex-row flex-col gap-6 2xl:max-w-[1280px] w-full">
            <div
              className='flex-[0.5] lg:max-w-[460px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
            >
              <div className="feedback-gradient" />
              <p className="mt-[24px] font-normal text-[18px] leading-[29px] text-white">👩‍💼 Встреча с руководством Комитета по делам семьи и женщин
              В рамках нашей миссии по расширению возможностей женщин и популяризации цифровой грамотности среди представительниц разных поколений, состоялась важная встреча с:

              <span className="font-bold">Зулайхо Бахриддиновной Махкамовой</span> — заместителем председателя <span className="font-bold">Комитета по делам семьи и женщин Республики Узбекистан,</span> и <span className="font-bold">Maryam Ahmedova</span> — председателем <span className="font-bold">Комитета по делам семьи и женщин Республики Каракалпакстан.</span>
              Во время визита мы поделились инициативами образовательной платформы <span className="font-bold">Data Soft Academy</span>. Обсуждались совместные шаги по поддержке женщин в регионах через образовательные, менторские и цифровые программы.
              Такая встреча подтверждает важность объединения усилий государства и гражданских инициатив для устойчивого развития и женского лидерства в Узбекистане.</p>
            </div>

            <div
              className="relative flex-1 flex justify-center items-center"
            >
              <img 
                src="/feedback-3.jpg"
                alt="feedback"
                className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
              />
            </div>
          </div>
        </CCarouselItem>
      </CCarousel>
    </section>
  )
}
