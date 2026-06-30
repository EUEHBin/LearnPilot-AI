# 知航 AI 项目学习规划

> 项目名称：知航 AI（LearnPilot AI）  
> 项目定位：个人学习路线知识库与 AI 学习教练  
> 当前版本：前端闭环 -> 后端闭环 -> Monorepo/部署闭环 -> AI 学习知识库  
> 核心原则：先把自己熟悉的前端做成完整工程闭环，再补后端、数据库、部署和 AI。不要一开始就冲完整企业级知识库，先做一个自己真的会用的学习系统。

## 1. 这条路线解决什么问题

你现在已经能从 0 到 1 搭建和开发前端项目，但短板主要在：

- TypeScript 用得不够；
- 前端工程化、规范、构建优化做得不系统；
- CI/CD、部署、Nginx、Docker 没有完整跑通过；
- 后端、数据库、接口设计、鉴权、权限经验少；
- AI 应用知道方向，但缺一个能落地的项目闭环。

所以路线不应该从“完整企业级 AI 知识库”开始，而应该按下面顺序：

```text
前端管理后台
  -> 前端工程化与 CI/CD
  -> NestJS 后端与数据库
  -> Monorepo 前后端联调
  -> Docker/Nginx/服务器部署
  -> AI 学习教练
  -> RAG 学习知识库
  -> 监控、性能、项目包装
```

最终目标不是“刷完课”，而是做出一个能写进简历、能面试讲清楚、能体现你复合能力的项目。

## 2. 最终项目形态

项目名称：

**知航 AI（LearnPilot AI）**

项目定位：

**个人学习路线知识库与 AI 学习教练**

这个项目先服务你自己：把高薪课、架构课、AI 课程目录、学习规划、项目记录、Cursor 对话总结、踩坑笔记都放进去，让 AI 基于这些资料回答“我现在该学什么、该看哪节课、下一步怎么做”。

后续它可以扩展成企业知识库，因为底层能力是一样的：

```text
文档管理
  -> 文档解析
  -> 文档切片
  -> 检索
  -> Prompt 编排
  -> AI 回答
  -> 反馈优化
```

第一版不要做太大，最终逐步演进到：

- 前端管理后台；
- NestJS 后端服务；
- PostgreSQL/MySQL 数据库；
- 用户登录；
- JWT 鉴权；
- 角色权限；
- 课程目录管理；
- 学习规划管理；
- 学习阶段管理；
- 项目任务管理；
- 学习笔记管理；
- 文档管理；
- AI 学习问答；
- 问答历史；
- AI 生成下一步学习建议；
- AI 推荐当前阶段要看的课程章节；
- RAG 学习知识库检索；
- Docker Compose 部署；
- Nginx 反向代理；
- GitHub Actions 自动部署；
- 前端错误监控与接口日志；
- README、架构图、部署文档。

## 2.1 典型使用场景

你后续可以把这些资料导入系统：

- 高薪课目录；
- 架构课目录；
- AI 全栈课目录；
- 当前这份学习规划；
- 每周学习记录；
- 项目开发笔记；
- Cursor 对话总结；
- Bug 和踩坑记录；
- 面试题和复盘；
- 公司项目经验的脱敏总结。

然后你可以直接问：

- 我现在在第 1 阶段，接下来该看哪些课？
- NestJS 的 JWT 对应架构课里的哪几节？
- 我这周只有 5 小时，怎么安排？
- 前端 CI/CD 卡住了，应该补哪些知识？
- 做完登录模块后下一步做什么？
- 这个项目怎么写进简历？
- 面试官可能怎么问这个项目？
- 我现在是不是学偏了？
- 哪些课程可以跳过？

这就是项目的真实价值：你先用它帮助自己学习，再把它包装成一个可扩展的 AI 知识库产品。

## 3. 技术选型

### 前端

```text
Vue3
Vite
TypeScript
Element Plus
Vue Router
Pinia
Axios
ESLint
Prettier
```

原因：

- 贴近你的前端基础；
- 能补 TypeScript；
- 管理后台开发效率高；
- 适合做权限、菜单、表格、表单、文档管理。

### 后端

