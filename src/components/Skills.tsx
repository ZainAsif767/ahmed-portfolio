import { motion, useInView, type Variants } from "framer-motion";
import { Monitor, Database, Server, Cloud } from "lucide-react";
import { useRef } from "react";
import { fadeIn, staggerContainer } from "../lib/animation";
import { AnimatedElement, AnimatedSection } from "./ui/animated-section";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        {
          name: "Phoenix",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/phoenix/phoenix-original.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        { name: "Tailwind CSS", icon: "/skills-logo/Tailwind CSS.png" },
        { name: "HTML", icon: "/skills-logo/html-logo.png" },
        { name: "CSS", icon: "/skills-logo/css-logo.png" },
        {
          name: "AlpineJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg",
        },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "GraphQL", icon: "/skills-logo/graphql-logo.png" },
        {
          name: "Elixir",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original.svg",
        },
        {
          name: "Ruby",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
        },
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", icon: "/skills-logo/MongoDB-logo.png" },
        { name: "MY SQL", icon: "/skills-logo/mysql-logo.png" },
        {
          name: "SQLite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
        },
        { name: "PostgreSQL", icon: "/skills-logo/PostgresSQL.png" },
        {
          name: "MariaDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original-wordmark.svg",
        },
      ],
    },
    {
      name: "Cloud & Tools",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS", icon: "/skills-logo/AWS.png" },
        { name: "Firebase", icon: "/skills-logo/firebase-logo.png" },
        { name: "Git", icon: "/skills-logo/git.png" },
        { name: "Docker", icon: "/skills-logo/Docker.png" },
        {
          name: "RabbitMQ",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
        },
        {
          name: "Apache Kafka",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
        },
      ],
    },
  ];

  // Create reference for the skill items
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [270, 180, 90, 0, 270],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container px-4 md:pl-24 relative z-10">
        <AnimatedSection>
          <AnimatedElement
            variants={fadeIn("down", 0.2) as Variants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
              My Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I've worked with a variety of technologies in the web development
              world. Here are the main areas I specialize in:
            </p>
          </AnimatedElement>

          <motion.div
            ref={containerRef}
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, index) => (
              <AnimatedElement
                key={category.name}
                variants={
                  fadeIn(
                    index % 2 === 0 ? "right" : "left",
                    index * 0.1
                  ) as Variants
                }
                className="glass rounded-xl p-6 backdrop-blur-sm relative overflow-hidden hover:shadow-lg transition-shadow duration-500"
                whileHover={{
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Decorative gradient blob that animates on hover */}
                <motion.div
                  className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.h3
                  className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    {category.icon}
                  </motion.div>
                  {category.name}
                </motion.h3>

                <motion.div
                  variants={staggerContainer(0.05, 0)}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <AnimatedElement
                      key={skill.name}
                      variants={
                        fadeIn("up", skillIndex * 0.05 + 0.2) as Variants
                      }
                      className="flex flex-col items-center gap-2 group"
                    >
                      <motion.div
                        className="glass rounded-lg p-3 w-16 h-16 flex items-center justify-center transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                          boxShadow:
                            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                          y: -5,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/skills-logo/placeholder.svg";
                          }}
                          whileHover={{ rotate: 10 }}
                          animate={
                            isInView ? { opacity: [0, 1], scale: [0.5, 1] } : {}
                          }
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.05,
                          }}
                        />
                      </motion.div>
                      <motion.span
                        className="text-sm font-medium"
                        animate={isInView ? { opacity: [0, 1] } : {}}
                        transition={{
                          duration: 0.3,
                          delay: skillIndex * 0.05 + 0.2,
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    </AnimatedElement>
                  ))}
                </motion.div>
              </AnimatedElement>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
