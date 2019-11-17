function checkUsername() {

  var elMsg = document.getElementById('feedback');


  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be 5 chatacteres or more';
  }
  else {
    elMsg.textContent = 'password correct';
  }
}

  var elUsername = document.getElementById('username');
  elUsername.onblur = checkUsername;
