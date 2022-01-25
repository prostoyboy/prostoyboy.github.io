function Fibonacci(el) {



    if (Math.sqrt(5 * (el * el) + 4) % 1 == 0 || Math.sqrt(5 * (el * el) - 4) % 1 == 0) {
       console.log("Yes");
    } else {
       console.log("No");
    }
 
 }
 
 Fibonacci(610)