## 문제
- 탭 버튼 하나 누를 때마다 다른 버튼도 눌러졌다

```javascript

<button v-model="tab"></button>
<button v-model="tab"></button>
<button v-model="tab"></button>

new Vue({
  data: {
    tab: '',
  }
})

```

## 해결방법
- v-model에 들어가는 속성?을 다르게 표기하여 주었다.

```javascript

<button v-model="tab"></button>
<button v-model="tab_mid"></button>
<button v-model="tab_last"></button>

new Vue({
  data: {
    tab: '',
    tab_mid: '',
    tab_last: '',
  }
})

```
