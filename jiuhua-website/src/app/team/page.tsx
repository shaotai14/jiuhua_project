import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { teamMembers } from "@/lib/team";

export default function TeamPage() {
  return (
    <PageLayout
      title="团队介绍"
      description="认识九华新语队的每一位成员"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* 团队介绍 */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif-cn text-3xl font-bold text-primary-800 mb-4">
                关于我们
              </h2>
              <p className="font-sans-cn text-gray-600 max-w-3xl mx-auto leading-relaxed">
                九华新语队是由一群热爱乡村文化、关心乡村振兴的大学生组成的社会实践团队。
                我们来自不同的专业，但有着共同的目标——通过实地调研和宣传推广，
                为老田村的发展贡献自己的力量。
              </p>
            </div>
          </ScrollReveal>

          {/* 团队成员 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 0.1}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <AnimatedImage
                      src={member.avatar}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-serif-cn text-xl font-semibold text-primary-800">
                      {member.name}
                    </h3>
                    <p className="font-sans-cn text-primary-600 font-medium">
                      {member.role}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans-cn text-gray-600 mb-4">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}