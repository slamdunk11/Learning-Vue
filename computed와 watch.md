# computed
> 명령적인 watch 콜백보다 computed 속성을 사용하는 것이 더 좋다.<br/>
> (watch: 감시할 데이터 지정, 그 데이터 바뀌면 함수 실행 => 명령형 프로그래밍)<br/>
> (computed: 계산해야하는 목표데이터를 정의하는 방식 => 선언형 프로그래밍 방식)<br/>
> 일반적으로 선언형이 명령형 프로그래밍보다 코드 반복이 적어 우수하다 평가함
#### 1. computed의 setter함수
- computed 속성은 기본적으로 getter 함수만 가지고 있지만, 필요한 경우 setter 함수를 만들어 쓸 수 있다.
```javascript
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```
#### 2. computed getter, setter 실사용
```javascript
// template
 <v-pagination
  v-model="getListPage"
  :length="totalPages"
  :total-visible="10"
></v-pagination>

// script
computed: {
  getListPage: {
    get(){
      return this.page
    },
    set(newPage){
      this.page = newPage;
      this.getData(); //메소드
    }
  }
},
```

# watch
> watch는 데이터 변화 감지하여 데이터 변할 때마다 실행

#### 1. watch에 바로 함수 지정
```javascript
  data(){
    return{
      message: 'hello'
    }
  },
  watch: {
    message: function(value, oldValue){
      console.log(value);
    }
<!--   message라는 데이터에 watch 속성 지정한 코드, message 데이터가 변할 때마다 watch 속성에서 정의한 함수 실행됨.   -->
  }
```

#### 2. watch에 method 사용
```javascript
  data() {
    return {
      message: 'Hello'
    }
  },
  methods: {
    logMessage() {
      console.log(this.message);
    }
  },
  watch: {
    'message': 'logMessage' // 대상 속성과 메서드 함수를 매칭
  }
```
#### 3. watch에 handler()와 immediate 속성 정의
```javascript
data() {
    return {
      message: 'Hello'
    }
  },
  watch: {
    'message': {
      handler(value, oldValue) {
        console.log(value);
      },
      immediate: true // 컴포넌트가 생성되자마자 즉시 실행
    }
  }
```

### 출처
- https://kr.vuejs.org/v2/guide/computed.html
- https://joshua1988.github.io/vue-camp/syntax/watch.html#watch-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC-%E1%84%86%E1%85%AE%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8
