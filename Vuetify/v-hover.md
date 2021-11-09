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
- 같은 isPlus를 써버리면 hover 시 동시에 다른 + 버튼들도 불이 들어온다...!

# vue에서 vuetify로 hover 표현법
```javascript

```
