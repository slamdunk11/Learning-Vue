input 자동으로 컴마 입력

 <input type="text" id="price" onkeyup="inputNumberFormat(this)"/>
 
  
  script (common.js)=> 전역적으로 사용되는 파일들 
  function inputNumberFormat(obj) {
     obj.value = comma(uncomma(obj.value));
 }

 function comma(str) {
     str = String(str);
     return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
 }

 function uncomma(str) {
     str = String(str);
     return str.replace(/[^\d]+/g, '');
 }
 
 출처
 https://mi-nya.tistory.com/248
