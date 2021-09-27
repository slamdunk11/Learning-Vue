# mapState 사용 방법
- 사용 이유: ```<div v-bind:key="item.id" v-for="item in this.$store.state.ask">{{item.title}}</div>```에서 
this.$store.state.ask 이렇게 쓰기 힘듦

```javascript
// AskView.vue(실제 컴포넌트)

<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.id">{{item.title}}</div>
    // fetchedAsk로 바꿔주기
  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex';  // vuex에서 import로 mapState 불러오기

export default {

  computed: {
     ...mapState({
     fetchedAsk: state => state.ask
   })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
  
};
</script>
```

- mapState 없이도 사용 가능
```javascript

export default{
    computed: {
      fetchedAsk(){
        return this.$store.state.ask;
      }
  },
}
```

# mapGetters 사용 방법
- 사용 이유 : mapState보다 간단히 표현 가능
```javascript
// AskView.vue(실제 컴포넌트)

<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex';

export default {

  computed: {
    ...mapGetters([  
      'fetchedAsk'  // fetchedAsk 하나로 하려면 {}가 아니라 []로 바꿔주기
    ])
  },


  // computed: {
  //   ...mapGetters({
  //     fetchedAsk: 'fetchedAsk'  
  // []가 아니라 {} 형태라면 fetchedAsk: 'fetchedAsk'라고 적어야한다, 앞부분 변수명 바꿀 수 있다
  //   })
  // },

  created() {
    this.$store.dispatch('FETCH_ASK');
  },
  
};
</script>
```
```javascript
// store폴더 index.js

import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
    },
    getters: {  // mapGetters 사용하려면 store의 index.js에서 getters 설정해줘야 
        fetchedAsk(state) {
            return state.ask;
        },
    },
    mutations: {...},
    actions: {...},
   
});

```
