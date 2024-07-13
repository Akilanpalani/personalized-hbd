import {motion,useScroll,useTransform} from "framer-motion";
import { useRef } from "react";

import { Container } from "../Container"
import { Button } from "../Button"

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: videoContainerRef,
    offset: ["start end", "end end"]
  });
  const opacity = useTransform(scrollYProgress,[0,0.7,1],[1,1,0]);
  return(
    <div className="bg-background relative h-[300vh] text-white">
      <motion.div
        style={{opacity}}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full">
        <img 
          className="sticky top-0 h-screen w-full object-cover"
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          alt="hero" />
      </motion.div>
      <Container 
        className="relative z-10 pb-7 min-h-[--hero-height] flex flex-col justify-end items-start">
          <h1 className="text-5xl font-bold mb-10">
            Lorem ipsum dolor sit amet consectetur< br/> Pariatur, a!
          </h1>
        <Button className="mb-16" size="large">Large Button</Button>
          <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Container>
    </div>
  )
}