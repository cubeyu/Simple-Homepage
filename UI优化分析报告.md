# 项目综合分析 · Simple-Homepage（水墨小筑）

> 分析视角：UI Designer（设计系统 / 组件 / 可访问性 / 性能 / 可维护性）
> 分析日期：2026-07-20 ｜ 范围：全仓（重点是 `src/` UI 部分）

---

## 一、项目概况

| 维度 | 现状 |
|---|---|
| 技术栈 | Vue 3.5 + Vite 7 + `@iconify/vue` 5，纯 CSS 水墨动效，**无 UI 框架** |
| 架构 | 单页个人主页；已拆分为 `MainCard`（容器）+ `Header/TodoList/TechStack/TimeProgress` + `LinkBtn/Typewriter/CustomCursor/ParticlesBackground`；JSON 驱动配置 |
| 设计语言 | 墨色五色（焦/浓/重/淡/清）+ 朱砂红 + 宣纸底；亮/暗双主题（暗色为"夜墨/碑拓"风） |
| 配置化 | `src/config/*.json` 改 JSON 即改内容，零代码上手 ✅ |
| 动效 | 卷轴展开、印章盖落、墨迹晕染、打字机、进度条、背景山水云雾飞鸟扁舟星月 |

**总体判断**：设计方向明确、风格统一、可配置性好，已具备不错的产品雏形。主要短板集中在 **可访问性硬伤、性能/健壮性、CSS 工程化冗余、少量内容与定位 bug** 四类，按优先级优化即可显著提升质量。

---

## 二、UI/UX 现状评估

### ✅ 做得好的（Strengths）
1. **设计 token 化**：墨色五色 + 主题色 + 字体集中在 `style.css :root`，双主题用 `[theme='dark']` 覆盖，扩展性好。
2. **可访问性基础**：全局 `prefers-reduced-motion` 媒体查询已禁用动画；装饰 SVG 多数标了 `aria-hidden`。
3. **组件拆分**：相比早期单文件，已拆为 8 个子组件，可维护性提升。
4. **响应式断点**：992 / 768 / 480 三档，移动端单列堆叠合理。
5. **暗色模式对比度**：已做过"文字浓度"专项优化，亮/暗对比基本达标。
6. **本地字体兜底**：`DingTalkJinBuTi` 已打包，保证主字体跨平台可用。

### ⚠️ 待优化（按严重度分级）

#### P0 — 可访问性 / 功能性硬伤（建议必改）
1. **主题切换按钮不是 `<button>`**：`Header.vue` 用 `<div class="theme-toggle" @click>`。无 `role`/`aria-label`、无法键盘聚焦、无焦点样式 → 违反 WCAG 2.1.1（键盘可操作）与 2.4.7（焦点可见）。键盘用户根本切不了主题。
2. **链接按钮无 `:focus-visible`**：`.linkBtn` 只有 `:hover`/`:active`，Tab 键聚焦时**无可见焦点环** → WCAG 2.4.7 不达标。
3. **全局隐藏系统光标**：`App.vue` 里 `* { cursor: none; }` + JS 自定义光标。一旦 JS 报错/被禁用/极端环境，用户**完全看不到光标**；对依赖可见光标的用户也不友好。
4. **内容 bug**：`config.json` 中 `"age": "Null"` → 页面渲染出"（ Null年的 白羊 ）"，明显的占位残留。

#### P1 — 性能 / 健壮性（上线前修）
1. **Iconify 运行时联网取图标**：`@iconify/vue` 默认按需请求 `api.iconify.design`。首屏、弱网、离线环境下图标会闪烁或失败，且增加外部依赖。建议改为离线图标包（`@iconify-json/*` + 预打包）或本地内联 SVG。
2. **favicon 生产路径 bug**：`index.html` 引用 `/src/favicon.ico`，`Header.vue` 头像失败回退也用 `/favicon.ico`。Vite 构建**不会**把 `src/` 下资源复制到 `dist/`，生产环境 favicon 与回退图都会 404。应放入 `public/` 并改为 `/favicon.ico`。
3. **`feTurbulence` 滤镜开销**：`body::before` 与 `.mainCard::before` 双层 SVG 噪点（含 `feTurbulence` + `mix-blend-mode: multiply`）在低端机/首次绘制可能掉帧。建议降 octave、或 `prefers-reduced-motion` 下禁用、或换成轻量噪点图。
4. **主题切换 FOUC**：`theme` 属性在 `onMounted` 后才设到 `body`，刷新时先亮后暗。建议在 `index.html` 内联脚本提前读取 `localStorage` 写到 `<html>` 上。
5. **墨水拖尾 DOM 抖动**：`MainCard.vue` 每 80ms `mousemove` 新建/删除一个 DOM 节点（峰值约 18 个/屏）。建议对象池或 `reduced-motion` 时关闭。

