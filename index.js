let monster = document.getElementById('monster');
let email = document.getElementById('email');

let follow = true;

let w = window.innerWidth / 2;
let h = window.innerHeight / 2;

document.onmousemove = function (mouse) {
  if (follow) {
    if (mouse.clientX < w && mouse.clientY < h) {
      monster.src = 'img/idle/2.png';
    } else if (mouse.clientX < w && mouse.clientY > h) {
      monster.src = 'img/idle/3.png';
    } else if (mouse.clientX > w && mouse.clientY < h) {
      monster.src = 'img/idle/5.png';
    } else if (mouse.clientX > w && mouse.clientY > h) {
      monster.src = 'img/idle/4.png';
    }
  }
};

email.oninput = function () {
  num = email.value.length;
  switch (true) {
    case num >= 1 && num < 4:
      monster.src = 'img/read/1.png';
      break;
    case num >= 4 && num < 14:
      monster.src = 'img/read/2.png';
      break;
    case num >= 14:
      monster.src = 'img/read/3.png';
      break;
  }
};

function cover() {
  follow = false;
  let cont = 1;
  const covering = setInterval(function () {
    monster.src = 'img/cover/' + cont + '.png';
    cont < 8 ? cont++ : clearInterval(covering);
  }, 60);
}

function uncover() {
  var cont = 7;
  const uncovering = setInterval(function () {
    monster.src = 'img/cover/' + cont + '.png';
    cont > 1 ? cont-- : clearInterval(uncovering), (follow = true);
  }, 60);
}
