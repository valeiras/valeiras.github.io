function exitFullpage() {
   //$('#img-gallery').removeClass('active');
    $("#img-gallery").removeAttr("style");
   $('#img-gallery').toggleClass(['active', 'inactive']);
   $("body").css("overflow", "visible");
}

function enterFullPage() {
   $('#img-gallery').toggleClass(['active', 'inactive']);
   $("#img-gallery").css({
      "backgroundImage": "url(" + this.src + ")",
      "top": window.scrollY + "px",
      "height": window.outerHeight + "px"
   })
   $("body").css("overflow", "hidden");
}

$("img:not(#header-img)").on("click", enterFullPage);
$("#img-gallery").on("click", exitFullpage);
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