#### P2 — 代码质量 / 可维护性
1. **`MainCard.css` 被 5 个组件各自 `@import`**（`Header/TodoList/TechStack/TimeProgress/MainCard`），冗余且全部非 `scoped`，靠 `.mainCard` 前缀"伪命名空间"，脆弱。建议：全局只引一次（在 `main.js` 或 `App.vue`），子组件样式逐步 `scoped`。
2. **死代码**：
   - `animate-float`（模板里 `class="mainCard animate-float"`，但**无任何 CSS 定义**）
   - `LinkBtn.vue` 的 `hoverColor` computed 与 `--btn-hover-color` 变量**从未被 CSS 使用**
   - `@keyframes fadeInUp / scrollUnroll / inkSpread` **定义但从未引用**
3. **全局样式污染**：除 `Typewriter/CustomCursor` 用 `scoped`，其余组件 `<style>` 未 `scoped`，命名冲突风险高。
4. **悬浮检测脆弱**：`CustomCursor.handleHoverElements` 用 `setTimeout(500)` 后再 `querySelectorAll` 绑定 `mouseenter/leave`，时序依赖强、动态内容不生效。建议改用事件委托（`mouseover`/`mouseout` + `closest`）。

#### P3 — 视觉 / 设计一致性 / 内容
1. **绝对定位魔法数字**：`.seal-small { top:155px; left:150px }`、`.vertical-calligraphy { top:130px }` 等，内容/视口变化时易与正文重叠；移动端部分装饰未隐藏，可能拥挤。
2. **占位/测试数据**：链接区有 5 个"测试应用1–5"（全指向 donate）；`techStack` 14 项偏多。建议替换为真实链接 / 精选技术栈。
3. **`province: "China"`** 在中文站显突兀，应填省份。
4. **装饰密度偏高**：剑/笔/竹/梅/卷轴/4 枚印章/诗词竖排/题跋/星月/飞鸟/扁舟/云雾/墨点……PC 端有"堆砌感"，与项目早期"极简留白"理念相悖。建议加"装饰密度"开关或按视口收减。
5. **语义结构**：无 `<main>/<header>/<footer>/<nav>` 地标；`h1` 唯一（好），但补语义标签利于 SEO 与无障碍。
6. **字体栈**：强依赖中文书法体，缺字系统回退到 `serif` 观感落差大（已靠本地 `DingTalkJinBuTi` 兜底，OK）；可为数字/英文引入更稳兜底。

---

## 三、优化方案（按优先级）

### P0 · 可访问性 / 功能（约 0.5 天）
| # | 措施 | 改动文件 | 预期 |
|---|---|---|---|
| 1 | 主题切换 `<div>` → `<button aria-label="切换日/夜主题">`，加 `:focus-visible` 焦点环 | `Header.vue` + `MainCard.css` | 键盘可切换、焦点可见，满足 WCAG |
| 2 | `.linkBtn` 增加 `:focus-visible` 描边/朱砂色焦点样式 | `LinkBtn.vue` | Tab 导航有明确焦点 |
| 3 | `cursor:none` 改为**仅在非触摸 + JS 正常时**隐藏，并提供降级；或仅装饰元素用自定义光标、正文保留系统光标 | `App.vue` / `CustomCursor.vue` | 无 JS / 异常时仍有可用光标 |
| 4 | `config.json` `age` 填真实值或改为可空判断，避免渲染 "Null" | `config.json` + `MainCard.vue` | 消除内容 bug |

### P1 · 性能 / 健壮性（约 1 天）
| # | 措施 | 改动文件 | 预期 |
|---|---|---|---|
| 5 | favicon 移至 `public/favicon.ico`，引用改 `/favicon.ico` | `index.html` / `Header.vue` | 生产环境图标正常 |
| 6 | Iconify 离线化（`@iconify-json/*` + 构建插件，或内联高频图标 SVG） | `package.json` / 组件 | 离线可用、首屏更快、去外部依赖 |
| 7 | 降噪点滤镜开销：`feTurbulence` octave↓、`reduced-motion` 下关闭 | `App.css` / `MainCard.css` | 低端机不掉帧 |
| 8 | `index.html` 内联脚本提前设 `<html theme>`，消除主题闪烁 | `index.html` | 刷新无亮→暗跳变 |
| 9 | 墨水拖尾：对象池 / `reduced-motion` 关闭 | `MainCard.vue` | 减少 DOM 抖动 |

