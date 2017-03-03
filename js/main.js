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
      if(i==2) {
        $(".money").addClass("fadeInDownBig");
        $(".moneyTitle").addClass("zoomIn");
        $(".moneySub").addClass("fadeInUpBig");
        $(".bar").addClass("fadeInDownBig");
        $(".barTitle").addClass("zoomIn");
        $(".barSub").addClass("fadeInUpBig");
        $(".click").addClass("fadeInDownBig");
        $(".clickTitle").addClass("zoomIn");
        $(".clickSub").addClass("fadeInUpBig");
      }
      if(i===3) {
        $(".sec3ColLeft").addClass("fadeInLeftBig");
        $(".sec3ColRight").addClass("fadeInRightBig");
      }
      if(i!==0) {
        $(".sec0").removeClass("fadeIn")
      }
      if(i!==1) {
        $(".sec1ColLeft").removeClass("fadeInLeftBig");
        $(".sec1ColRight").removeClass("fadeInRightBig");
      }
      if(i!==2) {
        $(".money").removeClass("fadeInDownBig");
        $(".moneyTitle").removeClass("zoomIn");
        $(".moneySub").removeClass("fadeInUpBig");
        $(".bar").removeClass("fadeInDownBig");
        $(".barTitle").removeClass("zoomIn");
        $(".barSub").removeClass("fadeInUpBig");
        $(".click").removeClass("fadeInDownBig");
        $(".clickTitle").removeClass("zoomIn");
        $(".clickSub").removeClass("fadeInUpBig");
      }
      if(i!==3) {
        $(".sec3ColLeft").removeClass("fadeInLeftBig");
        $(".sec3ColRight").removeClass("fadeInRightBig");
      }
    }
  });
});