```text
NestJS
TypeScript
TypeORM
JWT
Passport
RBAC
```

原因：

- 架构课里有完整 `NestJS` 课程；
- NestJS 对前端转后端比较友好；
- 模块、Controller、Service、Guard、Interceptor 这些概念适合训练后端架构思维；
- TypeORM 和课程内容更容易对齐。

### 数据库

推荐优先级：

```text
第一选择：PostgreSQL
第二选择：MySQL
```

建议：

- 如果你想贴近 AI 学习知识库和后续 RAG，可以用 `PostgreSQL`；
- 如果想更贴近架构课里的 NestJS 课程，可以先用 `MySQL + TypeORM`；
- 第一版不纠结，重点是把数据库、ORM、接口、鉴权跑通。

如果你不确定，建议第一版用：

```text
MySQL + TypeORM
```

第二版再切或扩展到：

```text
PostgreSQL + pgvector
```

### Monorepo

```text
pnpm workspace
后续可加 Turborepo
```

推荐目录：

```text
learnpilot-ai/
  apps/
    web/                 # Vue3 前端
    api/                 # NestJS 后端
  packages/
    shared/              # 前后端共享类型、常量、工具
  docker/
    nginx/
      default.conf
  .github/
    workflows/
      deploy.yml
  docker-compose.yml
  package.json
  pnpm-workspace.yaml
```

第一版只需要：

```text
apps/web
apps/api
packages/shared
```

### 部署

```text
云服务器
Docker
Docker Compose
Nginx
GitHub Actions
```

部署关系：

```text
用户浏览器
  -> 域名 DNS 解析到服务器
  -> Nginx
  -> / 返回前端静态资源
  -> /api 转发到 NestJS
  -> NestJS 访问数据库
  -> NestJS 调用大模型 API
```

第一版没有域名也可以，用服务器 IP 访问。后面建议买一个便宜域名，完整体验 DNS、HTTPS、Nginx 和部署流程。

## 4. 课程总对照表

### 前端基础与工程化

架构课：

- `前端工具链`
  - 抽象语法树；
  - Prettier；
  - ESLint；
  - ESLint 插件；
  - Babel；
  - Terser；
  - SWC。
- `企业级包管理方案`
  - npm 回顾；
  - npm 进阶指令；
  - 发布 npm 包；
  - 搭建 npm 私服；
  - 多包管理方案；
  - 搭建 Monorepo 工程；
  - 搭建内部组件库。
- `vite 深度剖析`
  - vite 概述；
  - 环境变量；
  - 依赖预构建；
  - CSS 工程化处理；
  - 静态资源处理；
  - HMR；
  - Vite 插件机制；
  - Code Splitting；
  - Vite 性能优化。

高薪课：

- `TypeScript`
- `工程化`
- `Webpack`
- `Vite`
- `Vue3`
- `Vue + TypeScript`
- `前端工程化体系`
- `代码分层架构`
- `前端性能优化`
- `Webpack/Vite 性能优化`

### 后端与数据库

架构课：

- `NestJS`
  - 快速上手 Nest CLI；
  - 三层架构与 MVC；
  - IoC 的核心思想；
  - Nest 中的装饰器；
  - 模块的基本概念；
  - AOP；
  - 中间件与守卫；
  - 拦截器；
  - 管道与过滤器；
  - 文件上传；
  - MySQL 相关回顾；
  - ORM 的理解；
  - TypeORM 基本使用；
  - Repository 与 QueryBuilder；
  - TypeORM 表关系；
  - Nest 项目中使用 TypeORM；
  - Redis；
  - Session 与 JWT；
  - JWT 登录注册后端处理；
  - Passport；
  - 环境变量；
  - RBAC 权限设计；
  - WebSocket；
  - 日志处理；
  - 面向切面的日志处理。

高薪课：

- `Node`
- `Node.js`
- `Node.js服务架构`
- `数据库设计范式`
- `Postgres数据库`
- `服务端请求`
- `服务端部署策略`
- `模块化架构设计`
- `可扩展架构设计`

### 部署、CI/CD、运维

架构课：

