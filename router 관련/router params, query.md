# 1. params
- router의 params로 전달하면 새로고침 시 날아간다고 함
- post 방식

# 2. query
- router의 query로 전달 시 새로고침해도 남아있음
- get 방식
- 주소 지저분해짐

# 3. query로 Object 전달 시 새로고침하면 안보임
```javascript
methods: {
  clickBtn(item){
    this.$router.push({name: 'VueTest', query: { item: item }})
    // 여기 item이 Object임, item이 {name: 'haha', email: 'haha@naver.com', ... } 이런 형태
  },
}
```
# 4. 그래서 json 데이터 주고 받기를 해봄
```javascript
// 주기 : JSON.stringify(data), json을 string 형태로 변환.
// 받기 : JSON.parse(data), string을 json 형태로 변환.
// 주는 쪽 컴포넌트
methods: {
  clickBtn(item){
    this.$router.push({name: 'VueTest', query: { item: JSON.stringify(item) }})
  },
}
...

// 받는 쪽 컴포넌트
mounted(){
this.dataList = JSON.parse(this.$route.query.item)
}
```

### 출처
- https://velog.io/@kkaemi/Vue-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%EC%8B%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%9C%A0%EC%A7%80
