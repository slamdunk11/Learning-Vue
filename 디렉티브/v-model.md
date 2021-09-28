# v-model 사용법

```javascript
<input v-model="inputText">

new Vue({
  data: {
    inputText: ''
  }
})
```

# v-model 동작원리
- v-bind와 v-on의 기능의 조합
- 한 글자가 끝나야 반응(맨 뒷글자 잘린 위험 있음-한국어, 일본어, 중국어일 경우)
