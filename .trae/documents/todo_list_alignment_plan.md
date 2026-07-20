# 计划模块与技术栈对齐优化计划

## 问题分析

### 问题描述
用户反馈计划模块（左侧"我的一些鸽子计划"）显示不完整，最后一项被截断，需要与右侧技术栈模块对齐。

### 原因定位

1. **宽度不足**：`.leftBox` 宽度仅为 32%，而 `.rightBox` 占据剩余空间（约 68%）
2. **高度限制**：计划列表 `.todoList` 设置了 `max-height: 9rem`（约 144px），导致内容超出后被截断
3. **布局不对齐**：左右两列高度不一致，计划模块内容被截断，而技术栈模块有更多空间展示

### 影响范围
- [MainCard.css](file:///d:/code/Simple-Homepage/src/assets/css/MainCard.css) - 布局样式
- [TodoList.vue](file:///d:/code/Simple-Homepage/src/components/TodoList.vue) - 计划组件

---

## 解决方案

### 核心改动

1. **调整左右列宽度比例**
   - 将 `.leftBox` 宽度从 32% 增加到 38%
   - 将 `.rightBox` 宽度调整为自适应剩余空间

2. **移除计划列表高度限制**
   - 移除 `.todoList` 的 `max-height` 限制
   - 让计划列表自然展开，展示所有内容

3. **优化计划列表样式**
   - 增加列表项的间距和内边距
   - 确保所有计划项完整显示

4. **统一卡片对齐**
   - 确保左右两列卡片顶部对齐
   - 优化整体布局平衡

---

## 具体实施步骤

### 步骤 1：调整布局宽度

**文件**：[src/assets/css/MainCard.css](file:///d:/code/Simple-Homepage/src/assets/css/MainCard.css)

**修改内容**：
- `.mainCard .content .leftBox` 宽度从 32% → 38%
- 保持 `.mainCard .content .rightBox` 为 `flex: 1`

### 步骤 2：移除计划列表高度限制

**文件**：[src/assets/css/MainCard.css](file:///d:/code/Simple-Homepage/src/assets/css/MainCard.css)

**修改内容**：
- 移除 `.mainCard .content .leftBox .todoList` 的 `max-height: 9rem` 限制
- 移除 `overflow-y: auto` 滚动条

### 步骤 3：优化计划列表样式

**文件**：[src/assets/css/MainCard.css](file:///d:/code/Simple-Homepage/src/assets/css/MainCard.css)

**修改内容**：
- 调整 `.todoItem` 的 padding，增加垂直间距
- 调整字体大小，提升可读性
- 确保所有内容完整显示

### 步骤 4：验证响应式适配

**文件**：[src/assets/css/MainCard.css](file:///d:/code/Simple-Homepage/src/assets/css/MainCard.css)

**修改内容**：
- 确保移动端响应式布局不受影响
- 小屏幕下两列自动堆叠为单列

---

## 预期效果

- ✅ 计划模块宽度增加，与技术栈模块比例更协调
- ✅ 所有计划项完整显示，不再被截断
- ✅ 左右两列卡片对齐，布局更平衡
- ✅ 保持响应式适配，移动端正常显示

---

## 风险评估

| 风险 | 影响 | 应对措施 |
|------|------|----------|
| 宽度调整可能影响整体布局 | 中 | 微调宽度比例，测试不同屏幕尺寸 |
| 移除高度限制可能导致卡片过高 | 低 | 计划项数量有限（约5-6项），影响可控 |
| 响应式布局可能受影响 | 低 | 验证移动端显示效果 |

---

## 验证方案

1. **开发环境验证**：运行 `npm run dev`，在浏览器中查看计划模块是否完整显示
2. **构建验证**：运行 `npm run build`，确保项目能正常构建
3. **响应式验证**：调整浏览器窗口大小，验证移动端布局是否正常

---

## 相关文件

| 文件 | 说明 |
|------|------|
| [src/assets/css/MainCard.css](file:///d:/code/Simple-Homepage/src/assets/css/MainCard.css) | 主卡片样式，包含布局定义 |
| [src/components/TodoList.vue](file:///d:/code/Simple-Homepage/src/components/TodoList.vue) | 计划列表组件 |
| [src/views/MainCard.vue](file:///d:/code/Simple-Homepage/src/views/MainCard.vue) | 主卡片组件，包含布局结构 |
