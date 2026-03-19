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

<table>
<tr>
<td width="24%" valign="top">

**📰 项目名片**

| 要素 | 详情 |
| :---: | :--- |
| **作者** | 麦希屿 |
| **站点** | [techisle.top](https://techisle.top/) |
| **协议** | MIT |
| **仓库** | [GitHub](https://github.com/QNquenan/Simple-Homepage) |

</td>
<td width="24%" valign="top">

**🔬 技术栈**

| 技术 | 版本 |
| :---: | :---: |
| ![Vue](https://img.shields.io/badge/Vue-3.5+-4FC08D?logo=vuedotjs&logoColor=white) | 3.5+ |
| ![Vite](https://img.shields.io/badge/Vite-7.1+-646CFF?logo=vite&logoColor=white) | 7.1+ |
| ![Iconify](https://img.shields.io/badge/Iconify-5.0+-1769AA?logo=iconify&logoColor=white) | 5.0+ |
| Canvas API | 原生 |

</td>
<td width="28%" valign="top">

**✨ 核心亮点**

- 🌓 明暗双主题
- ✍️ 打字机欢迎语
- 🌌 粒子连线背景
- 🖱️ 自定义光标
- 🧩 全 JSON 配置
- 📱 响应式适配
- ⏳ 实时时光条

</td>
<td width="24%" valign="top">

**📦 快速上手**

> **第一步** — 拉取

```bash
git clone https://github.com/QNquenan/Simple-Homepage.git
cd Simple-Homepage
```

> **第二步** — 安装

```bash
npm install
```

> **第三步** — 启动

```bash
npm run dev
```

</td>
</tr>
</table>

---

## 🧱 技术架构 · 深度报道

<table>
<tr>
<td width="24%" valign="top">

**🗂️ 项目结构**

```
Simple-Homepage/
├── public/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   └── fonts/
│   ├── components/
│   │   ├── CustomCursor
│   │   ├── LinkBtn
│   │   ├── ParticlesBg
│   │   └── Typewriter
│   ├── composables/
│   │   └── useTheme.js
│   ├── config/
│   │   ├── config.json
│   │   ├── linkBtn.json
│   │   ├── techStack.json
│   │   ├── todo.json
│   │   └── typewriter.json
│   ├── views/
│   │   └── MainCard.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── vite.config.js
```

</td>
<td width="24%" valign="top">

**🌗 主题切换器**

滑块式设计，内置四层动画元素：

- **太阳** — 渐隐缩小
- **月亮** — 渐显放大
- **星星** — 闪烁动画
- **云朵** — 浮动消散

切换时所有元素联动过渡，`localStorage` 持久化主题偏好，刷新不丢失。

<br/>

**🖱️ 自定义光标**

双层结构设计：

- 外圈 — 20px 描边环，直接跟随
- 内核 — 8px 实心点，0.2 缓动跟随

悬停交互元素时外圈放大、内核缩小；点击时同时收缩。移动端自动隐藏。

</td>
<td width="24%" valign="top">

**⌨️ 打字机组件**

多句循环轮播，拟真打字效果：

- 打字速度随机浮动 ±30%
- 标点自动停顿（2x 慢速）
- 空格加速过渡（0.8x）
- 光标闪烁 + 完成脉冲

<br/>

**🌌 粒子背景**

纯 Canvas 2D 手写：

- 50 个粒子随机运动
- 150px 范围自动连线
- `MutationObserver` 监听主题属性
- 实时切换粒子颜色

<br/>

**🔘 链接按钮**

渐变叠加 + 流光扫过效果。图标悬停旋转放大 + 辉光，按钮上浮 4px + 双层阴影。

</td>
<td width="28%" valign="top">

**📋 配置手册**

> `src/config/` 目录，改 JSON 即改页面。

<br/>

**📌 `config.json`** — 个人名片

```json
{
  "name": "你的名字",
  "age": "0几年",
  "zodiac": "♈️",
  "avatarUrl": "头像链接",
  "emjoi": "😋",
  "infoTags": {
    "sex": "性别",
    "company": "组织",
    "province": "省份",
    "github": "用户名"
  },
  "professions": ["标签1"]
}
```

**🔗 `linkBtn.json`** — 快捷导航

```json
{
  "linkBtn": [{
    "icon": "mdi:github",
    "text": "按钮文字",
    "color": "#2b2b2b",
    "url": "https://..."
  }]
}
```

**🛠️ `techStack.json`** — 技术栈

```json
{
  "techStack": [
    { "icon": "...", "name": "Vue" }
  ]
}
```

**📝 `todo.json`** — 个人计划

```json
{
  "todoList": [
    { "text": "...", "checked": false }
  ]
}
```

**⌨️ `typewriter.json`** — 打字文本

```json
["句子1", "句子2"]
```

</td>
</tr>
</table>

---

## 📑 附录

<table>
<tr>
<td width="24%" valign="top">

**🏭 生产构建**

```bash
npm run build
```

构建产物位于 `dist/` 目录，可部署至任意静态托管服务。

```bash
npm run preview
```

本地预览生产构建效果。

</td>
<td width="24%" valign="top">

**🔮 版本路线图**

- [x] 响应式布局
- [x] 明暗主题切换
- [x] 打字机效果
- [x] 粒子背景
- [x] 自定义光标
- [x] 时光进度条
- [x] JSON 模块化
- [ ] 多语言 (i18n)
- [ ] SEO 优化
- [ ] PWA 离线

</td>
<td width="24%" valign="top">

**🤝 贡献指南**

1. Fork 本仓库
2. 创建特性分支

```bash
git checkout -b feature/amazing-feature
```

3. 提交更改

```bash
git commit -m 'feat: add amazing feature'
```

4. 推送到分支

```bash
git push origin feature/amazing-feature
```

5. 发起 Pull Request

</td>
<td width="28%" valign="top">

**📰 编者按**

> 本项目采用 Vue 3 Composition API + Vite 构建，所有内容通过 JSON 配置驱动，真正做到"零代码定制"。组件层面使用了原生 Canvas 粒子动画、自定义光标跟随、打字机拟真效果等交互细节，力求在简约中展现精致。
>
> 配置体系是本项目的核心设计理念 — 五个 JSON 文件覆盖了个人信息的方方面面，即使不懂 Vue 也能轻松打造属于自己的数字门牌。
>
> 欢迎各位开发者参与贡献，一起让这个项目变得更好。

</td>
</tr>
</table>

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
