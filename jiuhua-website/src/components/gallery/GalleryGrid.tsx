"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { galleryImages, categories } from "@/lib/gallery";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredImages =
    activeCategory === "全部"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  return (
    <div>
      {/* 分类筛选 */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary-500 text-white"
                : "bg-white text-gray-600 hover:bg-primary-50"
            }`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* 图片网格 */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <AnimatedImage
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold">{image.alt}</p>
                    {image.description && (
                      <p className="text-white/80 text-sm mt-1">
                        {image.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}