var elUser = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minlength) {
  if (elUser.value.length < minlength){
    elMsg.textContent = 'Username must be ' + minlength + ' characteres or more';
  }
  else {
    elMsg.textContent = 'Username correct';
  }
}

elUser.addEventListener('blur', function(){checkUsername(6);},false);
