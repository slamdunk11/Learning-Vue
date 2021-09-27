# actions 사용 방법

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
  actions: {
    FETCH_NEWS(){
      fetchNewsList()
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    }
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

