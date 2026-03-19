<div align="center">

<img src="https://socialify.git.ci/QNquenan/Simple-Homepage/image?custom_description=%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8EVue%E7%9A%84%E7%AE%80%E7%BA%A6%E9%A3%8E%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5&description=1&font=KoHo&forks=1&issues=1&language=1&name=1&owner=1&pattern=Brick+Wall&pulls=1&stargazers=1&theme=Light" alt="Simple-Homepage" width="600"/>

<br/><br/>

> **简 报** · `2026` 年 `3` 月 `19` 日 · 第 `1` 版
>
> ═════════════════════════════════════════
>
> # 🏠 SIMPLE · HOMEPAGE
>
> ═════════════════════════════════════════
>
> ### —— 一份基于 Vue 3 的简约风个人主页，从零搭建你的数字门牌 ——

</div>

<br/>

---

## 📰 头条 · 项目速览

> **一句话总结**：用 `Vue 3` + `Vite` 打造的轻量个人主页，模块化 JSON 配置，改几行字就能变成你自己的。

| 要素 | 详情 |
| :---: | :--- |
| **作者** | 麦希屿 (Cubeyu) |
| **站点** | [techisle.top](https://techisle.top/) |
| **协议** | [MIT License](./LICENSE) |
| **仓库** | [GitHub](https://github.com/QNquenan/Simple-Homepage) |

### ✨ 核心亮点

- 🌓 **明暗双主题** — 滑块式切换，带太阳/月亮/星星/云朵动画
- ✍️ **打字机欢迎语** — 支持多句轮播，标点自动停顿，随机变速拟真
- 🌌 **粒子连线背景** — 原生 Canvas 实现，主题联动变色
- 🖱️ **自定义光标** — PC 端双层跟随光标，悬停/点击状态反馈
- 🧩 **全 JSON 配置** — 改配置即改内容，零代码上手
- 📱 **响应式适配** — 桌面端 / 平板 / 手机端三档适配
- ⏳ **实时时光条** — 今日/本周/本月/本年的进度可视化

---

## 🧱 技术架构 · 深度报道

### 技术栈一览

| 技术 | 版本 | 角色 |
| :---: | :---: | :--- |
| ![Vue](https://img.shields.io/badge/Vue-3.5+-4FC08D?logo=vuedotjs&logoColor=white) | 3.5+ | 渐进式 UI 框架 |
| ![Vite](https://img.shields.io/badge/Vite-7.1+-646CFF?logo=vite&logoColor=white) | 7.1+ | 构建工具 |
| ![Iconify](https://img.shields.io/badge/Iconify-5.0+-1769AA?logo=iconify&logoColor=white) | 5.0+ | 统一图标框架 |
| Canvas API | 原生 | 粒子背景动画 |

### 🏗️ 项目结构

```
Simple-Homepage/
├── public/                     # 静态公共资源
│   └── vite.svg
├── src/
│   ├── assets/                 # 静态资源
│   │   ├── css/                # 样式文件
│   │   └── fonts/              # 字体文件
│   ├── components/             # Vue 组件
│   │   ├── CustomCursor.vue    # 自定义双层光标
│   │   ├── LinkBtn.vue         # 外链按钮（流光特效）
│   │   ├── ParticlesBackground.vue  # Canvas 粒子背景
│   │   └── Typewriter.vue      # 打字机效果
│   ├── composables/            # 组合式函数
│   │   └── useTheme.js         # 主题管理（localStorage 持久化）
│   ├── config/                 # 🔧 可配置文件（零代码修改入口）
│   │   ├── config.json         # 个人信息
│   │   ├── linkBtn.json        # 链接按钮
│   │   ├── techStack.json      # 技术栈展示
│   │   ├── todo.json           # 待办事项
│   │   └── typewriter.json     # 打字机文本
│   ├── views/
│   │   └── MainCard.vue        # 主卡片页面
│   ├── App.vue                 # 根组件
│   ├── main.js                 # 入口文件
│   └── style.css               # 全局样式
├── index.html
├── package.json
├── vite.config.js
├── LICENSE
└── README.md
```

---

## 🎨 组件特写 · 交互细节

### 🌗 主题切换器

滑块式设计，内置 **太阳 / 月亮 / 星星 / 云朵** 四层动画元素。切换时所有元素联动过渡，主题偏好通过 `localStorage` 持久化，刷新不丢失。

### ✍️ 打字机组件

- 多句文本循环轮播
- 打字速度随机浮动 (±30%)，模拟真人节奏
- 标点符号自动停顿（2x 慢速）
- 空格加速过渡（0.8x 速度）
- 光标闪烁 + 完成脉冲动画

### 🌌 粒子背景

纯 Canvas 2D 手写实现，50 个粒子随机运动并在 150px 范围内自动连线。通过 `MutationObserver` 监听 `body[theme]` 属性变化，实时切换粒子颜色。

### 🖱️ 自定义光标

双层结构：外圈（20px 描边环）+ 内核（8px 实心点）。外圈直接跟随鼠标，内核以 0.2 插值系数缓动跟随。悬停交互元素时外圈放大、内核缩小；点击时两者同时缩小。移动端自动隐藏。

### 🔘 链接按钮

渐变叠加层 + 流光扫过效果（hover 触发）。图标悬停旋转放大 + 辉光，文字右移偏移。按钮悬停上浮 4px 并放大 1.03 倍，搭配双层阴影营造立体感。

---

## 🔧 操作指南 · 开箱即用

### 📦 快速部署三步走

> **第一步** — 拉取代码

```bash
git clone https://github.com/QNquenan/Simple-Homepage.git
cd Simple-Homepage
```

> **第二步** — 安装依赖

```bash
npm install
```

> **第三步** — 启动开发服务器

```bash
npm run dev
```

> 访问终端输出的地址（默认 `http://localhost:5173`），即可预览。

### 🏭 生产构建

```bash
npm run build      # 构建生产版本
npm run preview    # 预览生产构建
```

---

## 📋 配置手册 · 定制你的主页

> 所有配置文件位于 `src/config/` 目录，**改 JSON 即改页面**，无需触碰 Vue 代码。

### 📌 `config.json` — 个人名片

```json
{
  "name": "你的名字",
  "age": "0几年",
  "zodiac": "♈️",
  "avatarUrl": "头像链接",
  "emjoi": "😋",
  "infoTags": {
    "sex": "性别",
    "company": "公司/组织",
    "province": "省份",
    "github": "GitHub 用户名"
  },
  "professions": ["职业标签1", "职业标签2"]
}
```

### 🔗 `linkBtn.json` — 快捷导航

```json
{
  "linkBtn": [
    {
      "icon": "mdi:github",
      "text": "按钮文字",
      "color": "#2b2b2b",
      "url": "https://github.com"
    }
  ]
}
```

### 🛠️ `techStack.json` — 技术栈展示

```json
{
  "techStack": [
    { "icon": "material-icon-theme:vue", "name": "Vue" },
    { "icon": "logos:python", "name": "Python" }
  ]
}
```

### 📝 `todo.json` — 个人计划

```json
{
  "todoList": [
    { "text": "学习新技能", "checked": false },
    { "text": "写一篇博客", "checked": true }
  ]
}
```

### ⌨️ `typewriter.json` — 打字机文本

```json
[
  "你好鸭，欢迎来到我的主页！",
  "Code Change World！"
]
```

---

## 🔮 版本路线图

- [x] 响应式布局
- [x] 明暗主题切换
- [x] 打字机效果
- [x] 粒子背景
- [x] 自定义光标
- [x] 时光进度条
- [x] 模块化 JSON 配置
- [ ] 多语言支持 (i18n)
- [ ] SEO 优化增强
- [ ] PWA 离线支持

---

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 发起 Pull Request

---

<div align="center">

> ═════════════════════════════════════════
>
> **© 2026 麦希屿 (Cubeyu)** · Published under the **MIT License**
>
> Made with ❤️ by [QNquenan](https://github.com/QNquenan)
>
> ═════════════════════════════════════════

</div>
