# AGENTS.md - AI Agent Handbook

本文件为 AI Agent 在此仓库中工作提供指导。

## 技能与规范

本项目定义了三层指导体系，统一存放在 `.agents/` 目录下，按需读取。

### `.agents/context/` - 项目上下文

上下文文件包含项目的背景、技术栈、架构、环境配置、开发指南等信息，按需读取。

### `.agents/rules/` - 开发规范

规范文件包含项目开发的核心规则，不会自动加载。当需要确认规范时，主动读取对应文件。

### `.agents/skills/` - 实践技能

技能文件包含具体落地步骤与示例代码，按需读取。

## 工作流

使用 OpenSpec 规范驱动开发，相关文档及配置存放在 `openspec/` 目录下。

最小工作流:

```text
/opsx:propose -> /opsx:apply -> /opsx:archive
```
