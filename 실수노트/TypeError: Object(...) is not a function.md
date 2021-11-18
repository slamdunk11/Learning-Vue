```javascript
import apiname from "../api/index.js";
```
이라고 하니까 TypeError: Object(...) is not a function 에러났다

```javascript
import { apiname } from "../api/index.js";
```
이렇게 바꾸니까 괜찮았다
