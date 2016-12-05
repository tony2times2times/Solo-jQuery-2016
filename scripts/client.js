//Tony Peraza 12/05/16
//Week 3 jquery challenge!
var red = 0;
var yellow = 0;
var green = 0;
var blue = 0;
$(document).ready(function functionName() {
  console.log("Jquery standing by!");
  $(".color-button").click(function(){
    var color = $(this).data('color');
    console.log('You have selected: '+color);
    addBoxer(color);
  });
});

function addBoxer(color) {
  $('.container').append('<button class="color-cube '+color+'"></class>');

  addCount(color);
}
function addCount(color){
  if (color === 'red'){
    red++;
    $('#red').html('Total red: ' + red);
  }
  if (color === 'yellow'){
    yellow++;
    $('#yellow').html('Total yellow: ' + yellow);
  }
  if (color === 'green'){
    green++;
    $('#green').html('Total green: ' + green);
  }
  if (color === 'blue'){
    blue++;
    $('#blue').html('Total blue: ' + blue);
  }
}
