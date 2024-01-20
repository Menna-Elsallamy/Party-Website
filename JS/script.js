var t = 1;
var radius = 50;
var squareSize = 6.5;
var prec = 19.55;
var fuzzy = 0.001;
var inc = (Math.PI-fuzzy)/prec;
var discoBall = document.getElementById("discoBall");

for(var t=fuzzy; t<Math.PI; t+=inc) {
  var z = radius * Math.cos(t);
  var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
  var circumference = Math.abs(2 * Math.PI * currentRadius);
  var squaresThatFit = Math.floor(circumference / squareSize);
  var angleInc = (Math.PI*2-fuzzy) / squaresThatFit;
  for(var i=angleInc/2+fuzzy; i<(Math.PI*2); i+=angleInc) {
    var square = document.createElement("div");
    var squareTile = document.createElement("div");
    squareTile.style.width = squareSize + "px";
    squareTile.style.height = squareSize + "px";
    squareTile.style.transformOrigin = "0 0 0";
    squareTile.style.webkitTransformOrigin = "0 0 0";
    squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    if((t>1.3 && t<1.9) || (t<-1.3 && t>-1.9)) {
      squareTile.style.backgroundColor = randomColor("bright");
    } else {
      squareTile.style.backgroundColor = randomColor("any");
    }
    square.appendChild(squareTile);
    square.className = "square";
    squareTile.style.webkitAnimation = "reflect 2s linear infinite";
    squareTile.style.webkitAnimationDelay = String(randomNumber(0,20)/10) + "s";
    squareTile.style.animation = "reflect 2s linear infinite";
    squareTile.style.animationDelay = String(randomNumber(0,20)/10) + "s";
    squareTile.style.backfaceVisibility = "hidden";
    var x = radius * Math.cos(i) * Math.sin(t);
    var y = radius * Math.sin(i) * Math.sin(t);
    square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    discoBall.appendChild(square);
  }
}

function randomColor(type) {
  var c;
  if(type == "bright") {
    c = randomNumber(130, 255);
  } else {
    c = randomNumber(110, 190);
  }
  return "rgb(" + c + "," + c + "," + c + ")";
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
  let width=$('.sideBar-inner').innerWidth();
  $("#sideBar").css('left',-width)
  $(".lds-heart").fadeOut(1000,function(){
      $("#loadingscreen").slideUp(1000,function(){
          $("body").css('overflow','auto');
          $("#loadingscreen").remove();
      })
  });
  $(".paragraph").slideUp(0);
  $(".title").click(function(){
    $(".paragraph").not($(this).next(".paragraph")).slideUp(400);
    $(this).next(".paragraph").slideToggle(500);
  });

})
let width=$('.sideBar-inner').innerWidth();
$("#sideBar .self").click(function(){
  $("#sideBar").animate(
      {
          left:'0px'
      },1000
  )
}  
)
$(".clostBtn").click(function(){
  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
})
$("a[href^='#']").click(function(eventinfo){
  let ahref=eventinfo.target.getAttribute('href');
  let sectionOffset=$(ahref).offset().top;
  $("html,body").animate({scrollTop:sectionOffset},1000);
})
var countDownDate = new Date("Dec 06, 2024 16:37:52").getTime();
var myfunc = setInterval(function() {

  var now = new Date().getTime();
  var timeleft = countDownDate - now;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 
    if (timeleft < 0) {
      clearInterval(myfunc);
      document.getElementById("days").innerHTML = ""
      document.getElementById("hours").innerHTML = "" 
      document.getElementById("mins").innerHTML = ""
      document.getElementById("secs").innerHTML = ""
      document.getElementById("end").innerHTML = "TIME UP!!";
  }
  }, 1000);
  var maxLength = 100;
  var textarea = document.getElementById('exampleFormControlTextarea1');
  var charCountDisplay = document.getElementById('charCount');

  textarea.addEventListener('input', function () {
    var currentLength = this.value.length;
    var remaining = maxLength - currentLength;

    charCountDisplay.textContent = remaining + ' characters remaining';

    if (remaining <= 0) {
      this.maxLength = currentLength;
    } else {
      this.maxLength = maxLength;
    }
  });
  
  