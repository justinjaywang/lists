+function ($) {
  'use strict';

  var leftKeyCode = 37;
  var rightKeyCode = 39;

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
    }
  });

}(jQuery);
