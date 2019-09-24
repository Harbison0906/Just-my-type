
let upperKeys = $('#keyboard-upper-container');
let lowerKeys = $('#keyboard-lower-container');
$(upperKeys).hide();

$(document).keydown(function(e) {
  if (e.keyCode == 16) {
    $(upperKeys).show();
    $(lowerKeys).hide();
  };
});

$(document).keyup(function(e) {
  if (e.keyCode == 16) {
    $(upperKeys).hide();
    $(lowerKeys).show();
  };
});


