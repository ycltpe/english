import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 递归扫描目录结构
function scanDirectory(dirPath, basePath = '') {
  const items = []
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })
      .filter(entry => {
        // 过滤掉隐藏文件和.vitepress目录
        if (entry.name.startsWith('.') || entry.name === '.vitepress') {
          return false
        }
        // 只处理目录和markdown文件
        return entry.isDirectory() || (entry.isFile() && entry.name.endsWith('.md'))
      })
      .sort((a, b) => {
        // 目录优先，然后按名称排序
        if (a.isDirectory() && !b.isDirectory()) return -1
        if (!a.isDirectory() && b.isDirectory()) return 1
        return a.name.localeCompare(b.name)
      })

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name)
      const relativePath = path.join(basePath, entry.name)
      
      if (entry.isDirectory()) {
        // 递归处理子目录
        const subItems = scanDirectory(fullPath, relativePath)
        if (subItems.length > 0) {
          items.push({
            type: 'directory',
            name: entry.name,
            path: relativePath,
            fullPath: fullPath,
            items: subItems
          })
        }
      } else {
        // 处理markdown文件
        items.push({
          type: 'file',
          name: entry.name,
          path: relativePath,
          fullPath: fullPath
        })
      }
    }
  } catch (error) {
    console.warn(`⚠️ 扫描目录 ${dirPath} 时出错:`, error.message)
  }
  
  return items
}

// 从markdown文件中提取标题
function extractTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const titleMatch = content.match(/^#\s+(.+)$/m)
    return titleMatch ? titleMatch[1] : null
  } catch (error) {
    console.warn(`⚠️ 读取文件 ${filePath} 时出错:`, error.message)
    return null
  }
}

// 将目录名转换为显示名称
function getDisplayName(dirName) {
  const nameMap = {
    'guide': '学习规划',
    'grammar': '语法基础',
    'vocabulary': '词汇积累',
    'listening-speaking': '听说训练',
    'reading-writing': '阅读写作',
    'resources': '学习资源'
  }
  return nameMap[dirName] || dirName
}

// 生成导航菜单（支持多级目录）
function generateNav() {
  const docsDir = path.resolve(__dirname, '..')
  const nav = [
    { text: '首页', link: '/' }
  ]
  
  try {
    console.log('📁 开始扫描目录结构...')
    const directoryStructure = scanDirectory(docsDir)
    
    // 处理一级目录
    for (const item of directoryStructure) {
      if (item.type === 'directory') {
        const indexPath = path.join(item.fullPath, 'index.md')
        let title = getDisplayName(item.name)
        
        // 尝试从index.md获取标题
        if (fs.existsSync(indexPath)) {
          const extractedTitle = extractTitle(indexPath)
          if (extractedTitle) {
            title = extractedTitle
            console.log(`✅ ${item.name}: 从index.md获取标题 "${title}"`)
          }
        } else {
          // 如果没有index.md，从第一个markdown文件获取标题
          const firstMdFile = item.items.find(subItem => subItem.type === 'file')
          if (firstMdFile) {
            const extractedTitle = extractTitle(firstMdFile.fullPath)
            if (extractedTitle) {
              title = extractedTitle
              console.log(`✅ ${item.name}: 从${firstMdFile.name}获取标题 "${title}"`)
            }
          }
        }
        
        nav.push({
          text: title,
          link: `/${item.name}/`
        })
      }
    }
    
    console.log('🎯 生成的导航菜单:', nav.map(item => `${item.text} -> ${item.link}`))
  } catch (error) {
    console.error('❌ 生成导航菜单时出错:', error)
  }
  
  return nav
}

// 递归生成侧边栏配置
function generateSidebarForDirectory(dirItem, basePath = '') {
  const items = []
  
  for (const item of dirItem.items) {
    if (item.type === 'file') {
      const title = extractTitle(item.fullPath) || item.name.replace('.md', '')
      const link = item.name === 'index.md' 
        ? `/${basePath}${dirItem.name}/` 
        : `/${basePath}${dirItem.name}/${item.name.replace('.md', '')}`
      
      items.push({
        text: title,
        link: link
      })
    } else if (item.type === 'directory') {
      // 递归处理子目录
      const subItems = generateSidebarForDirectory(item, `${basePath}${dirItem.name}/`)
      if (subItems.length > 0) {
        // 为子目录创建一个分组
        const groupTitle = getDisplayName(item.name)
        items.push({
          text: groupTitle,
          items: subItems
        })
      }
    }
  }
  
  return items
}

// 自动生成侧边栏配置（支持多级目录）
function generateSidebar() {
  const docsDir = path.resolve(__dirname, '..')
  const sidebar = {}
  
  try {
    console.log('📚 生成侧边栏配置...')
    const directoryStructure = scanDirectory(docsDir)
    
    // 为每个一级目录生成侧边栏配置
    for (const item of directoryStructure) {
      if (item.type === 'directory') {
        const sidebarItems = generateSidebarForDirectory(item)
        
        if (sidebarItems.length > 0) {
          sidebar[`/${item.name}/`] = [
            {
              text: getDisplayName(item.name),
              items: sidebarItems
            }
          ]
          console.log(`✅ ${item.name}: 生成${sidebarItems.length}个侧边栏项目`)
        }
      }
    }
    
    console.log('🎯 侧边栏配置生成完成')
  } catch (error) {
    console.error('❌ 生成侧边栏配置时出错:', error)
  }
  
  return sidebar
}

export default defineConfig({
  title: "英语学习指南",
  description: "系统化的英语学习资源与规划",
  lang: 'zh-CN',
  base: '/english/',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: '英语学习指南',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    nav: generateNav(),
    sidebar: generateSidebar(),
    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/ZqCGqpMXy8', ariaLabel: 'QQ 群' },
      { icon: 'wechat', link: 'https://t.me/ayuucc', ariaLabel: 'Telegram 群组' }
    ],
    outline: { label: '大纲' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 英语学习指南'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }]
  ]
})

// 导出函数供测试使用
export { generateNav, generateSidebar }
