# api 함수 구조화 방법
- src 폴더 밑에 api 폴더 만들기 => index.js 파일 만들기

```javascript

// index.js
import axios from 'axios'  //package.js 안에 설치되어있던 라이브러리 들고 오기

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리 
function fetchNewsList(){
  // return axios.get(config.baseUrl + 'news/1.json')
  return axios.get(`${config.baseUrl}news/1.json`)
  
}

export {
  fetchNewsList
}

```
- 실제 컴포넌트에 api폴더 index.js 적용
```javascript
// NewsView

<script>
  import { fetchNewsList } from '../api/index.js'
  
  export default {
    data(){
      return{
        users: []
      }
    },
    
    created(){
      fetchNewsList()
        .then(response => this.users = response.data)
        .catch(error => console.log(error));
    }
  }
</script>


```
