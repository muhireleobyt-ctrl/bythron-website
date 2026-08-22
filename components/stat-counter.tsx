"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export function StatCounter({
  value,
  suffix = "",
  isDecimal = false,
  className,
}: {
  value: number;
  suffix?: string;
  isDecimal?: boolean;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 90 });
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  React.useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(isDecimal ? latest.toFixed(1) : Math.round(latest).toLocaleString());
    });
  }, [spring, isDecimal]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
      {suffix}
    </motion.span>
  );
}
