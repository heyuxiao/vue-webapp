#### 工程架构

当我们创建一个新项目，或从仓库中拉取一个久项目后，先不要急着写代码，先研究
* README.md
* package.json

#### Vue脚手架使用

```
//创建项目
npm install @vue/cli -g
vue create my-project

//项目启动
npm run serve
npm start

//项目执行EsLint检测和修复
npm run lint

//项目打包上线
//会生成一个/dist的文件夹，这个目录就是要上线的，把这个目录发送给运维工程
//js文件夹中的.map文件是静态资源的映射关系的配置文件
npm run build
```

* [ESLint官网](https://eslint.bootcss.com/)
* ESLint 这样的可以让你在编码的过程中发现问题，并且可以自己创建检测规则，保持代码编写风格的一致性。
* Vue项目中，修改EsLint验证规则，在package。json文件中的rules中设置，
* ESLint规则有3中管理规则，error-2   warn-1  off-0

--------------------------------------------------

## 项目结构说明

#### 1.项目结构介绍
* `src` 开发目录，在src里面写代码
* `src/main.js ` 程序的入口文件
*  `src/App.vue` App组件
*  `src/components` 组件目录
*  `src/assets` 程序的静态资源目录
*  `public` 本地服务器的静态资源目录
*  `store` vuex状态管理目录
*  `utils` 各种接口目录(api.js)
*  `views` 页面组件
*  `router` 路由
*  `dist`  执行`npm run build`所生成的目录

#### 2.单文件组件.vue为扩展名

* [Vue单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)
* `<template></template>`放置HTML模板
* `<script></script>`放置js代码
* `<style></style>`放置样式代码
* 一个`.vue`文件就是一个组件

#### 下载依赖包

* sass (下载之后直接使用)
```
cnpm install sass-loader -D
cnpm install node-sass -D
```
* router (路由)
```
npm install vue-router -S

//在根目录创建router.js文件
import Vue from "vue"
import VueRouter from "vue-router"
//使用Vue.use()注册路由
Vue.use(VueRouter)

//在main.js中引入，在Vue实例化时，进行挂载
```

* store (vuex状态管理)
```
npm install vuex -S

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //注册

//在main.js中引入，在Vue实例化时，进行挂载
```

* UI框架资源下载

* [Font Awesome 字体](http://fontawesome.dashgame.com/)
* [Mint UI](http://mint-ui.github.io/#!/zh-cn)
* [Vatn](https://youzan.github.io/vant/#/zh-CN/)

```
//使用 vant
npm install vant -S
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
```

* axios的使用
```
npm install axios -S

//封装axios    (fetch.js)
```

#### vue.config.js 配置文件
* 配置端口，跨域代理等等
[vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)