- `运维`
  - Linux 系统安装；
  - Linux 基础命令；
  - SSH 服务管理；
  - Nginx 服务管理和配置；
  - Nginx 反向代理和负载均衡；
  - Nginx 和 HTTPS；
  - Docker 安装和管理；
  - 容器网络和编排工具；
  - GitLab 安装配置和使用；
  - Jenkins 安装配置和使用；
  - 发布流程策略介绍和部署；
  - ELK 日志管理。

高薪课：

- `项目部署流程`
- `Node.js 环境部署`
- `Vue 项目上线`
- `Node.js 服务部署`
- `服务端部署策略`

补充资料：

- `GitHub Actions`：课程里不一定系统讲，用 GitHub 官方文档 + Cursor 辅助即可；
- `Docker Compose`：架构课运维里有 Docker 基础，Compose 可以结合官方文档补；
- `Nginx HTTPS`：架构课运维里有，实操时再补 Let's Encrypt。

### 监控、性能、稳定性

架构课：

- `前端服务监控`
  - JS 错误监听；
  - 错误采集；
  - 数据上报；
  - 页面性能监控；
  - 用户行为收集与埋点；
  - 页面访问痕迹采集；
  - API 请求数据采集。
- `企业级监控平台全栈架构设计`
  - 需求分析与项目结构；
  - 工程规范化；
  - SDK 子包工程化；
  - 错误与性能采集；
  - ClickHouse 与 Docker；
  - 后端服务；
  - 前端监控平台；
  - turbo；
  - 本地部署测试。

高薪课：

- `性能优化策略`
- `渲染性能优化`
- `请求性能优化`
- `前端企业级项目`
- `Webpack5`
- `Vite Devtools`

### AI 与学习知识库

架构课：

- `前端+AI（基础篇）`
  - Cursor；
  - AI 编码工具；
  - LLM 基础；
  - Agent；
  - Function Calling；
  - MCP；
  - 提示词工程；
  - RAG；
  - 微调基础。
- `LangChain（基础篇）`
  - 模型接口；
  - 提示词模板；
  - LCEL；
  - Runnables；
  - 输出解析器；
  - Loader；
  - 文本切割；
  - 嵌入处理；
  - 向量库；
  - 检索优化；
  - RAG 实践；
  - Memory；
  - Tools；
  - Agent。
- `AI 平台篇（扣子&Dify）`
  - Coze；
  - 插件；
  - 工作流；
  - 知识库；
  - 数据库；
  - Dify；
  - 本地部署 Dify。
- `LangGraph`
  - State；
  - 节点；
  - 边；
  - 循环；
  - 工具调用；
  - 子图；
  - Checkpoint；
  - 短期记忆；
  - 长期记忆；
  - 语义搜索；
  - 中断；
  - 测试；
  - 应用结构。

截图里的课程：

- `企业级知识库第一讲` 到 `企业级知识库第十讲`

这部分可以作为 AI 学习知识库阶段的项目参考，但不要直接停留在跟课。你要把课程里的“企业知识库”能力迁移到自己的学习场景：课程目录、学习计划、阶段任务、项目笔记、问答推荐。

## 5. 分阶段执行路线

## 阶段 1：前端管理后台闭环

周期建议：4 周

### 阶段目标

先把你最熟悉的前端做成标准企业后台，并用 TypeScript 补齐你的短板。

### 技术栈

```text
Vue3
Vite
TypeScript
Element Plus
Vue Router
Pinia
Axios
ESLint
Prettier
```

### 对应课程

架构课：

- `前端工具链`
  - Prettier；
  - ESLint；
  - ESLint + Prettier 实战；
  - Babel 基础可粗看。
- `vite 深度剖析`
  - 环境变量；
  - CSS 工程化；
  - 静态资源；
  - Code Splitting；
  - Vite 性能优化。

高薪课：

- `TypeScript`
- `Vue3`
- `Vue + TypeScript`
- `工程化`
- `Vite`
- `前端工程化体系`

### 要做的功能

