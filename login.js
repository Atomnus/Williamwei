function unlock() {
  pass_enter = document.getElementById('password').value;
  if(pass_enter == '920463') {
    window.location.href = 'ylial.html';
  }else {
    alert('Passcode is incorrect!');
  }
}
