# 오늘 하려고 했던 것
- 클릭하면 input, input 바깥 클릭하면 div

![image](https://user-images.githubusercontent.com/61729276/146191430-fed0af37-4396-4f0b-a065-b5c8d9b77a57.png)
![image](https://user-images.githubusercontent.com/61729276/146191451-20aa7e3e-0c46-41c4-b76a-939bac9960f5.png)

- v-text-field에서 @blur를 사용하니 체크 버튼마저 v-text-field 바깥으로 인식해버려 체크 버튼의 클릭이 먼저 인식이 안되는 문제가 있었음 
```javascript
    <v-row>
      <v-col v-if="isEdit" class="flex-box">
        <v-text-field v-model="email" @blur="isEdit=false"></v-text-field>
        <v-icon @click="clickCheck()">mdi-check</v-icon>
      </v-col>
      <v-col v-else class="flex-box">
        <div>{{email}}</div>
        <v-icon @click="isEdit = true">mdi-pencil</v-icon>
      </v-col>
    </v-row>
```

# 해결방안
- 그래서 vuetify의 append를 이용해서 v-text-field 안으로 넣어버림
```javascript
    <v-row>
      <v-col v-if="isEdit" class="flex-box">
        <v-text-field class="ma-0 pa-0" v-model="email" append-icon="mdi-check" @blur="isEdit=false" @click:append="clickCheck()">
        </v-text-field>
      </v-col>
      <v-col v-else class="flex-box">
        <div>{{email}}</div>
        <v-icon @click="isEdit = true">mdi-pencil</v-icon>
      </v-col>
    </v-row>
```
