/*var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);*/

/*1*/let n = {}



/*2*/let o = [1, 2, 3]

/*3*/function f(n,o){
    if(n > o){
    return n
    }else {
        return o
    }
}


/*4*/console.log(o[2])

/*5*/o.push(4) 
//alert(b)

/*6*/console.log(o[o.length -1])

/*7*/const shyndyk = true;
/*8*/ if(shyndyk){
     console.log("Shyndyk")
 }else{
    console.log("NO") 
 }


 /*9*/let go = ['Dias','Janer','Serik','Daniar','Kaisar']

 /*10*/function searhName(name){
    go.forEach(af =>{
        if (af == name){
            console.log(name);
        }else {
            console.log('error')
        }
    })
 }

 searhName('Janer')

 /*11*/let my_dreams = 'my dreams are my fantasy'
 /*12*/function letters(letter) {
     letter = letter.split(' ').join('');
     console.log(letter.length);
 }
 letters(my_dreams)

 /*13*/for (let i = 0; i < 1000; i++) {
     if ((3 ** i) && (3 ** i) < 1000){
         console.log(3 ** i)
     }else{
         break
     }
 }


/*14*let center = [7,8]
let number = 4
let number1 = 4/2
let q = [center[0]-number1,center[1]+number1]
let w = [center[0]+number1,center[1]+number1]
let e = [center[0]+number1,center[1]-number1]
let r = [center[0]-number1,center[1]-number1]
console.log(q,w,e,r)*/


 
/*14b*/
let center = [7,8]
let number = 4
let number1 = 4/2
function me(){
    let q = [center[0]-number1,center[1]+number1]
    let w = [center[0]+number1,center[1]+number1]
    let e = [center[0]+number1,center[1]-number1]
    let r = [center[0]-number1,center[1]-number1]
    console.log(q,w,e,r)
}

me()

/*15*/var arr = [];
var index = 0;

function recursive(istr, curstr, count) {
   count--;
   for (var i = 0; i < istr.length; i++) {
      var str = curstr + istr.charAt(i);
      if (count > 0) {
         recursive(istr, str, count);
      }
      else {
         console.log(str);    // showing answers here
         arr[index++] = str;  // or they are in the array here
      }
   }
}

function enumerate(str, n) {
   for (var i = 0; i < n; i++) {
      recursive(str, "", i + 1);
   }
}

enumerate("ab", 2)
