+function ($) {
  'use strict';

  var leftKeyCode = 37;
  var rightKeyCode = 39;
  var indexKeyCode = 73; // i

  $(document).keydown(function(e) {
    if (e.keyCode == leftKeyCode) {
      e.preventDefault();
      var prev = document.getElementById('prev');
      if (prev) {
        window.location.href = prev.href;
      }
    } else if (e.keyCode == rightKeyCode) {
      e.preventDefault();
      var next = document.getElementById('next');
      if (next) {
        window.location.href = next.href;
      }
    } else if (e.keyCode == indexKeyCode) {
      e.preventDefault();
      var home = document.getElementById('home');
      if (home) {
        window.location.href = home.href;
      }
    }
  });

}(jQuery);
