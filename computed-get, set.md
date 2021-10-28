# 내가 구현하고 싶었던 것
- 부모 컴포넌트로부터 값을 받아서 자식 컴포넌트의 데이터 초기값으로 쓰고(props 자체를 자식컴포넌트에서 바꿀 수 없음...!) <br/>
=> 다시 자식 컴포넌트에서 부모 컴포넌트로 데이터 전달해서 데이터를 바꾸는 것...!

- 길게 말했지만 view(부모컴포넌트)에서 수정 모달을 띄우고, 수정 모달의 수정된 값을 받아와서 부모컴포넌트에서 수정 처리!

# 잘 안되었던 부분
### 1. 일단 props를 자식 컴포넌트 data 초기값으로 띄우는 것부터 잘 안됐음...
- 공식 홈페이지에서 하라는 대로 하였으나 잘 안됨...아래에 첨부함
- https://v3.ko.vuejs.org/guide/component-props.html#%E1%84%83%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A3%E1%86%BC-%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5-%E1%84%92%E1%85%B3%E1%84%85%E1%85%B3%E1%86%B7
> 1. 이 prop는 초기 값을 전달 하는데만 사용되며 하위 컴포넌트는 이후에 이를 로컬 데이터 속성으로 사용하기만 합니다.
> 2. prop는 변경되어야 할 원시 값으로 전달됩니다.

- 1번 방식을 사용하였음
```javascript
//자식 컴포넌트
props: ['initialCounter'],
data() {
  return {
    counter: this.initialCounter
  }
}
```
- 1번 방식은 아예 안된 걸로 기억함...아무것도 띄워지지 않았음
- 물론 나는 나중에 값을 수정해야했어서 처음부터 2번 방식이 맞았음...하지만 1번으로 했을 때 왜 아예 띄워지지조차 않았는지 의문
- ~~검색결과 받아오는 데이터가 비동기라서 그랬던 것 같음...?~~

### 1-1. 1번 문제 해결 방법
- 2번 방식대로 computed를 사용
```javascript
//자식 컴포넌트
props: {
  edit_text: String
}
computed: {
  editText: function(){
    return this.edit_text
  }
}
```
### 2. 부모로부터 값을 받아와서 띄우기는 되지만 수정할 수 없었음...아예 값이 고정되어버림
- 출처: https://juntcom.tistory.com/103
- 위의 사이트를 참고함!
```javascript
props: {
  default_text: String,
  update: Function
}
computed: {
  editText: 
    get(){
      return this.default_text
    },
    set(newVal){
      this.$emit('update', newVal)
    }
}
```
- 매우 감동스럽게도 수정이 됨...! 그런데 문제는 내가 수정할 때마다, 즉 텍스트 입력할 때마다 수정이 진행되고...함수가 실행되고...api가 호출되어버림
- 이것은 나의 의도와는 몹시 다름
- 나는 수정 버튼을 '클릭'했을 때 수정이 되길 바랬음

### 3. New 문제, 수정할 때마다 수정 X, 버튼 클릭했을 때만 실행!
```javascript
<template>
  ...
  <v-textarea
    v-model="editText"
  />
  ...
  <v-btn @click="onEdit">수정</v-btn>
</template>
<script>
  export default{
    props: {
      default_text: String,
      update: Function
    },
    data: {
      edit_text: "", 
    },
    computed: {
      editText: {
        get(){
          return this.default_text
        },
        set(newVal){
          this.edit_text = newVal
        }
      }
    },
    methods: {
      onEdit(){
        this.$emit("update", this.edit_text);
        <!-- 여기서 바로 this.editText를 넣어보았지만 default_text만 나오고 newVal은 나오지 않음,
             this.editText.get, this.editText.set 둘 다 undefined 나와서 이건 쓸 수 없는 방식이라고 생각함-->
      }
    }
  }
</script>
```
- computed의 editText - set을 이용해서 새롭게 바뀐 값(newVal)을 데이터에 넣어주고, 수정버튼을 누르면 부모로 부터 물려받은 이벤트 호출 함수에 그 데이터 넣어서 실행함
- 이러면 수정버튼 누를 때만 호출되고, 수정됨

