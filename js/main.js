$(function() {
  if (screen.width <= 540) {
    $.scrollify.disable();
    $(".title").addClass("has-text-centered");
    $(".subtitle").addClass("has-text-centered");
  } else {
  	$.scrollify({
  		section : ".hero",
      interstitialSection:".hero, .end",
      before: function(i, panels) {
        var ref = panels[i].attr("data-section-name");
        if(i===0) {
          $(".sec0").addClass("fadeIn");
          $(".header").addClass("fadeInRightBig");
          $(".subheader").addClass("fadeInUpBig");
        }
        if(i===1) {
          $(".sec1ColLeft").addClass("fadeInLeftBig");
          $(".sec1ColRight").addClass("fadeInRightBig");
        }
        if(i==2) {
          $(".box").addClass("zoomIn");
          $(".img").addClass("fadeInDownBig");
          $(".is-3").addClass("zoomIn");
          $(".is-5").addClass("fadeInUpBig");
        }
        if(i===3) {
          $(".sec3ColLeft").addClass("fadeInLeftBig");
          $(".sec3ColRight").addClass("fadeInRightBig");
        }
        if(i!==0) {
          $(".sec0").removeClass("fadeIn");
          $(".header").removeClass("fadeInRightBig");
          $(".subheader").removeClass("fadeInUpBig");
        }
        if(i!==1) {
          $(".sec1ColLeft").removeClass("fadeInLeftBig");
          $(".sec1ColRight").removeClass("fadeInRightBig");
        }
        if(i!==2) {
          $(".box").removeClass("zoomIn");
          $(".img").removeClass("fadeInDownBig");
          $(".is-3").removeClass("zoomIn");
          $(".is-5").removeClass("fadeInUpBig");
        }
        if(i!==3) {
          $(".sec3ColLeft").removeClass("fadeInLeftBig");
          $(".sec3ColRight").removeClass("fadeInRightBig");
        }
      }
    });
  }
});
