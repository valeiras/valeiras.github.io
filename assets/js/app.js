function exitFullpage() {
   $("#fullpage").removeAttr("style");
   $("body").css("overflow", "visible");
}

function enterFullPage() {
   $("#fullpage").css({
      "backgroundImage": "url(" + this.src + ")",
      "display": "block",
      "top": $(document).scrollTop() + "px",
      "height": window.outerHeight + "px"
   })
   $("body").css("overflow", "hidden");
}

$("img:not(#header-img)").on("click", enterFullPage);
$("#fullpage").on("click", exitFullpage);
$(document).on("keydown", exitFullpage);

// Adjust the top margin of the first section, so there is no content overlap:
const firstSection = $('section:first-of-type');
const navBar = $('#nav-bar');
firstSection.css('margin-top', navBar.css('height'));
   
$(window).on('resize', function (e) {
   console.log(navBar.css('height'));
   console.log(parseFloat(navBar.css('height'))+'px');
   firstSection.css('margin-top', navBar.css('height'));
});

