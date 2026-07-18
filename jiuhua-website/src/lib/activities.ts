export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
  images: string[];
  tags: string[];
}

export const activities: Activity[] = [
  {
    id: "1",
    title: "抵达老田村",
    date: "2024-07-15",
    description: "九华新语队抵达安徽池州市九华老田村，开始三下乡社会实践活动",
    content: "经过长途跋涉，我们终于抵达了老田村。村里的干部和村民们热情地接待了我们，为我们安排了住宿。放下行李后，我们迫不及待地开始了第一次村庄漫步，感受这里的自然风光和人文气息。",
    images: ["/images/activities/arrival1.svg", "/images/activities/arrival2.svg"],
    tags: ["抵达", "安顿"],
  },
  {
    id: "2",
    title: "村庄调研",
    date: "2024-07-16",
    description: "深入调研老田村的历史文化、经济发展和社会状况",
    content: "今天，我们分组进行了村庄调研。通过走访村民、查阅资料、实地考察等方式，我们对老田村的历史文化、经济发展、社会状况有了更深入的了解。村民们热情地向我们讲述着村庄的故事，让我们受益匪浅。",
    images: ["/images/activities/research1.svg", "/images/activities/research2.svg"],
    tags: ["调研", "走访"],
  },
  {
    id: "3",
    title: "文化体验",
    date: "2024-07-17",
    description: "体验老田村的传统文化，学习当地手工艺",
    content: "今天，我们有幸体验了老田村的传统文化。在村民的指导下，我们学习了当地的手工艺制作，感受了传统文化的魅力。这些传统技艺代代相传，是老田村宝贵的文化遗产。",
    images: ["/images/activities/culture1.svg", "/images/activities/culture2.svg"],
    tags: ["文化", "手工艺"],
  },
  {
    id: "4",
    title: "支教活动",
    date: "2024-07-18",
    description: "为村里的孩子们开展支教活动，传播知识",
    content: "今天，我们为村里的孩子们开展了支教活动。通过趣味课堂、游戏互动等方式，我们向孩子们传播了知识，也收获了他们的纯真和快乐。看到孩子们求知的眼神，我们深感责任重大。",
    images: ["/images/activities/teaching1.svg", "/images/activities/teaching2.svg"],
    tags: ["支教", "教育"],
  },
  {
    id: "5",
    title: "文艺汇演",
    date: "2024-07-19",
    description: "与村民共同举办文艺汇演，增进交流",
    content: "今晚，我们与村民共同举办了一场文艺汇演。我们表演了精心准备的节目，村民们也展示了他们的才艺。现场气氛热烈，欢声笑语不断，我们与村民之间的距离更近了。",
    images: ["/images/activities/performance1.svg", "/images/activities/performance2.svg"],
    tags: ["文艺", "交流"],
  },
];