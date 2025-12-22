"use client";

import { motion, type Variants } from "framer-motion";
import { Activity, ShieldCheck, Cpu, Zap } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const features = [
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Simple Integration",
    points: [
      "Clean REST APIs",
      "Clean request and response formats",
      "Works with modern stacks and automation tools",
    ],
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Flexible Usage",
    points: [
      "Credit-based billing",
      "Scales from low-volume testing to higher request usage",
    ],
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Reliable Infrastructure",
    points: [
      "Designed for consistent performance",
      "Suitable for both testing and production workloads",
    ],
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: "Scalable Architecture",
    points: [
      "Supports high concurrency and parallel requests",
      "Custom capacity planning for enterprise use cases",
    ],
  },
];

export default function WhyBetterSection() {
  return (
    <motion.section
      className="py-12 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center mb-20 relative"
          variants={itemVariants}
        >
          Why Developers Choose Our CAPTCHA APIs?
        </motion.h2>

        {/* Feature Cards */}
        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group bg-card border border-primary rounded-3xl p-8 flex flex-col gap-6 shadow-lg transition hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary inline-block" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
