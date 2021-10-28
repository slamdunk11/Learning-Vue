# props 바꾸려다 생기는 에러
> Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders

부모 컴포넌트로부터 props를 받고 이 props를 자식컴포넌트에서 바꾸려고 하면 생기는 오류다

이 오류는 https://kr.vuejs.org/v2/guide/components.html#%EB%8B%A8%EB%B0%A9%ED%96%A5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%9D%90%EB%A6%84
공식문서를 통해 해결할 수 있다

- 혹시 비동기적인 데이터를 가져온다면? <br/>
인스턴스 생성 순서는 '부모 -> 자식'이며, 마운팅 순서는 '자식->부모'이기 떄문에 비동기적으로 데이터를 부모에서 자식으로 줄때 문제가 생긴다.
공식 문서의 2번 방식인 computed를 이용해 해결하자

#### => 쓰는 방법은 내가 잘 정리해두었다 : https://github.com/slamdunk11/Learning-Vue/blob/main/computed-get%2C%20set.md

출처: https://juntcom.tistory.com/103 
