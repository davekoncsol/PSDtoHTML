var left = document.getElementById('left');
var right = document.getElementById('right');
var carosel = document.getElementById('carosel');

right.addEventListener('click', function () {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    carosel.scrollLeft += 60;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 20);
});
left.addEventListener('click', function () {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    carosel.scrollLeft -= 60;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 20);
});


function mountain1() {
  document.getElementById('tab').style.backgroundImage = "url('../images/tab.jpg')"
  document.getElementById('m1').style.background = '#A0A5B0'
  document.getElementById('m1').style.color = 'black !important'
  document.getElementById('m2').style.color = '#A0A5B0 !important'
  document.getElementById('m2').style.background = ''

}

function mountain2() {
  document.getElementById('tab').style.backgroundImage = "url('../images/tab2.jpg')"
  document.getElementById('m2').style.background = '#A0A5B0'
  document.getElementById('m2').style.color = 'black !important'
  document.getElementById('m1').style.color = '#A0A5B0 !important'
  document.getElementById('m1').style.background = ''
}