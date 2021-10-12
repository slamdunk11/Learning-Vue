
```
axios.get('url?ID=12345')
.then(function(response){
  console.log(response);
});
```
```
axios.get('url', {

  params:{
    ID: 12345
  }
  headers: { 'X-Requested-With': 'XMLHttpRequest'},
})
```


```
axios.post('url',{
  firstName: 'Fried',
  lastName: 'Flintstone'
})
```

axios.delete('url',{
  data:{
    postId: ...,
    commentId: ...,
  }
})
