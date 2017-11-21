var count = store.get('count') || 0;

function next(loc) {
  store.set('count', count + 1);
  window.location.href = loc;
}

function show() {
  var updated = store.get('updated');

  var now = new Date();
  if (updated && (new Date(updated) < now - 5000)) {
    store.set('count', 0);
    count = 0;
    document.getElementById('message').innerHTML = 'You took too long to press the button! The counter reset!';

  } else if (count >= 100 ) {
    window.location.href = 'noice.html';
  } else if (count >= 99 ) {
    document.getElementById('message').innerHTML = 'My life is a lie. I cant believe that I spent time making this. You pressed the button '+count+ ' times.';
  } else if (count >= 98 ) {
    document.getElementById('message').innerHTML = 'AWWAAAAAAAAAYYYYY!!!!!. You pressed the button '+count+ ' times.';
  } else if (count >= 97 ) {
    document.getElementById('message').innerHTML = 'SILVEEEERRRRRRR. You pressed the button '+count+ ' times.';
  } else if (count >= 96 ) {
    document.getElementById('message').innerHTML = 'YOOOOOOOOOOOOOO. You pressed the button '+count+ ' times.';
  } else if (count >= 95 ) {
    document.getElementById('message').innerHTML = 'HIIIIIIGGGGHHHH. You pressed the button '+count+ ' times.';
  } else if (count >= 94 ) {
    document.getElementById('message').innerHTML = "I DONT THINK WE/'RE  IN KNANSAS ANYMORE, TOTO!. You pressed the button "+count+ ' times.';
  } else if (count >= 93 ) {
    document.getElementById('message').innerHTML = 'Pass, into the I R I S. You pressed the button '+count+ ' times.';
  } else if (count >= 92 ) {
    document.getElementById('message').innerHTML = 'Your preserverance has paid off. You pressed the button '+count+ ' times.';
  } else if (count >= 91) {
    document.getElementById('message').innerHTML = 'RAPE! RAAPE! R A P E!. You pressed the button '+count+ ' times.';
  } else if (count >= 80 ) {
    document.getElementById('message').innerHTML = 'I FEEL ENDANGERED. You pressed the button '+count+ ' times.';
  } else if (count >= 70 ) {
    document.getElementById('message').innerHTML = 'SRLY. STAP. You pressed the button '+count+ ' times.';
  } else if (count >= 50 ) {
    document.getElementById('message').innerHTML = 'You realize that you cant press the back button anymore, right? You pressed the button '+count+ ' times.';
  } else if (count >= 40 ) {
    document.getElementById('message').innerHTML = 'Your life is a lie. You pressed the button '+count+ ' times.';
  } else if (count >= 40 ) {
    document.getElementById('message').innerHTML = 'O V E R A C H I E V E R. You pressed the button '+count+ ' times.';
  } else if (count >= 30 ) {
    document.getElementById('message').innerHTML = 'Just die already. You pressed the button '+count+ ' times.';
  } else if (count >= 20 ) {
    document.getElementById('message').innerHTML = 'You would have won a video game achievement by now. You pressed the button '+count+ ' times.';
  } else if (count >= 10 ) {
    document.getElementById('message').innerHTML = 'OOOHHHHHH MMYYYYY GOOOOODDD. You pressed the button '+count+ ' times.';
  } else if (count >= 8 ) {
    document.getElementById('message').innerHTML = 'I lied about the fact that there is escape. You pressed the button '+count+ ' times.';
  } else if (count >= 5 ) {
    document.getElementById('message').innerHTML = 'Yawn. There is no hope. You pressed the button '+count+ ' times.';
  } else if (count >= 3 ) {
    document.getElementById('message').innerHTML = 'Really bruh? You pressed the button '+count+ ' times.';
  } else if (count >= 2 ) {
    document.getElementById('message').innerHTML = 'Is there really any hope? You pressed the button '+count+ ' times.';
  } else if (count >= 1 ) {
    document.getElementById('message').innerHTML = 'At this time you should probably be questioning my motivational speeches. You pressed the button '+count+ ' times.';
  } else if (count >= 8 ) {
    document.getElementById('message').innerHTML = 'You are really troopin, big guy. You pressed the button '+count+ ' times.';

  } else if (count >= 4 ) {
    document.getElementById('message').innerHTML = 'Just a little further. You pressed the button '+count+ ' times.';

  } else if (count >= 2 ) {
    document.getElementById('message').innerHTML = 'Almost there! Keep on going! You pressed the button '+count+ " times.";
  } else {
    document.getElementById('message').innerHTML = 'You pressed the button '+count+ " times.";
  }
  store.set('updated', new Date());
  // store.set('count', count + 1, new Date().getTime() + 5000);

}


show();
