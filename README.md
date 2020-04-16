# vue-cli-xxw

## Project setup
```
系统亮点：
1、根据vue脚手架进行搭建
2、根据vue最新多环境配置规则进行配置
3、后台权限菜单和路由分离开，前端可以自己增减路由，获取后端菜单接口列表，这样便于控制权限；
4、引入国际化模块,根据条件可以进行语言切换
5、引入scss、整合接口地址、集成公共方法等等；方便二次开发。

yarn install  || npm install 
```

### Compiles and hot-reloads for development
```
yarn serve  || npm run server
```

### Compiles and minifies for production
```
yarn build
```
"scripts": {
    "server": "vue-cli-service serve --open",
    "test": "vue-cli-service serve --mode test",
    "production": "vue-cli-service serve --mode production",
    "dev": "vue-cli-service build --mode development",
    "pro": "vue-cli-service build --mode production",
    "stag": "vue-cli-service build --mode stag",
    "preview": "node build/index.js --mode development --preview",
    "previewStag": "node build/index.js --mode stag --preview",
    "lint": "eslint --ext .js,.vue src",
    "svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
},

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
