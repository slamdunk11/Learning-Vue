# actions 사용 방법
- store폴더에 index.js에 actions 설정

```javascript

// store 폴더에 index.js

import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";
// api index.js에 정리해둔 api함수

Vue.use(Vuex); 

export const store = new Vuex.Store({
  state:{
    news: [],
    jobs: [],
  },
  actions: {
    FETCH_NEWS(context){
      fetchNewsList()   // fetchNewsList(api) 이용해서 정보 
        .then(response => {
          console.log(response);
          context.commit("SET_NEWS", response.data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    FETCH_JOBS({commit}) { // context 대신 {commit} 넣기
      fetchJobsList()
        .then(({ data }) => {  // response가 아니라 ({data})를 넣어준다 : 디스럭처링
          // console.log(response);
          commit("SET_JOBS", data);  // response.data가 아니라 data 바로 사용 가능, context.commit 아니라 commit 바로 사용 가능
          })
          .catch((error) => {
            console.log(error);
          });
    },
  }
})

```

- 실제 컴포넌트에서 사용(dispatch사용해서 actions 부르기)

```javascript
// NewsView.vue

<script>
export default{
  data(){
    return{
      users: []
    }
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
  
</script>

```

# mutations 사용 방법

- store폴더에 index.js에 mutations 설정

```javascript
// store 폴더에 index.js

import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList} from '../api/index.js';  // api index.js에 정리해둔 api함수

Vue.use(Vuex); 

export const store = new Vuex.Store({
  state:{
    news: []
  },
  mutations: {
    SET_NEWS(state, news){ // response.data를 news로 받음 
      state.news = news;
    }
  },
  actions: {
    FETCH_NEWS(context){
      fetchNewsList()
        .then(response => {
          console.log(response);
          context.commit('SET_NEWS', response.data); // context 이용해서 mutations 호출(mutations로 state 수정)
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
})
```

- 실제 컴포넌트에 state 사용

```javascript
// NewsView.vue

<template>
  <div>
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>  // state는 이렇게 써준다
  </div>
</template>

<script>
export default{

  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
  
</script>
```
