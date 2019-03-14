# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### border.css
>有的手机又一像素误差，为了解决一像素边框被显示为多像素的问题，引入这个border.css文件。


###移动端点击延迟事件 
>移动端浏览器在派发点击事件的时候，通常会出现300ms左右的延迟
   
>原因: 移动端的双击会缩放导致click判断延迟

>解决办法：cnpm install fastclick --save
