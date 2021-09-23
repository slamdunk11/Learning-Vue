# v-on(v-on:click => @click으로도 사용)

```
// App.vue
<TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명"></TodoInput>

// 하위 컴포넌트 TodoInput.vue
  methods: {
    addTodo: function() {
      ...
      this.$emit('이벤트 이름', 인자1, 인자2, ...)
    }
  }

```

```
// App.vue
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    
    methods: {
      addOneItem: function(){
        var obj = {completed: false, item: this.newTodoItem};
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
    }
  },

// TodoInput.vue
  methods: {
    addTodo: function(){
      if (this.newTodoItem !== ''){
      this.$emit('addTodoItem', this.newTodoItem);
      this.clearInput();
      }

    },
    clearInput: function(){
      this.newTodoItem='';
    },  
  },
```
