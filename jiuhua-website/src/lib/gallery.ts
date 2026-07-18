export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/village1.svg",
    alt: "老田村全景",
    category: "村庄风光",
    description: "俯瞰老田村，白墙黛瓦的徽派建筑错落有致",
  },
  {
    id: "2",
    src: "/images/gallery/village2.svg",
    alt: "村庄小路",
    category: "村庄风光",
    description: "蜿蜒的村间小路，两旁是绿意盎然的田野",
  },
  {
    id: "3",
    src: "/images/gallery/village3.svg",
    alt: "古建筑",
    category: "村庄风光",
    description: "保存完好的明清古建筑，展现徽派建筑魅力",
  },
  {
    id: "4",
    src: "/images/gallery/team1.svg",
    alt: "团队合影",
    category: "团队风采",
    description: "九华新语队全体成员在村口合影留念",
  },
  {
    id: "5",
    src: "/images/gallery/team2.svg",
    alt: "调研活动",
    category: "团队风采",
    description: "团队成员正在进行村庄调研",
  },
  {
    id: "6",
    src: "/images/gallery/team3.svg",
    alt: "支教活动",
    category: "团队风采",
    description: "为村里的孩子们开展趣味课堂",
  },
  {
    id: "7",
    src: "/images/gallery/culture1.svg",
    alt: "传统手工艺",
    category: "文化体验",
    description: "学习当地传统手工艺制作",
  },
  {
    id: "8",
    src: "/images/gallery/culture2.svg",
    alt: "民俗活动",
    category: "文化体验",
    description: "参与村民的传统民俗活动",
  },
  {
    id: "9",
    src: "/images/gallery/culture3.svg",
    alt: "美食体验",
    category: "文化体验",
    description: "品尝地道的农家美食",
  },
  {
    id: "10",
    src: "/images/gallery/nature1.svg",
    alt: "田野风光",
    category: "自然风光",
    description: "金黄的稻田在阳光下闪闪发光",
  },
  {
    id: "11",
    src: "/images/gallery/nature2.svg",
    alt: "山水景色",
    category: "自然风光",
    description: "九华山下的秀丽山水",
  },
  {
    id: "12",
    src: "/images/gallery/nature3.svg",
    alt: "日落景色",
    category: "自然风光",
    description: "夕阳下的老田村，宁静而美丽",
  },
];

export const categories = [
  "全部",
  "村庄风光",
  "团队风采",
  "文化体验",
  "自然风光",
];