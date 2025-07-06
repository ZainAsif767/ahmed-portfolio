import { motion, type Variants } from "framer-motion";
import { staggerContainer } from "../../lib/animation";
import React, { type ReactNode } from "react";

interface AnimatedSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  ref?: React.RefObject<HTMLDivElement>;
}

export const AnimatedSection = ({
  children,
  className = "",
  staggerDelay = 0.05,
  initialDelay = 0.2,
  ref,
}: AnimatedSectionProps) => {
  return (
    <motion.section
      variants={staggerContainer(staggerDelay, initialDelay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
      ref={ref}
    >
      {children}
    </motion.section>
  );
};

interface AnimatedTextProps {
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | string;
  className?: string;
  text: string;
  animate?: boolean;
  delay?: number;
}

export const AnimatedText = ({
  tag = "p",
  className = "",
  text,
  animate = true,
  delay = 0,
}: AnimatedTextProps) => {
  const Component = motion[tag as keyof typeof motion] as React.ComponentType<{
    className?: string;
    children?: ReactNode;
    variants?: Variants;
    initial?: string;
    whileInView?: string;
    viewport?: object;
  }>;

  if (!animate) {
    return <Component className={className}>{text}</Component>;
  }

  const sentenceVariants: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.01,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
  };

  return (
    <Component
      className={className}
      variants={sentenceVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {text.split("").map((char: string, index: number) => (
        <motion.span key={`${char}-${index}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </Component>
  );
};

interface AnimatedElementProps {
  children?: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  [key: string]: unknown;
}

export const AnimatedElement = ({
  children,
  variants,
  delay = 0,
  className = "",
  ...props
}: AnimatedElementProps) => {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.5,
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={variants || defaultVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCardProps {
  variants?: Variants;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

// Export a reusable component for card-like elements with hover animations
export const AnimatedCard = ({
  variants,
  children,
  className = "",
  onClick,
}: AnimatedCardProps) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  // Simplified animation for mobile
  if (isMobile) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  // Full animations for desktop
  return (
    <motion.div
      variants={variants}
      className={className}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: unknown;
}

// Animated reveal for images
export const AnimatedImage = ({
  src,
  alt,
  className = "",
  ...props
}: AnimatedImageProps) => {
  return (
    <motion.div
      className="overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        {...props}
      />
      <motion.div
        className="absolute inset-0 bg-blue-600"
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

interface AnimatedDecorationProps {
  children: ReactNode;
  animation?: "float" | "pulse" | "rotate";
  className?: string;
  [key: string]: unknown;
}

// For decoration elements like floating shapes, spinning logos, etc.
export const AnimatedDecoration = ({
  children,
  animation = "float", // float, pulse, rotate
  className = "",
  ...props
}: AnimatedDecorationProps) => {
  const animations = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut" as const,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut" as const,
      },
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear" as const,
      },
    },
  };

  return (
    <motion.div
      className={className}
      animate={animations[animation as keyof typeof animations]}
      {...props}
    >
      {children}
    </motion.div>
  );
};
