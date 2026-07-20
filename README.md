<div align="center">
<br/><br/>

> **水 墨 小 筑** · `2026` 年 · 第 `2` 版
>
> ═════════════════════════════════════════
>
> # 🏠 SIMPLE · HOMEPAGE
>
> ═════════════════════════════════════════
>
> ### —— 一份基于 Vue 3 的水墨丹青风格个人主页，焦浓重淡清，一笔一境界 ——

</div>

<br/>

---

## 📰 头条 · 项目速览

> **一句话总结**：用 `Vue 3` + `Vite` 打造的轻量个人主页，纯水墨丹青风格，五色墨韵（焦、浓、重、淡、清），朱砂印章点缀，宣纸为底，山水为屏。全 JSON 模块化配置，改几行字，便是你的一方天地。

| 要素 | 详情 |
| :---: | :--- |
| **作者** | cubeyu · 麦希屿 |
| **站点** | [techisle.top](https://techisle.top/) |
| **协议** | [MIT License](./LICENSE) |
| **仓库** | [GitHub](https://github.com/cubeyuu/Simple-Homepage) |

### ✨ 核心亮点

- 🌓 **日月双主题** — 日为宣纸（米白），夜为碑拓（墨蓝），朱砂印泥贯穿始终
- 🎨 **五色墨韵** — 焦、浓、重、淡、清，传统水墨五色系统
- 🏔️ **山水长卷** — 远山层叠，云雾飘渺，飞鸟翩跹，扁舟一叶，纯 CSS 水墨晕染
- 🖋️ **朱砂墨点光标** — PC 端朱红点 + 墨色拖尾，落笔有痕
- 📜 **卷轴形制** — 主卡片如展开的宣纸卷轴，边角水墨装饰（剑、笔、竹、梅）
- 🪨 **闲章点缀** — 朱砂闲章散落其间，印文"墨"字，古意盎然
- ✍️ **笔墨打字机** — 语录渐显如毛笔落纸，古诗词与名言交替
- 🧩 **全 JSON 配置** — 改配置即改内容，零代码上手
- 📱 **响应式适配** — 桌面端 / 平板 / 手机端三档适配
- ⏳ **时光进度条** — 今日/本周/本月/本年的墨色进度可视化
- 🛠️ **代码规范** — ESLint + Prettier 双剑合璧，代码品质有保障

---

## 🧱 技术架构 · 深度报道

### 技术栈一览

| 技术 | 版本 | 角色 |
| :---: | :---: | :--- |
| ![Vue](https://img.shields.io/badge/Vue-3.5+-4FC08D?logo=vuedotjs&logoColor=white) | 3.5+ | 渐进式 UI 框架 |
| ![Vite](https://img.shields.io/badge/Vite-7.1+-646CFF?logo=vite&logoColor=white) | 7.1+ | 构建工具 |
| ![Iconify](https://img.shields.io/badge/Iconify-5.0+-1769AA?logo=iconify&logoColor=white) | 5.0+ | 统一图标框架 |
| ![ESLint](https://img.shields.io/badge/ESLint-10.x-4B32C3?logo=eslint&logoColor=white) | 10+ | 代码检查 |
| ![Prettier](https://img.shields.io/badge/Prettier-3.x-F7B93E?logo=prettier&logoColor=white) | 3.x | 代码格式化 |
| 纯 CSS 水墨 | 原生 | 山水背景 + 全部装饰元素 |

### 🏗️ 项目结构

```
Simple-Homepage/
├── public/                     # 静态公共资源
│   ├── icons/tech/             # 技术栈图标
│   ├── bg-inkwash.png          # 水墨山水背景图
│   └── favicon.ico
├── src/
│   ├── assets/                 # 静态资源
│   │   ├── css/                # 样式文件
│   │   │   ├── App.css         # 宣纸纹理、链接高亮等
│   │   │   └── MainCard.css    # 主卡片核心样式
│   │   └── fonts/              # 字体文件（钉钉进步体）
│   ├── components/             # Vue 组件
│   │   ├── CustomCursor.vue    # 朱砂墨点光标
│   │   ├── Header.vue          # 头部（头像 + 问候 + 标签）
│   │   ├── LinkBtn.vue         # 水墨风格链接按钮
│   │   ├── ParticlesBackground.vue  # 水墨山水背景
│   │   ├── TechStack.vue       # 技术栈展示
│   │   ├── TimeProgress.vue    # 时光进度条
│   │   ├── TodoList.vue        # 待办事项列表
│   │   └── Typewriter.vue      # 打字机效果
│   ├── composables/            # 组合式函数
│   │   └── useTheme.js         # 主题管理（localStorage 持久化）
│   ├── config/                 # 🔧 可配置文件（零代码修改入口）
│   │   ├── config.json         # 个人信息
│   │   ├── linkBtn.json        # 链接按钮
│   │   ├── techStack.json      # 技术栈展示
│   │   ├── todo.json           # 待办事项
│   │   └── typewriter.json     # 打字机文语录
│   ├── views/
│   │   └── MainCard.vue        # 主卡片页面
│   ├── App.vue                 # 根组件
│   ├── main.js                 # 入口文件
│   └── style.css               # 全局样式 + 主题变量
├── index.html
├── package.json
├── vite.config.js
├── .eslintrc.json
├── .prettierrc
├── eslint.config.cjs
├── 项目改动描述.md              # 改动历史记录
├── LICENSE
└── README.md
```

---

## 🎨 设计语言 · 水墨丹青

### 五色墨韵系统

以传统中国画"墨分五色"为设计基石：

| 墨色 | 色值（亮色） | 用途 |
| :---: | :---: | :--- |
| **焦墨** | `#0d0d0d` | 标题、重点文字 |
| **浓墨** | `#1a1a1a` | 正文文字 |
| **重墨** | `#2a2a2a` | 次要文字 |
| **淡墨** | `#4a4a4a` | 辅助文字 |
| **清墨** | `#6a6a6a` | 占位、提示文字 |

### 朱砂印泥

贯穿双主题的点睛之色：

- 亮色模式：`#9c2c2c`（沉稳朱砂）
- 暗色模式：`#c94a3f`（温润印泥）

用于：印章、链接、进度点、按钮点缀。

### 双主题意境

| 主题 | 底色 | 意境 |
| :---: | :--- | :--- |
| ☀️ **日·宣纸** | `#f7f3eb` 米白宣纸 | 日间展卷，墨香四溢 |
| 🌙 **夜·碑拓** | `#0a0e14` 墨蓝深靛 | 夜读碑帖，星月相伴 |

---

## 🏔️ 组件特写 · 水墨韵味

### 🌗 日月主题切换

极简"日/月"文字按钮，一键切换宣纸与碑拓。主题偏好通过 `localStorage` 持久化，刷新不丢失。切换时背景、文字、卡片、装饰元素同步过渡，自然如昼夜交替。

### ✍️ 笔墨打字机

- 多句文本循环轮播（古诗词 + 名言）
- 打字速度自然浮动，模拟真人笔意
- 墨色渐显效果，如毛笔落纸晕染
- 笔尖闪烁 + 完成脉冲

### 🏔️ 水墨山水背景

远山层叠（水墨长卷背景图），云雾飘渺流动，飞鸟一字队形掠过，扁舟一叶随波起伏。左下角一方"墨"字闲章，古意盎然。

**暗色模式**：星月当空，星辉闪烁，山水压暗如夜读碑拓。

### 🖋️ 朱砂墨点光标

双层结构：朱红点（笔锋落点）+ 墨色拖尾（笔意残留）。悬停交互元素时晕染扩散；点击时如落印收锋。移动端自动隐藏。

### 📜 卷轴主卡片

主卡片如展开的宣纸卷轴：

- **四角装饰**：剑（左上）、笔（右上）、竹（左下）、梅（右下），水墨写意
- **边角印章**：朱砂闲章散落，如手卷钤印
- **竖排题字**：左右两侧竖排古诗词装饰（"山不在高，有仙则名"等）
- **墨色分割线**：板块间以毛笔笔触分割，非生硬直线
- **宣纸纹理**：淡噪点模拟宣纸质感

### ⏳ 时光进度条

今日 / 本周 / 本月 / 本年 四重进度，墨色渐变填充，朱砂红点标记当前位置。时间如流水，墨色渐浓。

### 🛠️ 技术栈展示

技术图标默认去饱和处理，悬停时恢复原色，如墨色中渐现真容。

### 🔘 水墨链接按钮

细墨边 + 朱砂印泥 hover 效果，点击时如印章盖下（微缩 + 晕染）。

---

## 🔧 操作指南 · 开箱即用

### 📦 快速部署三步走

> **第一步** — 拉取代码

```bash
git clone https://github.com/cubeyuu/Simple-Homepage.git
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

> 访问终端输出的地址（默认 `http://localhost:5173`），即可预览水墨小筑。

### 🏭 生产构建

```bash
npm run build      # 构建生产版本
npm run preview    # 预览生产构建
```

### ✅ 代码检查与格式化

```bash
npm run lint       # ESLint 代码检查
npm run format     # Prettier 自动格式化
```

---

## 📋 配置手册 · 定制你的水墨小筑

> 所有配置文件位于 `src/config/` 目录，**改 JSON 即改页面**，无需触碰 Vue 代码。

### 📌 `config.json` — 个人名片

```json
{
  "name": "麦希屿",
  "age": "18",
  "zodiac": "白羊",
  "avatarUrl": "头像链接",
  "infoTags": {
    "sex": "男",
    "company": "科技岛屿",
    "province": "中国",
    "github": "cubeyu"
  },
  "professions": ["我的世界", "AI应用开发"]
}
```

### 🔗 `linkBtn.json` — 快捷导航

支持最多 3 列 × 4 行（12 个按钮）：

```json
{
  "linkBtn": [
    {
      "icon": "mdi:github",
      "text": "Github",
      "color": "#2b2b2b",
      "url": "https://github.com/cubeyuu"
    }
  ]
}
```

图标来自 [Iconify](https://icon-sets.iconify.design/)，填入图标名即可。

### 🛠️ `techStack.json` — 技术栈展示

```json
{
  "techStack": [
    { "icon": "vscode-icons:file-type-vue", "name": "Vue" },
    { "icon": "vscode-icons:file-type-python", "name": "Python" }
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

### ⌨️ `typewriter.json` — 打字机语录

古诗词、名言警句，一行为一句：

```json
[
  "山不在高，有仙则名",
  "水不在深，有龙则灵",
  "长风破浪会有时，直挂云帆济沧海"
]
```

---

## 🔮 版本路线图

### ✅ 已完成

- [x] 响应式布局（桌面/平板/手机三档）
- [x] 日月双主题切换（宣纸 / 碑拓）
- [x] 五色墨韵设计系统
- [x] 水墨山水背景（远山、云雾、飞鸟、扁舟）
- [x] 朱砂墨点光标
- [x] 卷轴形制主卡片 + 四角装饰
- [x] 时光进度条
- [x] 打字机效果（古诗词 + 名言）
- [x] 模块化 JSON 配置
- [x] ESLint + Prettier 代码规范
- [x] SEO meta 标签
- [x] 组件拆分（Header/TodoList/TechStack/TimeProgress）

### 🔮 规划中

- [ ] 多语言支持 (i18n)
- [ ] PWA 离线支持
- [ ] 字体子集化（减小体积）
- [ ] 更多水墨装饰元素可选

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
> **© 2026 cubeyu · 麦希屿** · Published under the **MIT License**
>
> 墨香四溢，笔走龙蛇 🖌️
>
> ═════════════════════════════════════════

</div>
