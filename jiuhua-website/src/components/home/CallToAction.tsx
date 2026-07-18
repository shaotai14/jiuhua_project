"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary-500 relative overflow-hidden">
      {/* 装饰元素 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center text-white">
            <h2 className="font-serif-cn text-4xl md:text-5xl font-bold mb-6">
              加入我们，一起探索
            </h2>
            <p className="font-sans-cn text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
              九华新语队期待与你一起，走进老田村，感受乡村文化，助力乡村振兴
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  联系我们
                </Button>
              </Link>
              <Link href="/activities">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  查看活动
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}