let count = 0;
let red = 0
document.addEventListener('keydown', function (event) {
   if (event.code == 'KeyZ') {
      let randomtop = Math.floor(Math.random() * 300) + 100;
      let randomLeft = Math.floor(Math.random() * 350) + 100;
      document.getElementById("button").style.top = randomtop + "px"
      document.getElementById("button").style.left = randomLeft + "px"
      if (randomLeft > 150) {
         count = count + 1
      } else {
         red = red + 1
      }

      console.log("ccccc", count);
      console.log("rrrrr", red);
   }

});