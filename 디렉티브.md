# v-bind
```
// App.vue
<TodoList v-bind:내려보낼 props 속성 이름 = "현재 위치의 컴포넌트 데이터 속성"></TodoList>

// App의 script 에서는 컴포넌트 데이터 속성 todoItems
export default {
data: function(){
    return{
      todoItems: []
    }
  },
  
// TodoList.vue
// TodoList에서는 받은 props 속성 propsdata
 <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
 
 // TodoList에서는 받은 props 속성 propsdata
 export default {
  props: ['propsdata'],
 
```
```
<template>
  ...
    <TodoList v-bind:propsdata="todoItems"></TodoList>
  ...
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  
  ...

  data: function(){
    return{
      todoItems: []
    }
  },


  methods: {
    
  },
};
</script>
```

```
// TodoList.vue
<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        ...
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  
  methods: {
    removeTodo: function(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem, index){
      console.log(index);
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
};
</script>

```
