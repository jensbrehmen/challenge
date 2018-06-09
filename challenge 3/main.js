$(document).ready(function(){
    // Animations
    $("h1").addClass("animated fadeIn");

    // Responsive nav
    $(".open").click(function(){
      $(this).css("display", "none");
      $(".navResponsive").css("width", "100%");
    });

    $(".close").click(function(){
      $(".navResponsive").css("width", "0");
      $(".open").css("display", "block");
    });

});
