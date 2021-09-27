# axios 설치 방법
```
npm i axios --save
```

```javascript
<script>
import axios from 'axios';

export default {
  data(){
    return{
      users: []
    }
  }
  created(){
    axios.get('https://api.hnpwa.com...')
      .then(response => this.users = response.data)  //function(response){}
      .catch(error){
        console.log(error)
      }
  }
}
</script>
```
