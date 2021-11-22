/*fetch('https://my-json-server.typicode.com/Nurikenov/testdb/memleketter')
  .then(response => response.json())
  .then(commits => console.log(commits));*/

  /*var arr = [3, 7, 6, 8, 10];
  function arraySum(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
      sum += array[i];
      }
  console.log(sum);
  }
  arraySum(arr);*/


  /*var someText = ['Сая', 'Арман','Ардак', 'Жаныл', 'Ердос'];
  let sisa=[];
  let sisa2=[]
  for (let index = 0; index < someText.length ; index++) {
      
      var firstChar = someText[index].substring(0, 1,);
      var firstChar2 = someText[index].substring(3, 4,);
      sisa.push(firstChar);
      if(firstChar2.length==0){
          sisa2.push('гавно');
      }else{
      sisa2.push(firstChar2);
  }
      
  }
  console.log(sisa);
  console.log(sisa2);*/

  let cab = {
    name: '108',
    pc: 24,
    notWork: 6,
    howWorkStudent() {
       let a = this.pc - this.notWork
       return a
      }
  }
