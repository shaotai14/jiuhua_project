import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <PageLayout
      title="相册"
      description="记录三下乡社会实践的精彩瞬间"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <GalleryGrid />
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}