# Vuex
- Vuex 라이브러리 등장 배경인 Flux
- Vuex 라이브러리 주요 속성 state, getters, mutations, actions(data, computed, methods, 비동기 methods)
- Vuex를 더 쉽게 코딩할 수 있는 Helper 함수
> view component-> actions -> mutations -> state(컴포넌트->비동기 로직->동기 로직->상태)

# Flux 패턴(단방향)
- MVC 패턴(model-view 양방향)의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴 - Unidirectional data flow
> [ Action -> dispatcher -> Model(Store) -> View ]
> - action : 화면에서 발생하는 이벤트 또는 사용자의 입력
> - dispatcher : 데이터를 변경하는 방법, 메서드(Model 변경)
> - model : 화면에 표시할 데이터
> - view : 사용자에게 비춰지는 화면(view가 action 호출)

# Vuex 기술 요소
- state: 여러 컴포넌트에 공유되는 data
- getters: 연산된 state 값을 접근하는 속성 computed
- mutations: state 값을 변경하는 이벤트 로직, 메서드 methods
- actions: 비동기 처리 로직을 선언하는 메서드 aysnc methods

![image](https://user-images.githubusercontent.com/61729276/134865038-5e8d1650-afc4-4e81-b715-0c267e5881d1.png) 


# state
```
// Vue
data: {
  message: 'Hello Vue.js!'
}
// Vuex
state: {
  message: 'Hello Vue.js!'
}
```

```
// Vue
<p>{{message}}</p>

// Vuex
<p>{{this.$store.state.messge}}</p>
```

# getters
- state 값에 접근하는 속성이자 computed() 처럼 미리 연산된 값에 접근하는 속성
- 나중에 helper함수 사용 시 <p>{{this.$store.getters.getNumber}}</p>에서 this.getNumber로 줄일 수 있다
```
//store.js
state: {
  num: 10
},
getters: {
  getNumber(state){
    return state.num;
  },
  doubleNumber(state){
    return state.num * 2;
  }
}
```
```
<p>{{this.$store.getters.getNumber}}</p>
<p>{{this.$store.getters.doubleNumber}}</p>
```

# mutations
- state의 값을 변경할 수 있는 유일한 방법이자 메서드
- 뮤테이션은 commit()으로 동작시킨다

```
// store.js
state: {num: 10},
mutations: {
  printNumbers(state){
    return state.num
  },
  sumNumbers(state, anotherNum){
    return state.num + anotherNum;
  }
}

// App.vue
this.$store.commit('printNumbers');
this.$store.commit('sumNumbers', 20);
```

# Vuex 설치하기
> npm install vuex --save

# Store 등록
파일구조|store.js 코드
---------------------|------------------------------------------------------------------------------------------------------
![image](https://user-images.githubusercontent.com/61729276/134608939-605428ed-caf2-44ab-8b59-a182f660c866.png)|![image](https://user-images.githubusercontent.com/61729276/134611602-9eee9c59-fd25-4686-b274-3d1d26fda1aa.png) 

```
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//뷰 플러그인 사용, 뷰 사용 시 전역으로 특정 기능 추가하고 싶을 때

// Todo.vue=> this.$store

export const store = new Vuex.Store({

});
```

```
// main.js
import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

// Vue.config.productionTip = false

new Vue({
        el: '#app',
        store, //store : store 축약
        render: h => h(App),
    })
    // .$mount('#app')
```


