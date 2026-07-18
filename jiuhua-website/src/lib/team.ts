export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  skills: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "张明",
    role: "队长",
    description: "负责团队整体规划和协调，具有丰富的社会实践经验",
    avatar: "/images/team/member1.svg",
    skills: ["领导力", "项目管理", "沟通协调"],
  },
  {
    id: "2",
    name: "李华",
    role: "副队长",
    description: "协助队长工作，负责活动策划和执行",
    avatar: "/images/team/member2.svg",
    skills: ["活动策划", "文案写作", "摄影摄像"],
  },
  {
    id: "3",
    name: "王芳",
    role: "宣传组组长",
    description: "负责团队宣传工作，包括新媒体运营和内容创作",
    avatar: "/images/team/member3.svg",
    skills: ["新媒体运营", "平面设计", "视频剪辑"],
  },
  {
    id: "4",
    name: "赵强",
    role: "调研组组长",
    description: "负责乡村调研工作，收集和分析数据",
    avatar: "/images/team/member4.svg",
    skills: ["数据分析", "问卷调查", "访谈技巧"],
  },
  {
    id: "5",
    name: "刘洋",
    role: "后勤组组长",
    description: "负责团队后勤保障，确保活动顺利进行",
    avatar: "/images/team/member5.svg",
    skills: ["后勤管理", "物资采购", "安全保障"],
  },
  {
    id: "6",
    name: "陈静",
    role: "财务",
    description: "负责团队财务管理，确保资金使用合理透明",
    avatar: "/images/team/member6.svg",
    skills: ["财务管理", "预算编制", "账目记录"],
  },
];