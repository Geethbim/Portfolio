import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface ScrollRevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}
export function ScrollReveal({
  children,
  width = '100%',
  delay = 0
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px -10% 0px'
  });
  return (
    <div
      ref={ref}
      style={{
        width,
        position: 'relative'
      }}>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 20
          },
          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: 'easeOut'
        }}>

        {children}
      </motion.div>
    </div>);

}