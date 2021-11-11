/*function myFunction() {
   document.getElementById("part1").innerHTML="Я не останусь на второй год. Потому что я не тормоз и буду работать в Google.";
}*/

const _TEXT ="Я не останусь на второй год. Я буду программистом"

if(sessionStorage.getItem('Kaisar')){
   $("#part1").text(_TEXT)
}

$('#btnData').on('click', function() {
   sessionStorage.setItem('Kaisar', 1)

   $('#part1').text(_TEXT)
})