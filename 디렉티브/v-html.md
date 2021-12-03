# v-html
- html 코드를 직접적으로 입력해줄 때 사용되는 디렉티브
- html코드를 출력해줘야하는데 화면에 그러면 태그들까지 다 나와버리니까...!
- 그럴 때 v-html
```javascript
// Component
<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div>
        <div>
        </div>
      </div>
    </section>
      <!-- 질문 댓글 -->
    <section>
      
    </section>
    <p>
  <!--원래는 이렇게 썼다면 {{ this.$store.state.item.title }} 
      이제는 mapGetters 덕분에 밑의 것처럼 사용-->
      {{ fetchedItem.title }}
    </p>
    
        <section>
      <!-- v-html 없이 밑의 걸로 쓰면 <p>태그까지 다 나와, 
        그래서 p태그를 태그라고 인식시켜주는 v-html 쓴다 -->
      <div v-html="fetchedItem.content">
      <!-- {{ fetchedItem.content }} -->
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['fetchedItem']),
    },
  }  
  
</script>
```

```javascript
// store의 index.js
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {}
    },
    // this.$store.state.item.title => 컴포넌트에서 이렇게 길게 쓰는 것 막기 위해 getters 사용할 수 있다
    getters: {
        fechedItem(state){
            return state.item;
        }
    },
    mutations,
    actions,
})
```

### 참고
- https://vuejs.org/v2/api/#v-html
- https://vuejs.org/v2/guide/syntax.html#Raw-HTML
