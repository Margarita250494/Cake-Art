"use client";

import { TServiceCard } from "@/utils/types";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const MotionImage = motion(Image);
const ServiceCard = ({ title, description, image }: TServiceCard) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [0.6, 1.05, 1]);
  return (
    <li
      key={title}
      className="w-full h-full flex flex-col justify-center items-center gap-4"
    >
      <div className="w-full justify-center items-center flex flex-col gap-2">
        <h6 className="text-[30px]">{title}</h6>
        <p className="text-center max-w-75 w-full h-full text-[20px]">
          {description}
        </p>
      </div>

      <div
        ref={ref}
        className=" h-full flex justify-center items-center overflow-hidden"
      >
        <MotionImage
          src={image}
          alt={title}
          width={300}
          height={300}
          className="aspect-auto"
          priority
          style={{ scale }}
        />
      </div>
    </li>
  );
};
export default ServiceCard;
