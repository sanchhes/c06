function checkUsername() {

  var elMsg = document.getElementById('feedback');
  var elUsername = document.getElementById('username');

  if (elUsername.value.length < 5) {
    elMsg.textContent = 'Username must be 5 chatacteres or more';
  }
  else {
    elMsg.textContent = 'password correct';
  }
}
