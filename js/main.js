$(function() {
	$.scrollify({
		section : ".hero",
    interstitialSection:".hero, .end",
    before: function(i, panels) {
      var ref = panels[i].attr("data-section-name");
      if(i===0) {
        $(".sec0").addClass("fadeIn")
      }
      if(i===1) {
        $(".sec1ColLeft").addClass("fadeInLeftBig");
        $(".sec1ColRight").addClass("fadeInRightBig");
      }
      if(i===2) {
        $(".sec2ColLeft").addClass("fadeInLeftBig");
        $(".sec2ColRight").addClass("fadeInRightBig");
      }
      if(i!==0) {
        $(".sec0").removeClass("fadeIn")
      }
      if(i!==1) {
        $(".sec1ColLeft").removeClass("fadeInLeftBig");
        $(".sec1ColRight").removeClass("fadeInRightBig");
      }
      if(i!==2) {
        $(".sec2ColLeft").removeClass("fadeInLeftBig");
        $(".sec2ColRight").removeClass("fadeInRightBig");
      }
    }
  });
});