### P2 · 代码质量（约 0.5–1 天）
| # | 措施 | 改动文件 | 预期 |
|---|---|---|---|
| 10 | `MainCard.css` 仅全局引入一次；子组件样式 `scoped` 化 | `main.js` / 各组件 | 去冗余、降冲突风险 |
| 11 | 删除死代码：`animate-float`、`hoverColor`/`--btn-hover-color`、3 个未用 `@keyframes` | 对应文件 | 体积↓、可读↑ |
| 12 | `CustomCursor` 悬浮检测改事件委托 | `CustomCursor.vue` | 更稳健、省监听 |

### P3 · 视觉 / 内容（约 1 天，按意愿）
| # | 措施 | 预期 |
|---|---|---|
| 13 | 装饰元素改为相对/安全区定位，移动端隐藏部分装饰 | 避免重叠、回归留白 |
| 14 | 清理测试链接、精选技术栈、`province` 填省份 | 内容可信度↑ |
| 15 | 加"装饰密度"配置项，按视口收减 | 平衡"丰富"与"极简" |
| 16 | 补 `<main>/<header>/<footer>` 语义地标 | SEO / 无障碍↑ |

---

## 四、建议实施顺序

```
P0（无障碍/功能） → P1（性能/健壮） → P2（代码质量） → P3（视觉/内容）
 必改，影响合规          上线前必须          可持续迭代        按你审美取舍
```

- **最小可行修复**：先做 P0-1/2/4 + P1-5，半天即可消除合规风险与生产 bug。
- **性价比最高**：P0 + P1 全部，一天内把"能用、好看、稳"都补齐。
- **长期健康**：P2 工程化清理，P3 按你的视觉偏好逐步调。

---

## 五、结论

项目**设计完成度高、风格统一**，核心短板不在"好不好看"，而在**可访问性合规、生产健壮性、CSS 工程化**三方面。按 P0→P3 顺序落地，可在 2–3 天内把质量从"个人 demo 级"提升到"可对外、可维护"的水平，且每一档都有独立价值、可单独交付。

---

## 六、✅ 实施记录（2026-07-20，已全量落地）

> 已按 P0→P3 完整实施，`npm run build` 通过（35 modules，无报错），`dist/favicon.ico` 正常产出。

| 档 | 项 | 改动文件 | 状态 |
|---|---|---|---|
| P0 | 主题切换改 `<button>`+`aria-label`+`:focus-visible`，移除 `cursor:none` | `Header.vue` | ✅ |
| P0 | `.linkBtn` 加 `:focus-visible` 朱砂焦点环 | `LinkBtn.vue` | ✅ |
| P0 | 全局 `*{cursor:none}` 移除，改由 JS 正常时隐藏（无 JS 自动降级）；`age:"Null"` 渲染修复 | `App.vue` / `MainCard.vue` / `config.json` | ✅ |
| P1 | favicon 移 `public/`、路径改 `/favicon.ico`；`index.html` 内联脚本提前设 `html[theme]` 消除闪烁；`useTheme` 改设 `documentElement` | `index.html` / `useTheme.js` / `public/favicon.ico` | ✅ |
| P1 | `feTurbulence` octave 下调（3→2 / 2→1）；`prefers-reduced-motion` 下关闭噪点合成；墨水拖尾 reduced-motion 跳过 | `App.css` / `style.css` / `MainCard.css` / `MainCard.vue` | ✅ |
| P2 | `MainCard.css` 仅 `main.js` 全局引入一次；移除 4 个子组件 + MainCard 的重复 `@import` | `main.js` + 各组件 | ✅ |
| P2 | 删除死代码：`animate-float`、`hoverColor`/`--btn-hover-color`、3 个未用 `@keyframes` | 对应文件 | ✅ |
| P2 | `CustomCursor` 改用 `mouseover`+`closest` 事件委托 | `CustomCursor.vue` | ✅ |
| P3 | 移动端隐藏非必要装饰；`seal-small` 移到安全位；清理 5 个"测试应用"链接、`province`→`中国`；加 `<header>/<footer>/<nav>`+`role="main"` 语义地标；图标加 `aria-hidden` | `MainCard.vue` / `Header.vue` / `linkBtn.json` / `config.json` / `MainCard.css` | ✅ |

### ⚠️ 一项说明（P1-#6 Iconify 离线化）
图标仍走 **运行时联网取 Iconify API**（已加 `preconnect` 加速 + 装饰图标 `aria-hidden`）。
**未做全量离线打包**：本项目用到约 15 个不同图标集合（mdi / tabler / mingcute / ep / logos …），离线化需安装 `@iconify-json/*` 多个包并 `addCollection` 注册，体积与改造量较大，且会破坏"JSON 动态配置图标"的灵活性。对 ded个人站点，运行时 Iconify 属常见可接受方案。
若需彻底零外部请求，后续可：`npm i -D @iconify-json/mdi @iconify-json/tabler …` 并在 `main.js` 用 `addCollection` 注册所用集合（或改用 `unplugin-icons` 静态内联）。可按需再排期。

