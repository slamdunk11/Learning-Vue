# Reactivity란
- 값을 바꿀 때마다 화면이 바뀌어
- vue의 핵심
- 한글로 말하자면 반응성
- 데이터의 변화를 라이브러리에서 감지해서 알아서 화면에 자동으로 그려주는 것 => 리액티비티 => 데이터바인딩

```
   // Object.defineProperty(대상 객체, 객체의 속성, {
      //   // 문법, 정의할 내용
      // });
      // 객체의 동작을 재정의하는 api

      Object.defineProperty(viewModel, 'str', {
              // 속성에 접근했을 때의 동작을 정의
              get: function () {
                console.log('접근');
              },
              // 속성에 값을 할당했을 때의 동작을 정의
              set: function (newValue) {
                console.log('할당');
                div.innerHTML = newValue;
              },
            });
```
