# 📚 英语学习指南

一个基于 VitePress 构建的系统化英语学习文档网站，提供全面的英语学习资源、方法和规划。

## ✨ 项目特色

- **🎯 系统化学习** - 从基础到进阶的完整学习体系
- **📖 内容丰富** - 涵盖语法、词汇、听说、读写各个方面
- **📋 科学规划** - 详细的学习计划和进度跟踪
- **🛠️ 实用工具** - 推荐优质的学习资源和工具
- **📱 响应式设计** - 支持各种设备访问
- **🔍 搜索功能** - 内置全文搜索功能
- **🚀 自动部署** - GitHub Actions 自动部署到 GitHub Pages

## 🚀 快速开始

### 环境要求

- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

### 构建生产版本

```bash
npm run docs:build
```

### 预览生产版本

```bash
npm run docs:preview
```

## 📁 项目结构

```
english-learning-docs/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # 自动部署工作流
│       └── ci.yml             # CI 工作流
├── docs/
│   ├── .vitepress/
│   │   └── config.js          # VitePress 配置文件
│   ├── guide/
│   │   └── plan.md            # 学习规划
│   ├── grammar/
│   │   └── index.md           # 语法基础
│   ├── vocabulary/
│   │   └── index.md           # 词汇积累
│   ├── listening-speaking/
│   │   └── index.md           # 听说训练
│   ├── reading-writing/
│   │   └── index.md           # 阅读写作
│   ├── resources/
│   │   └── index.md           # 学习资源
│   └── index.md               # 首页
├── package.json               # 项目配置
└── README.md                 # 项目说明
```

## 📚 学习内容

### 🎯 学习规划
- 总体学习目标
- 分阶段学习计划
- 每日学习安排
- 进度跟踪方法

### 📖 语法基础
- 语法学习体系
- 常见语法错误
- 语法学习方法
- 语法练习工具

### 📝 词汇积累
- 词汇量目标规划
- 词汇学习方法
- 记忆技巧
- 词汇应用练习

### 🎧 听说训练
- 听力训练方法
- 口语练习技巧
- 发音指导
- 听说工具推荐

### 📖 阅读写作
- 阅读技巧训练
- 写作基础训练
- 阅读材料推荐
- 写作工具使用

### 🛠️ 学习资源
- 书籍资源推荐
- 在线学习平台
- 移动学习应用
- 学习工具介绍

## 🎨 设计特色

### 现代化界面
- 清晰的导航结构
- 美观的页面设计
- 良好的用户体验

### 响应式布局
- 支持桌面端访问
- 适配移动端设备
- 平板端友好设计

### 内容组织
- 逻辑清晰的内容结构
- 易于查找的信息分类
- 丰富的学习资源

### 搜索功能
- 全文搜索支持
- 中文搜索优化
- 快速定位内容

## 🚀 自动部署

本项目配置了 GitHub Actions 自动部署功能：

### 部署工作流
- **触发条件**: 推送到 main/master 分支时自动触发
- **构建环境**: Ubuntu 最新版本
- **Node.js 版本**: 18.x
- **部署目标**: GitHub Pages

### CI/CD 流程
1. **代码检查**: 自动检查代码质量
2. **构建测试**: 确保网站能够正常构建
3. **链接检查**: 检查文档中的链接是否有效
4. **自动部署**: 构建成功后自动部署到 GitHub Pages

### 手动部署
你也可以在 GitHub Actions 页面手动触发部署：
1. 进入项目的 Actions 页面
2. 选择 "Deploy VitePress site to Pages" 工作流
3. 点击 "Run workflow" 按钮

## 📈 学习效果

通过系统化的学习，学习者可以：

- **建立坚实的语法基础** - 掌握英语语法规则和用法
- **积累丰富的词汇量** - 学习核心词汇和表达方式
- **提升听说能力** - 通过练习提高听力和口语水平
- **增强阅读写作** - 培养阅读理解和写作表达能力

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

### 贡献方式

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发流程

1. **本地开发**: 使用 `npm run docs:dev` 启动开发服务器
2. **代码检查**: 提交前确保代码通过 CI 检查
3. **测试构建**: 确保网站能够正常构建
4. **提交代码**: 遵循 Git 提交规范

## 📄 许可证

本项目基于 MIT 许可证开源。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

<div align="center">
  <p>🌟 如果这个项目对你有帮助，请给它一个 Star！</p>
</div>
