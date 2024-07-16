import { useScroll, useTransform, motion } from 'framer-motion';
import { useWindowSize } from 'react-use';
import { useRef,useMemo } from 'react';

import {
  Content,
  contents,
  randomWishesSet1,
  randomWishesSet2,
} from '../../utils/CarouselContent';


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


  return (
    <div className='bg-background overflow-clip pb-8'>
      <div
        ref={carouselWrapperRef}
        className='mt-[-100vh] h-[300vh] overflow-clip'
      >
        <div className='h-screen sticky top-0 flex items-center'>
          <div className='flex gap-5 mb-5 relative left-1/2 -translate-x-1/2'>
            <div className='shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip'>
              <img
                className='w-full h-full object-cover'
                src={contents[0].poster}
                alt={contents[0].name}
              />
            </div>
            <motion.div
              style={{ scale }}
              className='shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip'
            >
              <img
                className='w-full h-full object-cover'
                src={contents[1].poster}
                alt={contents[1].name}
              />
            </motion.div>
            <div className='shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip'>
              <img
                className='w-full h-full object-cover'
                src={contents[2].poster}
                alt={contents[2].name}
              />
            </div>
          </div>
        </div>
      </div>

      {/*  Small Carousel */}
      <div className='space-y-3'>
        <SmallCarousel contents={randomWishesSet2} />
        <div className='[--duration:68s] [--carousel-offset:-32px]'>
          <SmallCarousel contents={randomWishesSet1} />
        </div>
      </div>
    </div>
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
