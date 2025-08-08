# 🚀 部署说明

本文档说明如何部署英语学习指南网站。

## 📋 部署方式

### 1. GitHub Pages 自动部署

本项目配置了 GitHub Actions 自动部署到 GitHub Pages。

#### 前置条件
- 将代码推送到 GitHub 仓库
- 启用 GitHub Pages 功能
- 配置 GitHub Actions 权限

#### 自动部署流程
1. 推送代码到 `main` 或 `master` 分支
2. GitHub Actions 自动触发构建
3. 构建成功后自动部署到 GitHub Pages
4. 访问 `https://[username].github.io/[repository-name]/english/`

#### Base 路径配置
本项目配置了 base 路径为 `/english/`，这意味着：
- 网站将部署在 GitHub Pages 的子目录中
- 所有内部链接都会自动添加 `/english/` 前缀
- 适用于仓库名称为 "english" 的情况

#### 手动触发部署
1. 进入 GitHub 仓库的 Actions 页面
2. 选择 "Deploy VitePress site to Pages" 工作流
3. 点击 "Run workflow" 按钮

### 2. 本地构建部署

#### 构建步骤
```bash
# 安装依赖
npm install

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

#### 部署到静态服务器
构建完成后，`docs/.vitepress/dist` 目录包含所有静态文件，可以部署到任何静态文件服务器。

### 3. Vercel 部署

#### 使用 Vercel CLI
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

#### 使用 Vercel Dashboard
1. 连接 GitHub 仓库到 Vercel
2. 配置构建命令：`npm run docs:build`
3. 配置输出目录：`docs/.vitepress/dist`
4. 配置基础路径：`/english/`
5. 自动部署

### 4. Netlify 部署

#### 使用 Netlify CLI
```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 构建
npm run docs:build

# 部署
netlify deploy --dir=docs/.vitepress/dist
```

#### 使用 Netlify Dashboard
1. 连接 GitHub 仓库到 Netlify
2. 配置构建命令：`npm run docs:build`
3. 配置发布目录：`docs/.vitepress/dist`
4. 配置基础路径：`/english/`
5. 自动部署

## 🔧 环境配置

### 环境变量
```bash
# 生产环境
NODE_ENV=production

# 自定义基础路径
VITEPRESS_BASE=/english/
```

### 构建优化
- 启用 gzip 压缩
- 配置缓存策略
- 优化图片资源
- 启用 CDN

## 📊 监控和维护

### 性能监控
- 使用 Google Analytics 跟踪访问量
- 监控页面加载速度
- 检查移动端性能

### 内容更新
- 定期更新学习内容
- 检查链接有效性
- 更新学习资源

### 备份策略
- 定期备份源代码
- 备份构建产物
- 配置自动备份

## 🛠️ 故障排除

### 常见问题

#### 构建失败
```bash
# 检查 Node.js 版本
node --version

# 清理缓存
npm cache clean --force

# 重新安装依赖
rm -rf node_modules package-lock.json
npm install
```

#### 部署失败
- 检查 GitHub Actions 日志
- 确认仓库权限设置
- 验证构建配置

#### 搜索功能异常
- 检查 VitePress 配置
- 确认搜索索引生成
- 验证中文搜索配置

#### Base 路径问题
- 确认 `base: '/english/'` 配置正确
- 检查所有内部链接是否包含正确的前缀
- 验证部署后的访问路径

### 调试技巧
```bash
# 本地调试
npm run docs:dev

# 检查构建输出
npm run docs:build --debug

# 验证配置
npx vitepress info
```

## 📞 技术支持

如果遇到部署问题，请：

1. 检查 GitHub Actions 日志
2. 查看 VitePress 官方文档
3. 提交 Issue 到项目仓库
4. 联系项目维护者

---

<div align="center">
  <p>🎉 祝你部署顺利！</p>
</div>
