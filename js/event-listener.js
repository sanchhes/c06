function checkUsername() {
var elMsg =document.getElementById('feedback');
  if (this.value.length < 5) {
      elMsg.textContent = 'Username must be 5 characteres or more';
      }
      else {
      elMsg.textContent = 'Correct Username';
        }
}

var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);
