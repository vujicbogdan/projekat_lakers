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


$(".display-show").hover(function(){
    $(".display-hidden").show();
    $(".display-show").hide();
  },
  function(){
    $(".display-hidden").hide();
    $(".display-show").show();
  });


  $(".display-show1").hover(function(){
    $(".display-hidden1").show();
    $(".display-show1").hide();
  },
  function(){
    $(".display-hidden1").hide();
    $(".display-show1").show();
  });



  $(".display-show2").hover(function(){
    $(".display-hidden2").show();
    $(".display-show2").hide();
  },
  function(){
    $(".display-hidden2").hide();
    $(".display-show2").show();
  });
  

  
  $(".display-show3").hover(function(){
    $(".display-hidden3").show();
    $(".display-show3").hide();
  },
  function(){
    $(".display-hidden3").hide();
    $(".display-show3").show();
  });