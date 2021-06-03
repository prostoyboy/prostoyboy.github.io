let status = false;

let container = $('#container');
let facea = $('#facea');

let  w = container.width() - facea.width();
let  d = {};
let  x = 3;

$('#start').click(function(){

  let age = $("#age").val()
  let name = $("#name").val()

  if (age < 18 && name != null){

    status = true;
    confirm('Have a good game, ' + name + '!');
    if (age >0  && name != null)
    if(status) {

      $(window).keydown(function(e) { d[e.which] = true; });

      $(window).keyup(function(e) { d[e.which] = false; });

      setInterval(function() {
        facea.css({
              left: function(i,v) { return newv(v, 37, 39); },
              top: function(i,v) { return newv(v, 38, 40); }
          });
      }, 20);
    }
   
  } else {
    
    confirm('Ohhh sorry, you cant play this game ' + name + '!');

  };

});  

function newv(v,a,b) {
  var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
  return n < 0 ? 0 : n > w ? w : n;
}

$('body').keyup(function(){
  var koor = document.getElementById('facea');   
  var X = koor.offsetTop;
  var Y = koor.offsetLeft;
  console.log('x=[' + X + '] y=[' + Y + ']');

  if(X==620|| Y==250){
    w = container.width() + facea.width();
    $('#facea').css('background', '#67f3d08a');

  }
   if(X>620 || Y>318){
   w = container.width() - facea.width();
   $('#facea').css('background', '#67f3d08a');
   }
})