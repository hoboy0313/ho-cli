# @hoboy/cli

目前，cli 的设计为三部分。

- 命令 `Command`
- 插件 `Plugin`
- 服务 `Serve`

## 命令 `Command`

需要提供依赖，并且前缀必须为 `@hoboy/cli-`, 例如 `ho dev`, 需要提供 `@hoboy/cli-dev`
依赖包。

## 插件 `Plugin`
目前这部分只做预留，想到需要做的事情就是 `babel` 的预设

## 服务 `Serve`
这部分的功能是用于开发和打包应用。例如 `@hoboy/serve-webpack` 提供 `webpack` 打包能力。
之后，如若使用 `vite`, 或自研 `vite` 这类，也可以用 `@hoboy/serve-*` 的方案命名。
