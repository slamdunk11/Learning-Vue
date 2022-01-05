# Vuex에서 Store의 state를 초기화하는 방법
- state는 최초에 명시되어 있어야 하며, 때로는 기본값을 가지고 있다.
- 이런 state를 mutation에 의해 변경을 하고 이후 어던 작업을 하더라도 초기화되지 않는다.
- 그렇기 때문에 해당 state는 이전 값이 남아있다. 그래서 state 초기화는 필수적이다.

### 방법 1. state의 초기화는 mutation에 의해서 초기값을 지정해주기
```javascript
// state
const state = {
  userList: [],
  isFlag: false,
  userData: {
    id: void 0,
    password: void 0,
    name: void 0,
    age: 30,
    job: 'programmer'
  },
}

// mutations
const mutations = {
  initData (state) {
    state.userList = []
    state.isFlag = false
    state.userData = {
      id: void 0,
      password: void 0,
      name: void 0,
      age: 30,
      job: 'programmer'
    }

  }
}

export {
  state,
  mutations
}
```
### 방법2. 애초부터 state에 명시를 할 경우 별도의 함수로 분리
```javascript
// initialized userData
const USER_DATA = () => {
  return {
    id: void 0,
    password: void 0,
    name: void 0,
    age: 30,
    job: 'programmer'
  }
} 
// state
const state = {
  userList: [],
  isFlag: false,
  userData: USER_DATA(),
}

// mutations
const mutations = {
  initData (state) {
    state.userList = []
    state.isFlag = false
    state.userData = USER_DATA()
  }
}

export {
  state,
  mutations
}
```

# 출처, 참고
https://kdydesign.github.io/2019/04/10/vue-store-state/