- 初始化前端项目；
- 配置 TypeScript；
- 配置 ESLint + Prettier；
- 配置环境变量；
- 搭建 Layout；
- 登录页；
- 首页 Dashboard；
- 菜单；
- 路由；
- 路由守卫；
- Pinia 用户状态；
- Axios 请求封装；
- Mock 接口；
- 用户列表；
- 角色列表；
- 文档列表；
- 新增/编辑弹窗；
- 通用表格和表单封装。

### 验收标准

- 能解释前端目录结构；
- 能说清楚 TypeScript 在项目里解决了什么问题；
- 能独立新增一个业务页面；
- 能封装 API 请求；
- 能实现前端路由权限；
- 能构建出生产包。

### 暂时不做

- 后端真实接口；
- 数据库；
- AI；
- 复杂权限；
- 微前端；
- 源码分析。

## 阶段 2：前端 CI/CD 与静态部署闭环

周期建议：2-3 周

### 阶段目标

让前端项目从“本地能跑”变成“提交代码后可以自动部署”。

### 对应课程

架构课：

- `运维`
  - Linux 基础命令；
  - SSH 服务管理；
  - Nginx 服务管理和配置；
  - Nginx 反向代理和 HTTPS；
  - Docker 安装和管理；
  - GitLab/Jenkins 安装配置和使用；
  - 发布流程策略介绍和部署。

高薪课：

- `项目部署流程`
- `Vue 项目上线`
- `Node.js 环境部署`

补充：

- GitHub Actions 官方文档；
- Cursor 辅助生成 workflow。

### 要做的功能

- 准备一台云服务器；
- 安装 Node、pnpm、Nginx；
- 前端项目打包；
- Nginx 托管前端静态资源；
- 用服务器 IP 访问前端页面；
- 配置 GitHub Actions；
- push main 后自动构建；
- 自动把 dist 部署到服务器；
- 可选：绑定域名；
- 可选：配置 HTTPS。

### 验收标准

- 本地提交代码后，线上页面能自动更新；
- 能解释 DNS、域名、服务器、Nginx 的关系；
- 能解释 GitHub Actions 做了哪些步骤；
- 能定位一次构建失败；
- 能手动回滚到上一个版本。

### 你要搞懂的关系

```text
GitHub
  -> GitHub Actions 构建
  -> SSH 到服务器
  -> 上传 dist
  -> Nginx 返回静态页面
```

到这里，你的前端能力形成第一个闭环：

```text
开发 -> 构建 -> 部署 -> 自动发布
```

## 阶段 3：Monorepo 搭建

周期建议：1-2 周

### 阶段目标

把前端和后端放到一个仓库里，为后续全栈项目打基础。

### 对应课程

架构课：

- `企业级包管理方案`
  - 包描述文件；
  - 发布 npm 包；
  - 多包管理方案；
  - 搭建 Monorepo 工程；
  - 搭建内部组件库；
  - 组件的打包与引用。
- `企业级监控平台全栈架构设计`
  - turbo。

高薪课：

- `工程化`
- `前端工程化体系`
- `模块化架构设计`

### 推荐目录

```text
learnpilot-ai/
  apps/
    web/
    api/
  packages/
    shared/
  package.json
  pnpm-workspace.yaml
```

### 要做的功能

- 创建 pnpm workspace；
- 把前端迁入 `apps/web`；
- 创建 `apps/api` 空目录；
- 创建 `packages/shared`；
- 在 shared 里放公共类型；
- 前端引用 shared 类型；
- 根目录统一管理 scripts；
- 根目录执行前端 dev/build。

### 验收标准

- `pnpm install` 能安装全部依赖；
- `pnpm --filter web dev` 能启动前端；
- `packages/shared` 能被前端引用；
- 能解释 Monorepo 的价值；
- 能说明什么时候需要 turbo，什么时候不需要。

## 阶段 4：NestJS 后端与数据库闭环

周期建议：4-6 周

### 阶段目标

完成你的第一个可用后端服务：接口、数据库、登录、权限、课程目录/学习计划/文档 CRUD。

### 技术栈

```text
NestJS
TypeScript
TypeORM
MySQL 或 PostgreSQL
JWT
Passport
RBAC
```

### 对应课程

架构课：

