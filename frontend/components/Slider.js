import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    id: 1,
    image: "/../public/slider/laptop.jpg",
    title: "Laptop",
  },
  {
    id: 2,
    image: "/../public/slider/mobile.jpg",
    title: "Phone",
  },
  {
    id: 3,
    image: "/../public/slider/jackets.jpg",
    title: "Jacket",
  },
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: "ease-in",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: "ease-in",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);

    if (current === images.length - 1) {
      setCurrent(0);
      return;
    }
    setCurrent(current + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    if (current === 0) {
      setCurrent(images.length - 1);
      return;
    }
    setCurrent(current - 1);
  };

  return (
    <div className="mt-4 relative h-[450px] rounded-xl overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          alt="slides"
          key={images[current].id}
          custom={direction}
          className="relative h-[450px]"
        >
          <Image
            src={images[current].image}
            fill
            className="object-cover object-top"
            alt="slider"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className=" absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
        <div onClick={prevSlide}>Prev</div>
        <div onClick={nextSlide}>Next</div>
      </div>
    </div>
  );
};

export default Slider;
