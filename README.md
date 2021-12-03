# t-ui
## 近期因网络原因，没有更新，可以在[码云](https://gitee.com/wocwin/t-ui)拉取最新代码
## 介绍
> 以 T 字开头是基于 Element-ui 二次封装组件
>
> 以 TAnt 开头是基于 ant-design-vue 二次封装组件（此组件在[码云](https://gitee.com/wocwin/t-ui)，尚未提交到此）

这是我在学习 Vue 中基于[Element-ui](https://element.faas.ele.me/#/zh-CN) 和[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/)二次封装基础组件文档，希望对你有用。可查看 [详细组件案例文档](https://wocwin.github.io/t-ui/) 预览

## 安装依赖
```shell
npm install
```
## 本地运行src中组件示例
```shell
npm run serve
```
## 本地运行vuepress中组件文档
```shell
npm run docs:dev
注：如果安装依赖后console报core.js错，需要下载2.**版本中把library文件夹移动到此项目node_modules中core.js中
或者直接解压项目中library.zip将文件夹移动到项目node_modules中core.js中
```

### 项目打包
```
npm run build
```
