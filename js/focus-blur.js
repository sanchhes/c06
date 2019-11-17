function checkUsername(){
  var username = el.value;
  if (username.length < 5){
    elMsg.className = 'warning';
    elMsg.textContent = 'Not long enough.yet....';
      }
      else{
        elMsg.textContent = 'Correct Username';
      }
  }

function tipUsername(){
  elMsg.className = 'tip';
  elMsg.innerHTML = 'Username must be at least 5 characteres or more';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);
