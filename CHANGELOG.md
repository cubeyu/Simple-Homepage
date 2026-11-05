# 变更记录

## 1.1.0 · 2026-11-06 · 修复

- 涉及文件:`package.json`、`package-lock.json`、`README.md`、`docs/`、`.gitignore`、`src/App.vue`、`src/assets/css/MainCard.css`、`src/components/ParticlesBackground.vue`、`src/composables/useInkTrail.js`、`src/main.js`
- 摘要说明:依赖安全漏洞清零(11 个 → 0 个,vite/nanoid/postcss/source-map-js 经 `npm audit fix` 升级;eslint 链上的 minimatch 通过 `overrides` 强制到修复版 ^11.0.4,避免降级 eslint);重写 README 并新增配图(docs/readme/hero.svg 水墨 Hero 横幅 + docs/screenshots 亮/暗/移动端三张截图,WebP 压缩);修正 README 中错误仓库地址(cubeyuu → cubeyu)与失效文件引用(项目改动描述.md → CHANGELOG.md);Prettier 格式化 4 处历史遗留格式错误;.gitignore 新增 .mimosa/。

## 1.0.0 · 2026-07-29 · 新增

- 涉及文件：`项目分析报告.html`
- 摘要说明：新增"水墨小筑"项目分析报告独立 HTML 文件，内嵌 ECharts 5.x CDN，包含技术架构（环形图）、代码规模分布（横向柱状图）、组件依赖关系（树状图）、设计系统色卡矩阵（HTML+CSS）、项目健康度评估（雷达图）共 5 个分析章节；整体采用水墨风格视觉（宣纸底色、墨色文字、朱砂点缀），响应式布局，可直接在浏览器打开。
