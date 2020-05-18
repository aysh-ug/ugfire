/*
function function_name(x) {
	// body...

if (x.matches) {
var tl = anime.timeline({
  easing: '#redbox',
  duration: 1000
});


var myAnimation = anime({
  targets: '#redbox',
  delay:1000,
  translateX: 300, duration: 1000,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
 
});
}
else{

}
}

var x = window.matchmedia("(min-width:700px)")
myFunction(x)
x.addListener(myFunction)

*/


var tl = anime.timeline({
  easing: '#bluebox',
  duration: 1000
});


var playBlue = anime({
  targets: '#bluebox',
  delay:1000,
  translateX: [{value: 0, duration: 1000},
    {value: 0, duration: 100},
    {value: 100, duration: 100},
  {value: 100, duration: 500},
   ],
delay:500,
     translateY: [{value: 0, duration: 2000},
  {value: 50, duration: 100},
  {value: 50, duration: 1000}],
 direction: 'alternate', 
 loop:true,
  easing: 'easeInOutSine',
 autoplay:false
});

/*----REDBOX-----*/
var t2 = anime.timeline({
  easing: '#redbox',
  duration: 1000
});


var playRed = anime({
  targets: '#redbox',
  delay:2000,
  translateY: [{value: 50, duration: 100},
  {value: 50, duration: 2000}],
  delay:500,
  translateX: [{value: 0, duration: 1000},
  {value: 100, duration: 200},
  {value: 100, duration: 1000}],
 direction: 'alternate', 
 loop:true,
  easing: 'easeInOutSine',
  autoplay: false
 
});

/*----GREENBOX-----*/
var t3 = anime.timeline({
  easing: '#greenbox',
  duration: 1000
});


var playGreen = anime({
  targets: '#greenbox',
  delay:1100,
  translateX: [{value: -50, duration: 100},
  {value: -50, duration: 500},
   {value: 0, duration: 100},
    {value: 0, duration: 2000}],
delay:500,
     translateY: [{value: 0, duration: 2000},
  {value: 50, duration: 100},
  {value: 50, duration: 2000}],
 direction: 'alternate', 
 loop:true,
  easing: 'easeInOutSine',
  autoplay: false
 
});
/*----PURPLEBOX-----*/
var t4 = anime.timeline({
  easing: '#purplebox',
  duration: 1000
});


var playPurple = anime({
  targets: '#purplebox',
  delay:1000,
  translateY: [{value: 50, duration: 100},
  {value: 50, duration: 500}],
  delay:500,
  translateX: [{value: 0, duration: 1000},
  {value: 50, duration: 200},
  {value: 50, duration: 1000}],
 direction: 'alternate', 
 loop:true,
  easing: 'easeInOutSine',
  autoplay:false
 
});

/*----BLACKBOX-----*/
var t5 = anime.timeline({
  easing: '#blackbox',
  duration: 1000

});


var playBlacky = anime({
  targets: '#blackbox',
  translateX: [{value: 0, duration: 1000},
  {value: -50, duration: 200},
  {value: -50, duration: 1000},
  {value: 0, duration: 200},
    {value: 0, duration: 500},
    {value: 50, duration: 200},
      {value: 50, duration: 3000}],
 direction: 'alternate',
loop:true,
  easing: 'easeInOutSine',
 autoplay:false
});

/*----YELLOWBOX-----*/
var t6 = anime.timeline({
  easing: '#yellowbox',
  duration: 1000
});


var playYellow = anime({
  targets: '#yellowbox',
  delay:100,
  translateX: [{value: -100, duration: 100},
  {value: -100, duration: 500},
   {value: 0, duration: 100},
    {value: 0, duration: 2000}],
delay:500,
     translateY: [{value: 0, duration: 2000},
  {value: 50, duration: 100},
  {value: 50, duration: 2000}],
 direction: 'alternate', 
 loop:true,
  easing: 'easeInOutSine',
  autoplay:false
});


var btn = document.querySelector('#animebuttons .play');
btn.addEventListener('click',method1);
btn.addEventListener('click',method2);
btn.addEventListener('click',method3);
btn.addEventListener('click',method4);
btn.addEventListener('click',method5);
btn.addEventListener('click',method6);

function method1(){
  playYellow.play();
}

function method2(){
  playBlue.play();
}

function method3(){
  playRed.play();
}

function method4(){
  playPurple.play();
}

function method5(){
  playBlack.play();
}

function method6(){
  playGreen.play();
}


/*-----------PAUSE--------*/

var btn = document.querySelector('#animebuttons .pause');
btn.addEventListener('click',method1b);
btn.addEventListener('click',method2b);
btn.addEventListener('click',method3b);
btn.addEventListener('click',method4b);
btn.addEventListener('click',method5b);
btn.addEventListener('click',method6b);

function method1b(){
  playYellow.pause();
}

function method2b(){
  playBlue.pause();
}

function method3b(){
  playRed.pause();
}

function method4b(){
  playPurple.pause();
}

function method5b(){
  playBlack.pause();
}

function method6b(){
  playGreen.pause();
}





/*
document.querySelector('#animebuttons .play').onclick = playYellow.play;

document.querySelector('#animebuttons .pause').onclick = playYellow.pause;
*/