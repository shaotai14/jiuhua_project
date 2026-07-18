const fs = require('fs');
const path = require('path');

// 创建目录
const directories = [
  'public/images/hero',
  'public/images/culture',
  'public/images/team',
  'public/images/activities',
  'public/images/gallery',
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 生成SVG占位图片
function generateSVG(width, height, text, bgColor = '#4A7C59', textColor = '#ffffff') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
</svg>`;
}

// 图片配置
const images = [
  // 首页背景
  { path: 'public/images/hero-bg.jpg', width: 1920, height: 1080, text: '老田村风景' },

  // 文化页面
  { path: 'public/images/culture/history.jpg', width: 800, height: 600, text: '历史渊源' },
  { path: 'public/images/culture/architecture.jpg', width: 800, height: 600, text: '建筑特色' },
  { path: 'public/images/culture/folklore.jpg', width: 800, height: 600, text: '民俗文化' },
  { path: 'public/images/culture/food.jpg', width: 800, height: 600, text: '饮食文化' },

  // 团队成员
  { path: 'public/images/team/member1.jpg', width: 200, height: 200, text: '张明' },
  { path: 'public/images/team/member2.jpg', width: 200, height: 200, text: '李华' },
  { path: 'public/images/team/member3.jpg', width: 200, height: 200, text: '王芳' },
  { path: 'public/images/team/member4.jpg', width: 200, height: 200, text: '赵强' },
  { path: 'public/images/team/member5.jpg', width: 200, height: 200, text: '刘洋' },
  { path: 'public/images/team/member6.jpg', width: 200, height: 200, text: '陈静' },

  // 活动图片
  { path: 'public/images/activities/arrival1.jpg', width: 400, height: 300, text: '抵达' },
  { path: 'public/images/activities/arrival2.jpg', width: 400, height: 300, text: '安顿' },
  { path: 'public/images/activities/research1.jpg', width: 400, height: 300, text: '调研' },
  { path: 'public/images/activities/research2.jpg', width: 400, height: 300, text: '走访' },
  { path: 'public/images/activities/culture1.jpg', width: 400, height: 300, text: '文化' },
  { path: 'public/images/activities/culture2.jpg', width: 400, height: 300, text: '手工艺' },
  { path: 'public/images/activities/teaching1.jpg', width: 400, height: 300, text: '支教' },
  { path: 'public/images/activities/teaching2.jpg', width: 400, height: 300, text: '教育' },
  { path: 'public/images/activities/performance1.jpg', width: 400, height: 300, text: '文艺' },
  { path: 'public/images/activities/performance2.jpg', width: 400, height: 300, text: '汇演' },

  // 相册图片
  { path: 'public/images/gallery/village1.jpg', width: 400, height: 300, text: '村庄全景' },
  { path: 'public/images/gallery/village2.jpg', width: 400, height: 300, text: '村庄小路' },
  { path: 'public/images/gallery/village3.jpg', width: 400, height: 300, text: '古建筑' },
  { path: 'public/images/gallery/team1.jpg', width: 400, height: 300, text: '团队合影' },
  { path: 'public/images/gallery/team2.jpg', width: 400, height: 300, text: '调研活动' },
  { path: 'public/images/gallery/team3.jpg', width: 400, height: 300, text: '支教活动' },
  { path: 'public/images/gallery/culture1.jpg', width: 400, height: 300, text: '传统手工艺' },
  { path: 'public/images/gallery/culture2.jpg', width: 400, height: 300, text: '民俗活动' },
  { path: 'public/images/gallery/culture3.jpg', width: 400, height: 300, text: '美食体验' },
  { path: 'public/images/gallery/nature1.jpg', width: 400, height: 300, text: '田野风光' },
  { path: 'public/images/gallery/nature2.jpg', width: 400, height: 300, text: '山水景色' },
  { path: 'public/images/gallery/nature3.jpg', width: 400, height: 300, text: '日落景色' },
];

// 生成图片
images.forEach(image => {
  const svg = generateSVG(image.width, image.height, image.text);
  fs.writeFileSync(image.path.replace('.jpg', '.svg'), svg);
  console.log(`Generated: ${image.path.replace('.jpg', '.svg')}`);
});

console.log('All placeholder images generated!');