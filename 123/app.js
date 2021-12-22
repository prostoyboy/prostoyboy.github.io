let a = ["Kaisar", "kaisar", 14, 14, 14, false, true, {}, {}, {}]
let b = [null, NaN, "sdfsa", 12, false, {}, []]
let str = 0
let num = 0
let bool = 0
let obj = 0
let nan = 0
function data(arr) {
   for (let i = 0; i < arr.length; i++) {

      if (typeof (arr[i]) == "string") {
         str = str + 1
      } if (typeof (arr[i]) == "number") {
         num++
      } if (typeof (arr[i]) == "boolean") {
         bool++
      } if (typeof (arr[i]) == "object") {
         obj++
      } if (arr[i] == NaN) {
         nan++
      }
      console.log(typeof (arr[i]))
   }
   console.log("num", num)
   console.log("str", str)
   console.log("bool", bool)
   console.log("obj", obj)
   console.log("nan", nan)

}

data(b)