   console.clear();

   function imgHoverIn() {
      $(this).css({
         "transform": "scale(1.01)",
         "transition": "transform 0.25s ease",
         "z-index": "9"
      });
   }

   function imgHoverOut() {
      $(this).css({
         "transform": "scale(1.0)",
         "transition": "transform 0.25s ease",
         "z-index": "1"
      });
   }


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

   $("img").hover(imgHoverIn, imgHoverOut);
   $("img").on("click", enterFullPage);
   $("#fullpage").on("click", exitFullpage);
   $(document).on("keydown", exitFullpage);


