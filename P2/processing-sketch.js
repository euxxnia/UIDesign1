function sketchProc(processing) {
    processing.setup = function() {
      processing.size(500, 300);
      processing.background(255);
    };
  
    processing.draw = function() {
      processing.ellipse(processing.mouseX, processing.mouseY, 50, 50);
    };
  }
  
// Processing.js 초기화
// var canvas = document.getElementById("myCanvas");
// new Processing(canvas, sketchProc);

document.addEventListener("DOMContentLoaded", function(){
    var canvas = document.getElementById("myCanvas");
    new Processing(canvas, sketchProc);
})