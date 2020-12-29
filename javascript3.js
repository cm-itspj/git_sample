//script.js
const btn = document.querySelector('button');
const list = document.querySelectorAll('li');
btn.onclick = function() {
  var arr = [];
  for (var i = 0; i < list.length; i++) {
    arr.push(list[i].textContent);
  }
  alert("こんにちは " + arr.join("さん、") + "さん");
}