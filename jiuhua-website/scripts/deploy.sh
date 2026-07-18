#!/bin/bash

# 九华新语三下乡网站部署脚本

echo "开始部署九华新语三下乡网站..."

# 检查Node.js版本
echo "检查Node.js版本..."
node -v

# 安装依赖
echo "安装依赖..."
npm install

# 构建项目
echo "构建项目..."
npm run build

# 检查构建结果
if [ $? -eq 0 ]; then
    echo "构建成功！"
else
    echo "构建失败，请检查错误信息。"
    exit 1
fi

# 启动生产服务器
echo "启动生产服务器..."
echo "网站将在 http://localhost:3000 运行"
echo "按 Ctrl+C 停止服务器"
npm run start