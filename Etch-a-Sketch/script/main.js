const container = document.querySelector('.container');

// var noOfSqauares = prompt("Enter no of Squares (max 100)");
var noOfSqauares=12;
var flagForRGB = false;

// All Fucntions
function handler(event) {
  this.style.background = "red";
}

function generateRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

function decideColor() {
  document.getElementById('chooseColor').onclick = function() {
    flagForRGB = !flagForRGB;
  };
  if(!Boolean(flagForRGB)){
    return "red";
  }
  else{
    return generateRGB();
  }
}

function startDrawing() {
  for( var i=0; i<noOfSqauares*noOfSqauares; i++){
    const gridEle = document.createElement('div');
    gridEle.setAttribute('id', `${i}`);
    gridEle.setAttribute('style', `width: ${600/noOfSqauares}px; height: ${600/noOfSqauares}px;`)
    container.appendChild(gridEle);
  }
  
  for(var i=0; i<noOfSqauares*noOfSqauares; i++){
    var check = false;
    document.getElementById(`${i}`).addEventListener("mouseover", function() {
      this.style.backgroundColor = decideColor();
    })
  }
}

//Main program
if(noOfSqauares >=1 && noOfSqauares <= 100){
  startDrawing();
}
else{
  alert("Enter a valid value");
  window.location.reload();
}
