$(document).ready(function(){


  $('.banner-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow:1,
    arrows:false
  
  }); 
  $('.testimonial-item').slick({
    dots: true,
    infinite: true,
    slidesToShow:1,
    arrows:false
  
  }); 

  // if (window.matchMedia ('(max-width:767px)').matches) {
    $(".drpbtn").click(function(){
      console.log("salkl");
      $(this).toggleClass("open");
      $(".dropdown-content").slideToggle();
      
    })
  // }  

  if(window.matchMedia('(max-width:767px)').matches) {
    $(".navbar-toggle").click(function(){
      $(this).toggleClass("open");
      $(".nav").slideToggle();
    })
  }
});














