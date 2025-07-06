import { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import {
  AnimatedSection,
  AnimatedElement,
  AnimatedCard,
} from "./ui/animated-section";
import { Button } from "./ui/button";
import { fadeIn } from "../lib/animation";
import { ChevronLeft, ChevronRight, Quote, Linkedin } from "lucide-react";

const testimonials = [
  {
    id: 0,
    name: "Syed Zain Asif",
    position: "Software Engineer, IOMechs",
    relationship: "Co-worker",
    date: "Jan 2025",
    linkedin: "https://www.linkedin.com/in/zainasif767",
    image:
      "https://ui-avatars.com/api/?name=Zain+Asif&background=0D8ABC&color=fff",
    content:
      "I've worked with Ahmed on multiple projects and he's always been a great asset to the team. He's a quick learner and always willing to take on new challenges. He's also a great problem solver and always finds a way to get the job done. I highly recommend Ahmed for any project you have!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <AnimatedSection
      id="testimonials"
      className="py-16 md:py-24 relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 left-5 md:left-20 w-40 h-40 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-5 md:right-20 w-60 h-60 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container px-4" ref={sectionRef}>
        <AnimatedElement
          variants={fadeIn("down", 0.2) as Variants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
            What People Say
          </h2>
          <div className="w-40 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Testimonials from professionals I've had the pleasure of working
            with throughout my career.
          </p>
        </AnimatedElement>

        <div className="max-w-4xl mx-auto">
          <AnimatedCard
            variants={fadeIn("left", 0.3) as Variants}
            key={currentTestimonial.id}
            className="glass p-8 rounded-xl relative overflow-hidden min-h-[450px] md:min-h-[300px] flex flex-col"
          >
            <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-600/20 dark:text-blue-600/30" />

            <div className="flex flex-col md:flex-row gap-6 items-start flex-grow">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-600/20">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <div className="flex-grow">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-1 flex items-center">
                    {currentTestimonial.name}
                    <a
                      href={currentTestimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex ml-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                    {currentTestimonial.date} •{" "}
                    {currentTestimonial.relationship}
                  </p>

                  <div className="prose prose-sm dark:prose-invert max-w-none overflow-y-auto max-h-[300px] md:max-h-[200px] pr-2 custom-scrollbar">
                    {currentTestimonial.content
                      .split("\n\n")
                      .map((paragraph, i) => (
                        <p
                          key={i}
                          className="mb-3 text-gray-700 dark:text-gray-300"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedCard>

          <div className="flex justify-center items-center mt-6 gap-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="relative overflow-hidden rounded-full h-10 w-10 border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <motion.div
                  className="absolute inset-0 bg-blue-600/10 -z-10 opacity-0 rounded-full"
                  whileHover={{ opacity: 1 }}
                />
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </motion.div>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-6 bg-blue-600"
                      : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-blue-400 dark:hover:bg-blue-800"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex === testimonials.length - 1}
                className="relative overflow-hidden rounded-full h-10 w-10 border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <motion.div
                  className="absolute inset-0 bg-blue-600/10 -z-10 opacity-0 rounded-full"
                  whileHover={{ opacity: 1 }}
                />
                <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
