# v-pagination
```javascript
// template

<v-data-table
  :server-items-length="count"  <!--  v-data-table의 footer의 전체 수에 들어가는 수  -->
  :page="page"
  :options.sync="options"
  :footer-props="footerProps"
  :headers="headers"
  :items="items"
  @page-count="pageCount = $event"
>
</v-data-table>

<v-pagination
  v-model="page"
  :length="pageCount"
  :total-visible="10"
>
</v-pagination>
```

```javascript
// script
export default{
  data(){
    return{
      page: 1,
      pageCount: 1, 
      totalPages: 0,
      options: {},
      footerProps: {'items-per-page-options': [10, 15, 20, -1]},
      headers: [
        {text: "이름", value: "name"},
        {text: "나이", value: "age"},
      ],
      items: [],
      
    }
  },
  watch: {
    options: { // options 변화할 때마다 getData() 실행
      handler(){
        this.getData();
      }
    }
  },
  methods: {
    async getData(){
      const {page, itemsPerPage} = this.options;
      await axios.post("https://api....", {
        page: page,
        page_rows: itemsPerPage,
      })
      .then((response) => {
        this.items = response.data.data;
        this.totalPages = Math.ceil(response.data.total / itemsPerPage);
      })
    },
  },
}
```

***이 부분 보강 필요...v-pagination에서 page 바뀔 때마다 getData 실행되는 것 이유...
