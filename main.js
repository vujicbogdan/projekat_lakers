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

// VEGAS 2
$("#example, #vegas-slider2").vegas({
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

/****Slider java***** */
$.js = function (el) {
  return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    infinite: false,
    arrows: true,
    arrows: true,
    prevArrow: '<div class="slick-prev"> <div class="btn mr-3 btn-warning d-flex justify-content-center align-items-center"> <div>Previous</div><svg class="ml-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <path d="M10.1,19.1l1.5-1.5L7,13h14.1v-2H7l4.6-4.6l-1.5-1.5L3,12L10.1,19.1z"/> </svg></div></div>',
    nextArrow: '<div class="slick-next"> <div class="btn btn-warning d-flex justify-content-center align-items-center"> <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M 14 4.9296875 L 12.5 6.4296875 L 17.070312 11 L 3 11 L 3 13 L 17.070312 13 L 12.5 17.570312 L 14 19.070312 L 21.070312 12 L 14 4.9296875 z"/> </svg> <div>Next</div></div></div>',
    dots: true,
    autoplay: false,
    speed: 1100,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}

carousel();