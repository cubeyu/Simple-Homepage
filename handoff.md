# handoff · Simple-Homepage(水墨小筑)

> 写给完全没有上下文的新会话。当前日期:2026-11-06。

## 这个项目在做什么

`Vue 3` + `Vite` 的水墨丹青风格个人主页(站点 [techisle.top](https://techisle.top/))。核心卖点:五色墨韵设计系统(焦浓重淡清)、朱砂印泥点睛、日月双主题(宣纸/碑拓)、全 JSON 配置(`src/config/` 下 5 个 JSON,改配置即改内容)。所有视觉细节(色值、主题变量)以 `index.html` 内联 CSS 和 `src/style.css` 为准。

## 为什么这么选

- **Vite + Vue 3 单页无路由**:个人主页只有一个主卡片视图,不上路由/状态库,保持轻量。
- **纯 CSS 水墨装饰**:远山/云雾/飞鸟用背景图(WebP)+ CSS 动效,不引重型动画库。
- **npm 而非 pnpm 管理此仓库**:仓库历史上一直用 `package-lock.json`,Dependabot 监控的也是它,保持一致(本机全局偏好 pnpm 不影响此仓库的文档口径,README 写 npm 并注明 pnpm 可用)。

## 已完成(最近一次会话,2026-11-06)

1. **GitHub 仓库警告修复**:`npm audit` 报 11 个漏洞(6 high / 5 moderate),即仓库页顶部 Dependabot 警告横幅的来源。
   - vite 7.1.2→7.3.7、nanoid、postcss、postcss-selector-parser、source-map-js 等:`npm audit fix`(官方 registry,本机 npmmirror 不支持 audit 接口)。
   - eslint→minimatch 链(3 个 moderate):没有任何 eslint 10.x 能绕开,`npm audit fix --force` 的方案是降级 eslint 9(breaking),改用 `package.json` 的 `"overrides": { "minimatch": "^11.0.4" }` 精准修复。
   - 验证:`npm audit` 0 漏洞、`npm run lint` 0 错误、`npm run build` 成功(850ms)。
2. **README 全量重写 + 配图**:新结构 Hero → 截图预览 → 速览/特性 → 快速开始 → 配置手册 → 设计语言 → 技术架构 → 路线图;新增 `docs/readme/hero.svg`(纯 SVG 水墨横幅)和 `docs/screenshots/`(亮/暗桌面 + 移动端三张 WebP,ffmpeg quality 88 压缩,总 2.8MB→176KB);修正仓库地址错误(`cubeyuu` → `cubeyu`)和失效引用(`项目改动描述.md` → `CHANGELOG.md`)。
3. **顺手**:Prettier 格式化 4 处历史遗留格式错误(`npm run format`);`.gitignore` 增加 `.mimosa/`;截图流程:dev server 起在 5173,浏览器 IAB 截 1600×1000 桌面 + 414×896 移动端,暗色用 `localStorage.theme=dark` 切换。

## 卡在哪里 / 未完成

- **无 gh CLI**:本机没有 `gh`,GitHub 仓库的 description 还是 null,也没法远程确认 Dependabot 横幅消失。修复漏洞的提交推送后 Dependabot 才会重新扫描并撤销警告。
- **改动尚未提交**:所有变更在工作区,等用户确认后自行 commit/push。

## 下一步计划

1. 用户 commit + push 后,去仓库页确认 Dependabot 警告横幅消失(或 Security → Dependabot alerts 面板清零)。
2. (可选)给仓库补 description/topics:`水墨风格个人主页` / `vue3` / `vite` / `portfolio`。
3. (可选)删除根目录遗留的 `.eslintrc.json` —— eslint 10 只认 flat config(`eslint.config.cjs`),旧文件是死配置。
4. 路线图里的 i18n / PWA / 字体子集化(见 README)。

## 踩过的坑(不要再踩)

- **npmmirror 不支持 audit**:`npm audit` 对镜像源直接 404,必须 `--registry=https://registry.npmjs.org`。
- **eslint 漏洞链别用 --force**:会把 eslint 降到 9.x;正确做法是 overrides 强制 minimatch ^11.0.4(修复版,漏洞范围 7.0.0–11.0.0),改完必须跑 `npm run lint` 验证。
- **ffmpeg 压截图**:quality 88 的 WebP 对 UI 截图文字无损感,低于 85 会出现振铃伪影。
- **IAB 截图 clip 有 DPR 陷阱**:`screenshot({clip})` 在 Windows 125% 缩放下坐标错乱,整页截图再裁剪更稳。
- **SVG 竖排中文**:`<tspan dy>` 换行仍是横排,竖排必须每字一个 tspan 并重复 `x`。

## 变更记录(时间倒序)

### v1.1.0 · 2026-11-06 · 修复/新增

- 涉及文件:`package.json`、`package-lock.json`、`README.md`、`CHANGELOG.md`、`.gitignore`、`docs/readme/hero.svg`(新增)、`docs/screenshots/*.webp`(新增)、`src/App.vue`、`src/assets/css/MainCard.css`、`src/components/ParticlesBackground.vue`、`src/composables/useInkTrail.js`、`src/main.js`
- 摘要:依赖漏洞 11→0(overrides 方案保留 eslint 10);README 重写配 Hero SVG + 三主题截图,修正仓库地址与失效引用;Prettier 清理 4 处格式错误。
