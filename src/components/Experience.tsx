import { motion, type Variants } from "framer-motion";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  Code,
  Award,
} from "lucide-react";
import { AnimatedSection } from "./ui/animated-section";
import { Button } from "./ui/button";
import { experiences } from "../data/Experience";

const Experience = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <AnimatedSection id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto mb-8">
            Building scalable solutions and leading development teams across
            diverse industries
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={cardVariants as Variants}
              className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-muted-foreground">
                      {experience.position}
                    </h3>
                    {experience.current && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                      {experience.company}
                    </h4>
                    {experience.companyUrl && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 p-0"
                        onClick={() =>
                          window.open(experience.companyUrl, "_blank")
                        }
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{experience.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-muted-foreground">
                    Key Achievements
                  </h5>
                </div>
                <ul className="space-y-2">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-2"
                      >
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-500 text-sm">
                          {achievement}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-semibold text-muted-foreground">
                    Technologies Used
                  </h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-muted-foreground">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-500 mb-6">
              I'm always interested in discussing new opportunities and
              challenging projects.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Let's Connect
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
