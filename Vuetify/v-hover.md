# vue에서 mouseover, mouseleave 이용한 hover 표현법
```javascript
<template>
  <div
  @mouseover="isPlus = true"
  @mouseleave="isPlus = false">
  //mouseover와 mouseleave를 이용해 hover효과를 줄 수 있다!, isPlus = true로 표현했지만 함수도 들어가도 된다!
    <v-icon v-if="isPlus" color="red">mdi-plus-circle</v-icon>
    <v-icon v-else color="red">mdi-plus-circle-outline</v-icon>
  </div>
</template>
<script>
  data: function(){
    return{
      isPlus: false,
    }
  }
</script>
```
- 위 방법이 간단하고 좋았지만, + 버튼이 여러개인 경우 isPlus, isOtherPlus...다른 데이터를 여러 개 만들어야했다...
- 같은 isPlus라는 변수를 써버리면 hover 시 동시에 다른 + 버튼들도 불이 들어온다...!

# vue에서 vuetify로 hover 표현법
```javascript
<v-hover v-slot="{hover}>
  <v-icon v-if="hover" color="red">mdi-plus-circle</v-icon>
  <v-icon v-else color="red">mdi-plus-circle-outline</v-icon>
</v-hover>

```
- 이 방식으로 아주 깔끔히 해결했다...!
- 출처: https://vuetifyjs.com/en/components/hover/#usage

> 사실 hover css가 안 먹혀서 이런 저런 방법을 찾았는 데 왜 hover가 안됐는 지 아직 잘 모르겠다...
> css도 열심히 공부해야겠다...하지만 똑같은 방식으로 다른 hover는 했는데...얘는 왜...큼큼
> 왜 안됐는 지 이유도 파악하겠다...!!