- `NestJS`
  - Nest CLI；
  - 三层架构与 MVC；
  - IoC；
  - 装饰器；
  - 模块；
  - AOP；
  - 中间件与守卫；
  - 拦截器；
  - 管道与过滤器；
  - 文件上传；
  - MySQL 回顾；
  - ORM 理解；
  - TypeORM 基本使用；
  - Repository 与 QueryBuilder；
  - TypeORM 表关系；
  - Nest 中使用 TypeORM；
  - Session 与 JWT；
  - JWT 登录注册；
  - Passport；
  - 环境变量；
  - RBAC 权限设计；
  - 日志处理。

高薪课：

- `Node`
- `Node.js服务架构`
- `数据库设计范式`
- `Postgres数据库`
- `服务端请求`
- `模块化架构设计`
- `可扩展架构设计`

### 要做的功能

- 在 `apps/api` 初始化 NestJS；
- 新增 `/health` 接口；
- 连接数据库；
- 用户表；
- 角色表；
- 权限表；
- 课程表；
- 课程章节表；
- 学习阶段表；
- 学习任务表；
- 文档表；
- 登录注册；
- JWT 鉴权；
- RBAC 权限；
- 用户管理接口；
- 角色管理接口；
- 课程目录 CRUD；
- 学习阶段 CRUD；
- 学习任务 CRUD；
- 文档 CRUD；
- 统一异常处理；
- 日志；
- Swagger/OpenAPI 可选。

### 建议数据表

```text
users
roles
permissions
user_roles
role_permissions
documents
document_categories
courses
course_chapters
learning_stages
learning_tasks
```

后续 AI 阶段再加：

```text
conversations
messages
document_chunks
feedbacks
```

### 验收标准

- 后端可以启动；
- `/health` 可访问；
- 数据库连接成功；
- 前端可以调用后端接口；
- 登录后拿到 token；
- token 可以保护接口；
- 用户、角色、文档可以增删改查；
- 能解释 Controller、Service、Entity、Repository 的职责。

## 阶段 5：前后端联调与统一部署

周期建议：3-4 周

### 阶段目标

让前端、后端、数据库在一台服务器上完整运行。

### 对应课程

架构课：

- `运维`
  - Nginx 反向代理；
  - Docker；
  - 发布流程；
  - Jenkins/GitLab 了解思想。

高薪课：

- `Vue 项目上线`
- `Node.js 服务部署`
- `Node.js 环境部署`
- `服务端部署策略`

### 要做的功能

- 前端请求 `/api`；
- Nginx 把 `/api` 转发到 NestJS；
- 后端读取环境变量；
- 数据库在 Docker 中运行；
- 后端 Dockerfile；
- 前端 Dockerfile 或静态资源部署；
- docker-compose 编排；
- GitHub Actions 部署整套服务；
- 区分前端构建和后端构建。

### 推荐第一版部署结构

```text
一台云服务器
  Nginx
  web 静态资源
  api NestJS 服务
  database MySQL/PostgreSQL
```

请求链路：

```text
浏览器访问 https://your-domain.com
  -> Nginx 返回前端页面
前端请求 https://your-domain.com/api/users
  -> Nginx 转发到 NestJS
NestJS
  -> 访问数据库
```

### GitHub Actions 区分方式

第一版：

```text
main 分支 push
  -> 前端和后端一起构建
  -> SSH 到服务器
  -> docker compose up -d
```

第二版再优化：

```text
apps/web/** 变化 -> 构建前端
apps/api/** 变化 -> 构建后端
packages/shared/** 变化 -> 前后端都构建
```

### 验收标准

- 线上前端能访问；
- 线上前端能请求后端；
- 后端能访问数据库；
- GitHub Actions 能自动部署；
- Nginx 代理正确；
- 数据库端口不暴露公网；
- 能解释域名、服务器、Nginx、后端、数据库之间的关系。

## 阶段 6：AI 学习教练 V1

周期建议：3-4 周

### 阶段目标

先做一个不依赖完整 RAG 的 AI 学习教练，让它能基于你手动录入的阶段、任务和课程目录，生成下一步学习建议。

### 对应课程

架构课：

- `前端+AI（基础篇）`
  - Cursor；
  - LLM 基础；
  - Agent；
  - Function Calling；
  - MCP；
  - 提示词工程；
  - RAG 基础。
