function checkLengt(e,minLength) {
  var elMsg,el;
  if (!e){
    e = window.event;
  }
  el= e.target
  elMsg = el.nextSibling;

  if (el.value.length < minLength){
    elMsg.innerHTML = 'Username musb be ' + minLength + ' characteres or more';
      }
      else {
        elMsg.textContent = 'Correct username';
      }
}

var elUser = document.getElementById('username');

 if (elUser.addEventListener){
   elUser.addEventListener('blur', function(e){ checkLengt(e, 5);}, false);
 }
 else {
   elUser.attachEvent('onblur', function(e){checkLengt(e, 5);});
 }
