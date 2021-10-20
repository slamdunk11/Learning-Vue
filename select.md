# select 선택한 값 출력(@change, $event 사용)

```javascript
<v-select :item="option" @change="함수명($event)"><v-select>
/// 그냥 select에서도 비슷하다
...
함수명(event){
  console.log(event);
  // 선택한 select 옵션 값이 출력된다
}
```

### 출처, 참고 자료
https://bman-note.tistory.com/10
