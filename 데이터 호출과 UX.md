# 데이터 호출 시점
#### 1. 라우터 네비게이션 가드
- 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)

#### 2. 컴포넌트 라이프 사이클 훅
- created: (컴포넌트가 생성)되자마자 호출되는 로직


# 라우터 네비게이션을 이용한 데이터 호출 방법
- 접근 권한 등을 부여하는 데 자주 쓰인다

```javascript
  ...
  routes: [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    beforeEnter: (to, from, next) => {
      console.log('to', to);  // 이동할 url의 라우팅 정보
      console.log('from', from); // 어디서부터 이동인지, 현재 url의 라우팅 정보
      console.log(next); // function
      // next(); // beforeEnter : next 함수가 실행되어야만 그 페이지로 갈 수 있다
      
      bus.$emit('start:spinner');
      
      store.dispatch('FETCH_LIST', route.name) // 여기는 컴포넌트(인스턴스) 쪽 아니고 router에 index니까 $ x
        .then(() => {
          bus.$emit('end:spinner');  // 이 부분은 컴포넌트의 mounted에 붙여야 정보 받아오고 바로 스피너 끝남.
                                     // 안 그러면 정보 받아와놓고도 좀 더 스피너 돈다
          next();
        })
        .catch((error) => {
          console.log(error);
        })
      
      <!-- 예를 들어 이렇게 많이쓴다
        if(!to.auth){ // 인증값이 있으면
          next();
        }else{
          router.replace('/login')
        }
      -->
    },
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
  },
  ],
```

# 컴포넌트 라이프 사이클 훅을 이용한 데이터 호출 방법
```javascript
created(){
  bus.$emit('start:spinner');
  this.$store.dispatch('FETCH_LIST', this.$route.name)
    .then(() => {
      bus.$emit('end:spinner');
    })
    .catch((error) => {
      console.log(error);
    });
}

```


### 참고
- https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards
