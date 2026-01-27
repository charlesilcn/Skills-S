# AI Skills Shop

AI Skills Shop 是一个现代化的AI技能交易平台，采用积分制商业模型和创作者激励体系，为用户提供按需获取AI能力的解决方案。

## 项目概述

基于Vibe Stack技术栈构建的暗色系、现代、专业的AI技能交易平台，旨在连接AI技能创作者和使用者，通过订阅制和积分系统实现价值流转。

## 技术栈

- **前端框架**：Next.js 15 (App Router) + TypeScript
- **样式方案**：Tailwind CSS + Shadcn/ui
- **动画效果**：Framer Motion
- **数据库**：PostgreSQL + Drizzle ORM
- **身份认证**：Clerk
- **支付系统**：Stripe Connect
- **文件存储**：Cloudflare R2 / AWS S3
- **响应式设计**：适配各种设备

## 核心功能

### 1. 订阅体系

| 订阅计划 | 价格 | 积分 | 核心权益 |
|---------|------|------|----------|
| **FREE** | $0/永久免费 | 10积分(注册仅赠送一次) | 基础内容访问，每日限1次下载/调用，仅限个人学习 |
| **GO** | $9.9/月 | 100积分/月(不可滚存) | 基础+标准内容访问，无限制下载/调用(受积分约束)，仅限个人使用 |
| **PRO** | $29/月 | 600积分/月 | 全站解锁(含专家级内容)，个人商业辅助，优先支持 |
| **ULTRA** | $159/月 | 1500积分/月 | 完整商业授权，API访问，团队协作工具，专属客户经理 |

### 2. 积分系统

- 用户通过订阅获得积分
- 积分用于购买AI技能
- 创作者获得积分收益
- 支持积分提现

### 3. 创作者激励

- 前100名入驻创作者获得永久90%分成
- 动态评级和曝光机制
- 实时收益看板
- 技能版本管理

### 4. 平台功能

- **技能集市**：AI技能展示、搜索、筛选
- **卖家中心**：技能创建、管理、收益分析
- **买家中心**：技能购买、使用、管理
- **订阅管理**：计划升级、降级、续费

## 项目结构

```
/app
├── (platform)        # 核心业务区
│   ├── dashboard     # 买家中心
│   ├── marketplace   # 技能集市
│   └── studio        # 卖家中心
├── pricing           # 订阅定价页面
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx          # 首页Landing Page
└── middleware.ts
/components
├── /shared           # 业务组件
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── Navbar.tsx
└── /ui               # Shadcn基础组件
/db                   # Drizzle Schema
/lib                  # 工具库
```

## 快速开始

### 1. 环境要求

- Node.js 18.17.0 或更高版本
- npm 9.6.7 或更高版本
- PostgreSQL 14.0 或更高版本

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

创建 `.env.local` 文件并添加以下内容：

```env
# PostgreSQL 数据库连接
DATABASE_URL="postgresql://username:password@localhost:5432/ai-skills-shop"

# Clerk 身份认证
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"

# Stripe 支付
STRIPE_SECRET_KEY="your-stripe-secret-key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"

# Cloudflare R2 / AWS S3
R2_ACCESS_KEY_ID="your-r2-access-key"
R2_SECRET_ACCESS_KEY="your-r2-secret-key"
R2_BUCKET_NAME="your-r2-bucket-name"
R2_ACCOUNT_ID="your-r2-account-id"
```

### 4. 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 5. 构建生产版本

```bash
npm run build
```

### 6. 启动生产服务器

```bash
npm start
```

## 部署

### Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 配置环境变量（与 `.env.local` 相同）
3. 点击 "Deploy" 按钮
4. 部署完成后配置自定义域名（可选）

### 数据库配置

1. 在 PostgreSQL 中创建数据库
2. 运行数据库迁移：
   ```bash
   npx drizzle-kit push:pg
   ```

### Stripe 配置

1. 创建 Stripe 账户
2. 配置 Webhook 端点
3. 获取 API 密钥并添加到环境变量

## 商业模型

### 收入来源

1. **订阅费用**：用户订阅不同等级的计划
2. **交易手续费**：技能交易的平台分成
3. **创作者会员**：高级创作者服务

### 创作者分成

- FREE 计划创作者：50% 分成
- GO 计划创作者：40% 分成
- PRO 计划创作者：20% 分成 + 私人辅导
- ULTRA 计划创作者：10% 分成 + 专属客户经理

## 技术亮点

1. **现代化架构**：Next.js 15 App Router + TypeScript
2. **性能优化**：静态生成、服务器组件、客户端缓存
3. **用户体验**：暗色系主题、流畅动画、响应式设计
4. **安全可靠**：Clerk 认证、Stripe 支付、数据加密
5. **可扩展性**：模块化设计、Serverless 优先架构

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件
