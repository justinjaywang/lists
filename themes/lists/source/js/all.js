+function ($) {
  'use strict';

  var leftKeyCode = 37;
  var rightKeyCode = 39;
  var indexKeyCode = 73; // i

  $(document).keydown(function(e) {
    var location = false; // instantiate
    if (e.keyCode == leftKeyCode) {
      var prev = document.getElementById('prev');
      if (prev) {
        location = prev.href;
      }
    } else if (e.keyCode == rightKeyCode) {
      var next = document.getElementById('next');
      if (next) {
        location = next.href;
      }
    } else if (e.keyCode == indexKeyCode) {
      var home = document.getElementById('home');
      if (home) {
        location = home.href;
      }
    }
    if (location) {
      window.location.href = location;
    }
  });

}(jQuery);
