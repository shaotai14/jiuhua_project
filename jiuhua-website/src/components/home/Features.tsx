"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "乡村文化",
    description: "探索老田村悠久的历史文化，感受传统与现代的交融",
    icon: "🏛️",
    color: "bg-primary-100 text-primary-600",
  },
  {
    title: "自然风光",
    description: "领略九华山下的田园风光，体验大自然的宁静与美好",
    icon: "🌿",
    color: "bg-secondary-100 text-secondary-600",
  },
  {
    title: "社会实践",
    description: "记录三下乡活动的点点滴滴，见证青年学子的成长",
    icon: "📚",
    color: "bg-accent-100 text-accent-600",
  },
  {
    title: "乡村振兴",
    description: "助力老田村发展，为乡村建设贡献青春力量",
    icon: "🏘️",
    color: "bg-primary-100 text-primary-600",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif-cn text-4xl md:text-5xl font-bold text-primary-800 mb-4">
              走进老田村
            </h2>
            <p className="font-sans-cn text-lg text-gray-600 max-w-2xl mx-auto">
              这里有深厚的文化底蕴，有美丽的自然风光，有热情的村民，有我们青春的足迹
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-serif-cn text-xl font-semibold text-primary-800 mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans-cn text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}