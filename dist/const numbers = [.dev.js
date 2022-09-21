"use strict";

var numbers = [[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // 1
[1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
[1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
[1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
[1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
[1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
[1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // 7
[1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
[1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1] // 9
];
var blocks = [];
var digits = Array.from(document.querySelectorAll('.block'));

for (var i = 0; i < 4; i++) {
  blocks.push(digits.slice(i * 15, i * 15 + 15));
}

var setNum = function setNum(block, num) {
  var n = numbers[num];

  for (var _i = 0; _i < block.length; _i++) {
    block[_i].classList[n[_i] === 1 ? 'add' : 'remove']('active');
  }
};

var time = {
  s: '',
  m: '',
  h: '',
  p: null
}; // time loop

var animator = function animator() {
  var d = new Date(),
      h = d.getHours().toString(),
      m = d.getMinutes().toString(),
      s = d.getSeconds().toString();
  s = s.length === 1 ? '0' + s : s;
  m = m.length === 1 ? '0' + m : m;
  h = h.length === 1 ? '0' + h : h;

  if (s !== time.s) {
    for (var _i2 = 0; _i2 < digits.length; _i2++) {
      var _d = digits[_i2];

      if (_i2 === +s) {
        _d.classList.add('second');

        if (time.p !== null) digits[time.p].classList.remove('second');
        time.p = _i2;
        time.s = s;
      }
    }
  }

  if (m !== time.m) {
    setNum(blocks[2], m[0]);
    setNum(blocks[3], m[1]);
    time.m = m;
  }

  if (h !== time.h) {
    setNum(blocks[0], h[0]);
    setNum(blocks[1], h[1]);
    time.h = h;
  }

  window.requestAnimationFrame(animator);
}; // init


window.requestAnimationFrame(animator); // toggle button

var body = document.querySelector('body');

changeTheme = function changeTheme(ev) {
  body.classList.toggle('light-theme');
};
//# sourceMappingURL=const numbers = [.dev.js.map
