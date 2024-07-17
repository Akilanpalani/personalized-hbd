import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useWindowSize } from 'react-use';
import { useRef,useMemo, useState } from 'react';

import {
  Content,
  contents,
  randomWishesSet1,
  randomWishesSet2,
} from '../../utils/CarouselContent';
import { Button } from '../Button';


export const Carousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ['start end', 'end end'],
  });

  const maximumScale = useMemo(()=>{
    const windowYRatio = height /width;
    const xScale = 1.66667;
    const yScale = xScale * (16/9) * windowYRatio;
    return Math.max(xScale, yScale);
  },[height, width]);

  // const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [3, 2.5, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [maximumScale * 1.1, maximumScale, 1]);

  const postersOpacity = useTransform(
    scrollYProgress,
    [0.64,0.66],
    [0,1]
  )
  const posterTranslateXleft = useTransform(
    scrollYProgress,
    [0.64,0.66],
    [-20,0]
  )

  const posterTranslateXright = useTransform(
    scrollYProgress,
    [0.64,0.66],
    [20,0]
  )

  const [carouselVariant,setCarouselVariant] = useState<"inactive" | "active">("inactive");
  useMotionValueEvent(scrollYProgress,"change",(progress)=>{
    if(progress >= 0.67){
      setCarouselVariant("active");
    }
    else{
      setCarouselVariant("inactive")
    }
  })


  return (
    <motion.div animate={carouselVariant} className='bg-background overflow-clip pb-8'>
      <div
        ref={carouselWrapperRef}
        className='mt-[-100vh] h-[300vh] overflow-clip'
      >
        <div className='h-screen sticky top-5 flex items-center'>
          <div className='flex gap-5 mb-5 relative left-1/2 -translate-x-1/2'>
            <motion.div 
              style={{opacity:postersOpacity, x:posterTranslateXleft}}
              className='shrink-0 w-[60vw] aspect-video md:h-[70vh] rounded-2xl overflow-clip'>
              <img
                className='w-full h-full object-cover'
                src={contents[0].poster}
                alt={contents[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className='relative shrink-0 w-[60vw] aspect-video md:h-[70vh] rounded-2xl overflow-clip'
            >
              <img
                className='w-full h-full object-cover'
                src={contents[1].poster}
                alt={contents[1].name}
              />
              <motion.div
                variants={{
                  active:{opacity:1},
                  inactive:{opacity:0},
                }}
                className='absolute left-0 bottom-0 flex items-center justify-between w-full text-white text-2xl font-bold p-5'>
                  <p>The best of the best</p>
                  <Button size="small">Click Here</Button>
              </motion.div>
            </motion.div>
            <motion.div 
              style={{opacity:postersOpacity, x:posterTranslateXright}}
              className='shrink-0 w-[60vw] aspect-video md:h-[70vh] rounded-2xl overflow-clip'>
              <img
                className='w-full h-full object-cover'
                src={contents[2].poster}
                alt={contents[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/*  Small Carousel */}
      <motion.div
        variants={{active:{opacity:1, y:0}, inactive:{opacity:0, y:20}}}
        transition={{duration:0.4}}
        className='space-y-3 -mt-[20vh] pt-10'>
        <SmallCarousel contents={randomWishesSet2} />
        <div className='[--duration:40s] [--carousel-offset:-20px]'>
          <SmallCarousel contents={randomWishesSet1} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallCarousel = ({ contents }: { contents: Content[] }) => {
  return (
    <div className='overflow-clip'>
      <div className='relative flex gap-3 animate-carousel-move left-[var(--carousel-offset,0px)]'>
        {contents.map((content, index) => (
          <div
            className='w-[23vw] aspect-video shrink-0'
            key={`${content.name}-${index}`}
          >
            <img
              className='w-full h-full object-cover rounded-2xl'
              src={content.poster}
              alt={content.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
