# v-model 사용법

```javascript
<input v-model="message" placeholder="여기를 수정해보세요" />
<p>메시지: {{ message }}</p>

new Vue({
  data: {
    message: ''
  }
})
```

```javascript

// html
...
<div v-for = "item in arr" :key=item.id :id=item.id> //arr만큼 
  <v-text-field v-model="item.name" @input="함수명(item.name)"></v-text-field>
// v-model을 이용하면 textfield에 입력한 값을 함수에 전달할 수 있다 

// script
...
export default{
  data: function(){
  return{
    arr: []
    // 이 배열에 값을 넣어주면 html의 input, textfield 부분에서도 값이 load된다
  }
  }
}
```

# v-model 동작원리
- v-bind와 v-on의 기능의 조합
- 한 글자가 끝나야 반응(맨 뒷글자 잘린 위험 있음-한국어, 일본어, 중국어일 경우)