- `LangChain（基础篇）`
  - 模型接口；
  - 提示词模板；
  - 结构化输出；
  - 流式返回；
  - Tools 基础；
  - Agent 基础。

高薪课：

- `AI编程`
- `AI环境搭建`
- `AI编程实战`

截图课程：

- `企业级知识库第一讲` 到 `企业级知识库第十讲`

### 要做的功能

- 后端配置大模型 API key；
- 新增 AI 学习建议接口；
- 前端 AI 问答页面；
- 用户输入问题，比如“我现在在阶段 2，接下来该看什么”；
- 后端调用大模型；
- 返回学习建议；
- 保存问答历史；
- Prompt 模板配置；
- 支持把当前学习阶段、课程目录、任务列表作为上下文传给大模型；
- 生成本周学习计划；
- 生成下一步任务建议；
- 生成当前阶段需要看的课程章节；
- 错误和超时处理。

### 验收标准

- 用户可以在页面提问学习路线相关问题；
- 后端可以调用大模型；
- 问答历史能保存；
- API key 不暴露给前端；
- 能解释 Prompt 在系统里的作用；
- 能解释普通 AI 问答和 RAG 的区别；
- AI 能根据当前阶段和已有课程目录生成下一步学习建议。

## 阶段 7：RAG 学习知识库 V2

周期建议：4-6 周

### 阶段目标

让 AI 基于你上传的课程目录、学习规划、项目笔记、Cursor 对话总结来回答问题，形成真正的个人学习知识库。

### 对应课程

架构课：

- `前端+AI（基础篇）`
  - RAG 基础；
  - 提示词工程；
  - Function Calling；
  - MCP 可选。
- `LangChain（基础篇）`
  - Loader；
  - 文本切割；
  - 嵌入处理；
  - 向量库；
  - 检索优化；
  - RAG 实践；
  - Memory；
  - Tools。
- `AI 平台篇（扣子&Dify）`
  - 知识库；
  - 工作流；
  - Dify；
  - 本地部署 Dify。
- `LangGraph`
  - State；
  - 节点；
  - 条件路由；
  - Checkpoint；
  - 长期记忆；
  - 语义搜索。

截图课程：

- `企业级知识库第一讲` 到 `企业级知识库第十讲`

### 要做的功能

- 课程目录文档上传；
- 学习规划文档上传；
- 项目笔记上传；
- Cursor 对话总结上传；
- 文档解析；
- 文档切片；
- 文档片段入库；
- embedding；
- 向量检索；
- 基于检索结果生成回答；
- 答案引用来源；
- 问答反馈；
- 低质量回答记录；
- 根据资料生成本周学习计划；
- 根据项目进度推荐课程章节；
- 根据学习笔记生成复盘；
- 根据项目内容生成简历描述。

### 技术建议

第一版可以简单：

```text
课程目录/规划/笔记切片存数据库
关键词检索或简单全文检索
检索结果拼 Prompt
大模型回答
```

第二版再升级：

```text
PostgreSQL + pgvector
或独立向量数据库
或 Dify/LangChain 方案
```

### 验收标准

- 上传课程目录、规划、笔记后可以基于资料问答；
- 回答能展示来源；
- 用户可以反馈答案质量；
- 能解释 RAG 链路；
- 能说明为什么第一版不做大模型微调；
- 能让系统回答“我当前阶段下一步该学什么”。

## 阶段 8：监控、性能与简历包装

周期建议：3-4 周

### 阶段目标

把项目从“能跑”变成“像真实企业项目”。

### 对应课程

架构课：

- `前端服务监控`
  - JS 错误监听；
  - JS 错误采集；
  - 数据上报；
  - 页面性能监控；
  - 用户行为收集；
  - API 请求数据采集。
- `企业级监控平台全栈架构设计`
  - SDK 子包工程化；
  - 错误与性能采集；
  - 后端项目；
  - 前端监控平台；
  - Docker；
  - turbo。

高薪课：

- `性能优化策略`
- `渲染性能优化`
- `请求性能优化`
- `前端企业级项目`
- `Vite Devtools`

