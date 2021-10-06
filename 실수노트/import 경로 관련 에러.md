# import 경로 관련 에러

![image](https://user-images.githubusercontent.com/61729276/136129907-9d80224a-2f79-49ff-a2e5-77e8fb688aec.png)

- 에러 원인 : 여러 views 컴포넌트들을 한 번에 routes index.js에 import 하고 싶어서 views 폴더로 경로를 지정함

=> 이렇게 하니까 에러남

![image](https://user-images.githubusercontent.com/61729276/136130026-f84b25c2-11f9-430f-97e5-bcff5ecfbc2b.png)


<br/>

=> 이렇게 하면 정상 작동, 하지만 나는 꼭 {} 써서 여러 개 한 번에 넣고 싶었음...

![image](https://user-images.githubusercontent.com/61729276/136130072-51183478-f90b-4c96-b956-1767861bf2c4.png)


그래서...!!

- 해결방법 : views 폴더 안에 index.js를 만듦

![image](https://user-images.githubusercontent.com/61729276/136130375-51b77fa3-a0ff-4c8d-9c62-8d07352a3a9e.png)

```javascript
// views 폴더 안의 index.js
import Detail from "./Detail.vue";
import Intro from "./Intro.vue";
import Login from "./Login.vue";
import Signup from "./Signup.vue";

export { Detail, Intro, Login, Signup };

```

```javascript
// routes 폴더 안의 index.js

import Vue from "vue";
import VueRouter from "vue-router";
import { Login, Signup, Detail, Intro } from "../views/index";
// views의 index.js파일에서 여러 컴포넌트 들고 오기

```

> 생각해보니 react 할 때도 파일에 이렇게 여러 컴포넌트 넣어서 이 파일에서 여러개 import 해왔던 것 같음...
> 역시 복습이 중요하다...

- 참고 자료, 출처
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
- https://stackoverflow.com/questions/43060814/import-multiple-components-in-vue-using-es6-syntax-doesnt-work
