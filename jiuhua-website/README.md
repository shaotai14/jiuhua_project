# 九华新语三下乡网站

安徽池州市九华老田村三下乡社会实践网站，展示老田村文化和九华新语队风采。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **构建工具**: Turbopack
- **样式**: Tailwind CSS
- **动效**: Framer Motion
- **字体**: 思源宋体/思源黑体 + Playfair Display/Lora
- **部署**: 自托管服务器或Vercel

## 功能特性

### 页面结构
1. **首页** - 展示老田村风光和团队精神
2. **老田村文化** - 介绍当地文化、历史、风俗
3. **团队介绍** - 九华新语队成员介绍
4. **活动日志** - 三下乡活动记录
5. **相册** - 活动照片展示
6. **联系我们** - 联系方式和表单

### 设计风格
- **主色调**: 绿色田野风（深绿、浅绿、米白、土黄）
- **字体**: 中文使用思源宋体/思源黑体，英文使用Playfair Display/Lora
- **布局**: 卡片式布局，大量留白，自然元素装饰

### 动效设计
- 页面切换淡入淡出
- 滚动视差效果
- 卡片悬停动画
- 图片懒加载和淡入效果
- 导航栏滚动变化
- 粒子效果（首页）

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发环境
```bash
npm run dev
```
访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm run start
```

## 项目结构

```
jiuhua-website/
├── src/
│   ├── app/                    # 页面路由
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 首页
│   │   ├── culture/            # 老田村文化
│   │   ├── team/               # 团队介绍
│   │   ├── activities/         # 活动日志
│   │   ├── gallery/            # 相册
│   │   └── contact/            # 联系我们
│   ├── components/             # 组件
│   │   ├── layout/             # 布局组件
│   │   ├── home/               # 首页组件
│   │   ├── ui/                 # UI组件
│   │   ├── effects/            # 特效组件
│   │   ├── gallery/            # 相册组件
│   │   └── contact/            # 联系组件
│   ├── lib/                    # 工具函数和数据
│   │   ├── utils.ts            # 工具函数
│   │   ├── animations.ts       # 动画配置
│   │   ├── team.ts             # 团队数据
│   │   ├── activities.ts       # 活动数据
│   │   └── gallery.ts          # 相册数据
│   └── styles/                 # 样式文件
│       ├── globals.css         # 全局样式
│       └── fonts.css           # 字体配置
├── public/                     # 静态资源
│   └── images/                 # 图片资源
├── scripts/                    # 脚本文件
│   └── generate-placeholders.js # 生成占位图片
└── package.json                # 项目配置
```

## 自定义配置

### 修改颜色主题
编辑 `src/app/globals.css` 文件中的CSS变量：

```css
:root {
  /* 主色调 */
  --primary-500: #2D5016;
  
  /* 辅色调 */
  --secondary-500: #4A7C59;
  
  /* 点缀色 */
  --accent-500: #D4A574;
  
  /* 背景色 */
  --background: #F5F5DC;
}
```

### 修改字体
编辑 `src/styles/fonts.css` 文件：

```css
:root {
  --font-serif-cn: 'Noto Serif SC', serif;
  --font-sans-cn: 'Noto Sans SC', sans-serif;
  --font-serif-en: 'Playfair Display', serif;
  --font-sans-en: 'Lora', serif;
}
```

### 添加真实图片
将真实图片放入 `public/images/` 目录，并更新相应的数据文件：
- `src/lib/team.ts` - 团队成员头像
- `src/lib/activities.ts` - 活动图片
- `src/lib/gallery.ts` - 相册图片

## 部署

### 自托管服务器
1. 构建生产版本：`npm run build`
2. 启动生产服务器：`npm run start`
3. 使用PM2管理进程：`pm2 start ecosystem.config.js`

### Vercel部署
1. 连接GitHub仓库
2. 自动构建和部署
3. 配置自定义域名

## 后续优化

1. **后端功能** (如需要)
   - 添加API路由处理表单提交
   - 集成无服务器数据库
   - 添加内容管理系统

2. **SEO优化**
   - 添加元数据和Open Graph标签
   - 生成站点地图
   - 优化图片alt文本

3. **性能优化**
   - 图片懒加载
   - 代码分割
   - 缓存策略

## 许可证

© 2024 九华新语队. 保留所有权利.