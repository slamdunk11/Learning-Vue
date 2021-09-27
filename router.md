# vue-router, router-view, redirect, router-link
# vue-router 설치
```
터미널
npm i vue-router --save
```
- main.js에 router 정리할 수 있지만 X, router 위주 파일이 될 수 있어 
```javascript
// main.js

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
  
  ]
})

new Vue({
  render: h =>h(App),
  router,
})
// 이렇게 main.js에 router 넣어서 할 수도 있지만, 그러면 main.js가 너무 router 편향적인 파일이 되니까 
// routes폴더 따로 만들어준다.
```

# vue-router 쓰는 방법

- src폴더 밑에 routes폴더 만들기=>index.js 만들기

![image](https://user-images.githubusercontent.com/61729276/134804335-5ad8d30f-e411-4f2f-b7cd-c25a93dc6499.png)

```javascript
// index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import {JobsView, AskView, NewsView} from '../views';

Vue.use(VueRouter);

export const router = new VueRouter({ // export로 내보내주기
  mode: 'history', // 주소에 #을 없애준다
  routes: [
    { // path: url 주소, component: url에 해당하는 컴포넌트(페이지)
    path: '/news',
    component: 'NewsView',
    },
    { 
    path: 'ask',
    component: 'AskView',
    },
    { 
    path: '',
    component: '',
    },
    
  ]
```
```javascript
// main.js에 router 넣어주기
import Vue from 'vue';
import App from './App.vue';
import {router} from './routes/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //router: router 축약형
})

```

# router-view 쓰는 방법

```html
<template>
  <div id="app">
    <router-view></router-view>
    // url이 '/news'이면 NewsView 컴포넌트(<NewsView></NewsView>)가 나온다
  </div>
</template>
```

# redirect 쓰는 방법

```javascript
// routes폴더의 index.js

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/news', // 기본화면 news로 설정
    }
  ]
})
```

# router-link 쓰는 방법
- 링크 넣을 컴포넌트(ToolBar) 만들고, App.vue에 컴포넌트에 추가하기
- router-link는 개발자도구 상에서 a태그로 표기된다
```javascript
// App.vue
<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import ToolBar from './components/ToolBar.vue';
  export default{
    components: {
      ToolBar,
    },
  }
</script>
```
```javascript
// ToolBar 컴포넌트
<template>
  <div>
  <router-link to="/news">News</router-link> |
  <router-link to="/ask">Ask</router-link> |
  <router-link to="/jobs">Jobs</router-link>
  </div>
</template>
```
