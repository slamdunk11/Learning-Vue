
# ESLint 에러
![image](https://user-images.githubusercontent.com/61729276/134876913-59a236c7-fa02-4007-bea2-88509c992457.png) 

- 원인 : ESLint 에러는 import하고 사용하지 않는 경우에 발생

![image](https://user-images.githubusercontent.com/61729276/134877134-28d0644d-d439-4d5d-a80f-3ba3202397f2.png)

- 해결방법 : 프로젝트 폴더 루트 위치(CLI로 생성한 프로젝트 폴더의 기본 위치)에 vue.config.js 파일 만들기

![image](https://user-images.githubusercontent.com/61729276/134877506-ef059e88-2bc7-40e7-9428-ae9e55652f8b.png)

```javascript
// vue.config.js
module.exports = {
  devServer: {
    overlay: false
  }
}
```
