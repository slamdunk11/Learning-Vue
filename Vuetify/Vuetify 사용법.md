# 1. Vuetify 설치
```javascript
npm install vuetify
```

# 2. Vuetify 사용 설정
```javascript
// main.js
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
...
Vue.use(Vuetify);
...
new Vue({
  ...
  vuetify: new Vuetify(),
}).$mount('#app')
```

# 3. Vuetify Icon 사용 설정
- 아래의 방식 말고도 기타 등등 많은 방식이 있다.
```javascript
// index.html
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

// 사용하고자 하는 컴포넌트
<v-icon>mdi-check</v-icon>
```

# 4. 컴포넌트에서 사용할 때는 v-app으로 감싸서 사용
- v-app으로 감싸지 않으면 vuetify에서 제공하는 class 적용이 안됨
```javascript
<v-app>
  <p class="error--text">error</p>
  <v-text-field class="ma-0"></v-text-field>
</v-app>
```

### 출처
- https://velog.io/@dl_edge/Vue.js-Vuetify-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
- https://k1005.github.io/2021/09/03/vuetify-icons-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0/
