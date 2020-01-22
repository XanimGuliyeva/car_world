
 $(document).ready(function(){
     $(".span1").click(function(){
         $(".inside").toggle();
     });
     $(".span2").click(function(){
        $(".inside2").toggle();
    });
 });

$(document).ready(function(){
    $(".span3").click(function(){
        $(".inside").toggle();
    });
});

$(document).ready(function(){
    $(".bar").click(function(){
        $(".inside3").slideToggle();
    });
});

var acc=document.getElementsByClassName("accord");
var i;
for(i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        var panel=this.nextElementSibling;
        if(panel.style.display=="block"){
            panel.style.display ="none";
        }
        else {
            panel.style.display ="block"
        }
})
}


$('.sliderall').slick({
    dots: true,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  AOS.init();



  function Myfunction(category){
    var text = document.getElementsByClassName("opentext");
    for(i=0;i<text.length;i++){
        text[i].style.display="none";
    }
    document.getElementById(category).style.display="block";
}


$('.counter').each(function(){
    var $this=$(this),
    countTo=$this.attr('data-count');
    $({countNum: $this.text()}).animate({
        countNum: countTo
    },

    {
        duration:3000,
        easing: 'linear',
        step: function() {
            $this.text(Math.floor(this.countNum));          
        },
        complete: function() {
            $this.text(this.countNum);          
        },
    });
});