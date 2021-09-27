# Vuex 설치 방법
```
// ctrl + c 서버 종료

// vuex 설치
npm i vuex
```

- Vuex 관련해 main.js에서 처리할 수 있지만 api와 마찬가지로 폴더를 따로 만들어서 vuex를 정리한다.
- store 폴더 => index.js

```javascript
// store 폴더에 index.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // Vuex가 플러그인 형태로 제공되기 때문에 use사용

export const store = new Vuex.Store({
  state:{
    news: []
  },
  getters,
  mutations,
  actions,
})
```

```javascript
//main.js

import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index.js'
import {store} from './store/index.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
  router,
  store,
})

```
