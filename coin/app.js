console.log("work")

document.onkeydown=changeBG;
function changeBG(event){
 if (!event) event = window.event;
 console.log(event, event.keyCode)
 switch(event.keyCode){
  case 32: document.body.style.background = "#f8c9c99d";
 }
}  