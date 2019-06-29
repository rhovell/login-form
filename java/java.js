var body = $('body')
var face = $('.face');
var eyes = $('.eye');
var innerEyes = $('.inner-eye');
var mouth = $('.mouth');
var innerMouth = $('.inner-mouth');
var cancel = $('.cancel-container');
var login = $('.login')
var loginForm = $('.login-form')

body.on('mouseover', (function(e){
  // console.log('y='+e.pageY+' x='+e.pageX)
  // console.log('mouse move')
  var screenwidth = $(window).width();
  var screenheight = $(window).height();
  if(e.pageX <= (screenwidth / 2)){
    // console.log("x="+ e.pageX)
    var leftValue = 0;
    // leftValue;
  } else {
    leftValue = 20;
  }
  if(e.pageY <= (screenheight / 2)){
    // console.log("y="+ e.pageY)
    var topValue = 0;
    // topValue;
  } else {
    topValue = 22;
  }
  // if((e.pageY >= 112 && e.pageY < 410) && (e.pageX >= 260 && e.pageX < 570)){
  //   leftValue = 10;
  //   topValue = 10;
  // }
  innerEyes.css({
   left:  leftValue,
   top:   topValue
  });
}));

face.on('mouseover', function(e){
  console.log('y='+e.pageY+' x='+e.pageX)
  leftValue = 10;
  topValue = 10;
  innerEyes.css({
   left:  leftValue,
   top:   topValue
  });
});
cancel.mouseover(function(event){
  face.toggleClass('happy sad');
  mouth.toggleClass('happy sad');
});
cancel.mouseout(function(event){
  face.toggleClass('happy sad');
  mouth.toggleClass('happy sad');
})

login.on('click', function(event){
  event.preventDefault();
  eyes.addClass('wink')
  face.addClass('ecstatic')
  mouth.toggleClass('ecstatic')
  
})
