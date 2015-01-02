+function ($) {
  'use strict';

  var leftKeyCode = 37;
  var rightKeyCode = 39;
  var indexKeyCode = 73; // i

  $(document).keydown(function(e) {
    var location = false; // instantiate
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var home = document.getElementById('home');
    if (e.keyCode == leftKeyCode) {
      if (prev) {
        location = prev.href;
      } else if (next) {
        location = home.href;
      }
    } else if (e.keyCode == rightKeyCode) {
      if (next) {
        location = next.href;
      } else if (prev) {
        location = home.href;
      }
    } else if (e.keyCode == indexKeyCode) {
      if (home) {
        location = home.href;
      }
    }
    if (location) {
      window.location.href = location;
    }
  });

}(jQuery);
