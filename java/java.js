var body = $('body')
var face = $('.face');
var eyes = $('.eye');
var innerEyes = $('.inner-eye');
var mouth = $('.mouth');
var innerMouth = $('.inner-mouth');
var cancel = $('.cancel-container');
var login = $('.login')

body.mousemove(function(e){
  // console.log("x="+ e.pageX)
  // console.log("y="+ e.pageY)
  if(e.pageX <= 415){
    var leftValue = 0;
    // leftValue;
  } else {
    leftValue = 20;
  }
  if(e.pageY <= 245){
    var topValue = 0;
    // topValue;
  } else {
    topValue = 22;
  }
  if((e.pageY >= 112 && e.pageY < 410) && (e.pageX >= 260 && e.pageX < 570)){
    leftValue = 10;
    topValue = 10;
  }
  innerEyes.css({
   left:  leftValue,
   top:   topValue
  });
});

cancel.mouseover(function(event){
  face.toggleClass('happy sad')
})
cancel.mouseout(function(event){
  face.toggleClass('happy sad')
})

login.on('click', function(event){
  event.preventDefault();
  eyes.addClass('wink')
  face.addClass('ecstatic')
})
