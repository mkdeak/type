$(document).ready(function() {
  "use strict";

  // =================
  // Responsive videos
  // =================

  $(".o-wrapper").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });

  // =================
  // Off Canvas menu
  // =================

  $(".js-off-canvas-container").click(function(e) {
    var $container = $(this);
    var $target = $(e.target);
    var $offcanvas = $(".c-off-canvas-content").first();
    var $targetIsOnNavbar =
      $.contains($offcanvas, $target) && $offcanvas == $target;

    if ($target.hasClass("js-off-canvas-toggle")) {
      e.preventDefault();
      $(".js-off-canvas-toggle").toggleClass("is-active");
      $(".js-off-canvas-container").toggleClass("is-active");
    } else if ($container.hasClass("is-active") && !$targetIsOnNavbar) {
      $(".js-off-canvas-toggle").toggleClass("is-active");
      $(".js-off-canvas-container").toggleClass("is-active");
    }
  });
});
