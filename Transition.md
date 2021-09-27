# Transition(애니메이션 속도를 조절하는 방법을 제공)

vue transition 관련 공식 사이트: 
- https://kr.vuejs.org/v2/guide/transitions.html
- https://kr.vuejs.org/v2/guide/transitions.html#%ED%8A%B8%EB%9E%9C%EC%A7%80%EC%85%98-%ED%81%B4%EB%9E%98%EC%8A%A4

```
<template>
  <div>
    <transition-group name="list" tag="ul"> //밑에 있던 ul 태그 없애고 여기 ul 표기
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
         <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
         v-on:click="toggleComplete(todoItem, index)"></i>
         <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
         <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
           <i class="fas fa-trash-alt"></i>
         </span>
      </li>
    </transition-group>
  </div>
</template>
```

```
/* 리스트 아이템 트렌지션 효과 */
.list-enter-active, .list-leave-active{
  transition: all 1s;
}
.list-enter, .list-leave-to 
/* list-leave-active below version 2.1.8 */
{
  opacity: 0;
  transform: translateY(30px);
}
```
