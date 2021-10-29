# 부모 -> 자식 props 전달

```javascript
// 부모 컴포넌트
<template>
<Button @click="showModal = true">모달 열기</Button>
<!-- 아래와 같이 부모는 자식 컴포넌트에 v-bind 또는 :를 통해 props를 넘김 -->
<!-- 함수의 경우 @넘길함수이름="정의한 함수 이름"을 통해 자식에게 부모 함수를 넘김 -->
<Modal
  :show="showModal"
  :point="this.point"
  @close="handlePointStorageClose"
/>
</template>

<script>
import Modal from '...';
data(){
  return{
    showModal: false,
    point: 1000
  }
},
methods: {
 handlePointStorageClose(close){
  this.showShortageModal = close;
 } 
}
</script>
```

# 자식 -> 부모 이벤트 발생

```javascript
// 자식 컴포넌트
<template>
  <div>
    <!-- prop으로 받은 point는 아래와 같이 template에서는 point로 script에서는 this.point로 사용 -->
    <p>포인트: {{ point }}P</p>
    <!-- 부모로 받은 함수는 template에서는 $emit()으로 script에서는 this.$emit()으로 사용 -->
    <!-- 첫 번째 인자로는 부모로 받은 인자(@close)인 close를 사용하고 두 번째 인자는 부모 컴포넌트 함수의 첫 번째 인자로 들어감 -->
    <Button @click="$emit('close', false)">닫기</Button>
  </div>
</template>
<script>
  export default{
  <!-- 아래와 같이 props로 받은 정보가 어떤 자료형인지 정의, 정의한 경우 정의된 자료형과 다른 자료형의 데이터 들어오면 warning을 console에 띄움 -->
    props: {
      show: Boolean,
      point: Number,
      close: Function,
    },
    methods: {
      <!-- 스크립트 메소드 안에 넣으면 this.emit으로 쓰기! -->
      closeModal: fucntion(){
        this.$emit('close', false)
      }
    }
  }
</script>

```

# 출처
- https://kyounghwan01.github.io/blog/Vue/vue/propsEvent/#%E1%84%87%E1%85%AE%E1%84%86%E1%85%A9-%E1%84%8C%E1%85%A1%E1%84%89%E1%85%B5%E1%86%A8-props-%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AF
- https://joshua1988.github.io/vue-camp/vue/event-emit.html#%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%87%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A2%E1%86%BC-%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8