### 要做的功能

- 前端 JS 错误捕获；
- Promise 错误捕获；
- 接口错误上报；
- 页面性能指标；
- 后端请求日志；
- 慢接口记录；
- AI 调用耗时记录；
- AI 调用失败记录；
- 简单监控看板；
- README；
- 架构图；
- 部署文档；
- 简历项目描述。

### 验收标准

- 能定位前端错误；
- 能查看接口异常；
- 能看到 AI 调用耗时；
- 能说清楚项目部署流程；
- 能把项目讲成 5-10 分钟面试项目；
- 能回答架构、权限、部署、AI、监控相关问题。

## 6. 哪些课程暂时不看

为了避免分心，下面这些先不作为主线：

- React 源码完整课；
- Vue 源码完整课；
- 微前端完整课；
- Electron；
- D3 全量课程；
- 小程序、uniapp、React Native；
- K8s、Ansible、Zabbix、ELK 全量运维；
- 大模型微调；
- Java/Spring 全栈；
- 大量算法刷题；
- 过旧 webpack 细节。

不是没用，而是现在不能抢主线时间。

## 7. 每周学习节奏

结合你的情况：

- 工作时间稳定；
- 通勤较长；
- 有孩子；
- 有副业；
- 不适合每天高强度学习。

建议：

```text
工作日 3 晚：每晚 1 小时写项目
通勤：听当前阶段课程
周末：半天集中开发
每周：一个小功能 + 一篇项目笔记
```

每周不要超过一个主题。

例如：

- 本周只做前端路由权限；
- 下周只做 GitHub Actions 前端部署；
- 再下周只做 NestJS health 接口；
- 再下周只做数据库连接。

## 8. Cursor 使用规则

可以用 Cursor，但不能让它完全代写后自己不懂。

推荐流程：

1. 自己写需求；
2. 自己画流程；
3. 让 Cursor review 设计；
4. 让 Cursor 生成第一版代码；
5. 自己逐文件读；
6. 让 Cursor 解释关键代码；
7. 自己调试；
8. 让 Cursor 做 code review；
9. 自己写项目笔记。

每做完一个模块，都问自己：

- 这个模块解决什么问题？
- 数据怎么流转？
- 如果线上报错，怎么定位？
- 如果需求变化，改哪里？
- 面试官问我，我能不能讲清楚？

## 9. 最小可行版本

不要一开始做完整企业级项目。

### V1：前端闭环版

- Vue3 管理后台；
- Mock 数据；
- 路由权限；
- TypeScript；
- 前端 CI/CD；
- Nginx 静态部署。

### V2：全栈闭环版

- Monorepo；
- NestJS；
- 数据库；
- 登录；
- JWT；
- 课程目录 CRUD；
- 学习阶段 CRUD；
- 学习任务 CRUD；
- 文档 CRUD；
- 前后端联调；
- Docker Compose。

### V3：AI 学习教练版

- AI 学习建议；
- 问答历史；
- Prompt 模板；
- 根据当前阶段生成下一步计划；
- 根据课程目录推荐章节；
- 根据项目进度生成任务；
- 简单学习路线问答。

### V4：RAG 学习知识库与简历项目版

- RAG；
- 课程目录/规划/笔记上传；
- 答案引用；
- 反馈；
- 周计划生成；
- 阶段复盘生成；
- 简历项目描述生成；
- 监控；
- CI/CD 全链路；
- README；
- 架构图；
- 部署文档。

## 10. 最终路线总结

你的正确路线是：

```text
Vue3 + Vite + TS + Element Plus 管理后台
  -> 前端 CI/CD 和 Nginx 部署
  -> pnpm workspace Monorepo
  -> NestJS + TypeORM + 数据库
  -> 前后端联调
  -> Docker Compose + GitHub Actions
  -> AI 学习教练
  -> RAG 学习知识库
  -> 监控、性能、文档、简历包装
```

这条路线和你已有的高薪课、架构课是匹配的。

你现在不需要再买新的 AI 全栈课。先用现有课程和 `知航 AI` 这个项目，把前端、后端、部署、AI 和个人学习规划串成一个完整闭环。
