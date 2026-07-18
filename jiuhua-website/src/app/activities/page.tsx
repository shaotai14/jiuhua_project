import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { activities } from "@/lib/activities";

export default function ActivitiesPage() {
  return (
    <PageLayout
      title="活动日志"
      description="记录三下乡社会实践的点点滴滴"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* 时间线 */}
          <div className="relative">
            {/* 时间线线条 */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2" />

            {activities.map((activity, index) => (
              <ScrollReveal key={activity.id}>
                <div
                  className={`relative mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                  }`}
                >
                  {/* 时间线节点 */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 border-4 border-white shadow-md" />

                  <Card
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-primary-600 font-medium">
                          {activity.date}
                        </span>
                        <div className="flex gap-2">
                          {activity.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-primary-50 text-primary-600 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="font-serif-cn text-xl font-semibold text-primary-800">
                        {activity.title}
                      </h3>
                      <p className="font-sans-cn text-gray-600">
                        {activity.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="font-sans-cn text-gray-600 leading-relaxed mb-4">
                        {activity.content}
                      </p>
                      {activity.images.length > 0 && (
                        <div className="grid grid-cols-2 gap-4">
                          {activity.images.map((image, imgIndex) => (
                            <AnimatedImage
                              key={imgIndex}
                              src={image}
                              alt={`${activity.title} - 图片 ${imgIndex + 1}`}
                              width={400}
                              height={300}
                              className="rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}