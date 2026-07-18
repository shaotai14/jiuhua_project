import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedImage from "@/components/ui/AnimatedImage";

const cultureSections = [
  {
    title: "历史渊源",
    content: "老田村位于九华山风景区，始建于唐代，距今已有千年历史。村庄依山傍水，风景秀丽，是九华山地区保存最完整的古村落之一。这里曾是古代商贾往来的重要驿站，也是文人墨客游览九华山的必经之地。",
    image: "/images/culture/history.svg",
  },
  {
    title: "建筑特色",
    content: "老田村的建筑以徽派风格为主，白墙黛瓦，马头墙高耸。村中保存着大量明清时期的古建筑，包括祠堂、庙宇、民居等。这些建筑不仅具有很高的历史价值，也是研究徽派建筑艺术的珍贵实物资料。",
    image: "/images/culture/architecture.svg",
  },
  {
    title: "民俗文化",
    content: "老田村保留着丰富的民俗文化，包括传统节庆、民间艺术、地方戏曲等。每年春节期间，村里都会举办盛大的庙会，吸引周边村民前来参加。此外，还有舞龙舞狮、唱山歌等传统活动，展现了浓厚的乡村文化氛围。",
    image: "/images/culture/folklore.svg",
  },
  {
    title: "饮食文化",
    content: "老田村的饮食文化独具特色，以山珍野味和农家菜为主。这里的食材大多来自当地，新鲜健康。特色美食包括九华素斋、山笋炖肉、土鸡煲汤等，每一道菜都蕴含着当地人的智慧和对生活的热爱。",
    image: "/images/culture/food.svg",
  },
];

export default function CulturePage() {
  return (
    <PageLayout
      title="老田村文化"
      description="探索千年古村落的历史文化底蕴"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          {cultureSections.map((section, index) => (
            <ScrollReveal key={section.title}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 mb-16 last:mb-0`}
              >
                <div className="md:w-1/2">
                  <AnimatedImage
                    src={section.image}
                    alt={section.title}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="font-serif-cn text-3xl font-bold text-primary-800 mb-4">
                    {section.title}
                  </h2>
                  <p className="font-sans-cn text-gray-600 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}