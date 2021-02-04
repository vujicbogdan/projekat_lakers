//on top button
let pageHeight = window.innerHeight;
var naPocetak = document.getElementById("na-pocetak");

window.onscroll = function () {
  scroll()
};

function scroll() {
  if (document.body.scrollTop > pageHeight / 2 || document.documentElement.scrollTop > pageHeight / 2) {
    naPocetak.style.display = "block";

  } else {
    naPocetak.style.display = "none";
  }
}

//efekat za shop slike
$(".display-show").hover(function () {
    $(".display-hidden").show();
    $(".display-show").hide();
  },
  function () {
    $(".display-hidden").hide();
    $(".display-show").show();
  });


$(".display-show1").hover(function () {
    $(".display-hidden1").show();
    $(".display-show1").hide();
  },
  function () {
    $(".display-hidden1").hide();
    $(".display-show1").show();
  });



$(".display-show2").hover(function () {
    $(".display-hidden2").show();
    $(".display-show2").hide();
  },
  function () {
    $(".display-hidden2").hide();
    $(".display-show2").show();
  });



$(".display-show3").hover(function () {
    $(".display-hidden3").show();
    $(".display-show3").hide();
  },
  function () {
    $(".display-hidden3").hide();
    $(".display-show3").show();
  });

//tajmer

// Set the date we're counting down to
var countDownDate = new Date("Feb 7, 2021 04:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);



// VEGAS
$("#example, #vegas-slider").vegas({
  slides: [{
      src: "img/vegas1.jpg"
    },
    {
      src: "img/vegas2.jpg"
    },
    {
      src: "img/vegas3.jpg"
    },
    {
      src: "img/vegas4.jpg"
    },
    {
      src: "img/vegas5.jpg"
    },
    {
      src: "img/vegas6.jpg"
    }
  ]
});