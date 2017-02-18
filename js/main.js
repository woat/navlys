$(function() {
	$.scrollify({
		section : ".hero",
    interstitialSection:".hero, .end",
    before: function(i, panels) {
      var ref = panels[i].attr("data-section-name");

      if(ref==="speed") {
        $(".sec2ColLeft").addClass("fadeInLeftBig");
        $(".sec2ColRight").addClass("fadeInRightBig");
      }
      if(ref==="privacy") {
        $(".sec3ColLeft").addClass("fadeInLeftBig");
        $(".sec3ColRight").addClass("fadeInRightBig");
      }
      if(ref!=="speed") {
        $(".sec2ColLeft").removeClass("fadeInLeftBig");
        $(".sec2ColRight").removeClass("fadeInRightBig");
      }
      if(ref!=="privacy") {
        $(".sec3ColLeft").removeClass("fadeInLeftBig");
        $(".sec3ColRight").removeClass("fadeInRightBig");
      }
    }
  });
});
