# ES6

- ECMAScript 2015와 동일한 용어
- 최신 Front-End Framework인 React, Angular, Vue에서 권고하는 언어 형식

# Babel

- 사용이유: 구 버전 브라우저 중에서 ES6의 기능을 지원하지 않는 브라우저가 있으므로 transpiling 필요
- ES6의 문법을 각 브라우저의 호환 가능한 ES5로 변환

```
//webpack

module: {
  loaders: [{
    test: /\.js$/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015']
    }
  }]
}
```
