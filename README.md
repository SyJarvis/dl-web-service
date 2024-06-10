# 机器学习深度学习应用平台

这是一个学习案例的平台，我会把我所学到的技术，写成一些服务，放到这里以供使用，以便验证我所学。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



```
yarn --version
```


vue 插件
vue.js devtools



element-ui
https://element.eleme.cn/#/zh-CN/component/installation

axios
https://www.axios-http.cn/docs/intro

npm install axios

axios创建实例
拦截器，在请求或响应被then或catch处理前拦截它们。

axios封装
封装成一个工具方法


拦截器
1.请求拦截器
2.响应拦截器





mock 前端用来模拟后端接口的工具

```
npm i mockjs
```



api/mock.js

```
import Mock from "mockjs";
// 定义mock请求拦截
Mock.mock('/api/home/getData', function(){
    // 拦截到请求后的处理逻辑
    console.log("拦截到请求了");
})
```

main.js

```
import './api/mock'
```





## echarts的基本使用

```
<script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
```

npm i echarts@5.1.2


tag部分比较独立
组件化的思想
Main.js
