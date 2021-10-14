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

# v-model 태그 별 이벤트 사용

v-model은 내부적으로 서로 다른 속성을 사용하고 서로 다른 입력 요소에 대해 서로 다른 이벤트를 전송합니다

- text 와 textarea 태그는 value속성과 input이벤트를 사용합니다.
- 체크박스들과 라디오버튼들은 checked 속성과 change 이벤트를 사용합니다.
- Select 태그는 value 를 prop으로, change를 이벤트로 사용합니다.

# v-model 동작원리
- v-bind와 v-on의 기능의 조합
- 한 글자가 끝나야 반응(맨 뒷글자 잘린 위험 있음-한국어, 일본어, 중국어일 경우)

### 출처
https://v3.ko.vuejs.org/guide/forms.html#%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%87%E1%85%A5%E1%86%B8
