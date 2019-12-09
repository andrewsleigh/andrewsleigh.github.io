// Snowflake generator



// P5.js version
// from v5 Java version
// this works ... but there is no easy SVG/PDF export from p5
// canvas is bitmap based, not vectors..
// so actually Processing might be better for this.

// nope - tried that (see v6 .pde)
// now going to try and get this version to spit out a query string.
// and build it with HTML GUI


// v2
// removing all tranforms and drawing with trigonometry instead
// trying to make all sizes relative

// 2019-12-09
// a very rough version  - with lots of old function mess - of all branches being the same on all arms
// needs a lot of cleaning up and variation of branches


// =============================================================================

// -----------------------------------------------------------------------------
// SVG Export

let record = false;
let freezeframe = false; // draw all the snowflakes once on load
let loopGeneration = false; // dont have continuous looping swithed on by default




// let drawBranch1 = false;
// let drawBranch2 = false;
// let drawBranch3 = false;
// let drawBranch4 = false;
// let drawBranch5 = false;
// let drawBranch6 = false;
// let drawBranch7 = false;
// let drawBranch8 = false;
// let drawBranch9 = false;
// let drawBranch10 = false;

// let branch1_Length_multiplier;
// let branch2_Length_multiplier;
// let branch3_Length_multiplier;
// let branch4_Length_multiplier;
// let branch5_Length_multiplier;
// let branch6_Length_multiplier;
// let branch7_Length_multiplier;
// let branch8_Length_multiplier;
// let branch9_Length_multiplier;
// let branch10_Length_multiplier;
// let length_multiplier;

var myCanvas;

// set up some variables to hold size and spacing info, so it can be adjusted in GUI

let arm;
let initialArmLength;
let jiggle;
let branchLength;

let canvasWidth;
let canvasHeight;
let cellWidth;
let cellHeight;
let cellCenter;
let flakeSize;
let flakeMaxSize;
let branchMaxSize;
let branchLengthVariation;
let cols;
let rows;
let row = 0; //Current rows and cols
let col = 0;

function setup() {



  /// TEMP SET MODE TO DEGRESS
  angleMode(DEGREES);

  canvasWidth = 800;
  canvasHeight = canvasWidth;
  myCanvas = createCanvas(canvasWidth, canvasHeight, SVG); // Create SVG Canvas

  frameRate(20);

  // create slider
  Slider_ArmLength = document.getElementById("Slider_ArmLength"); // creating it in HTML
  Slider_BranchLength = document.getElementById("Slider_BranchLength");
  Slider_BranchLengthVariation = document.getElementById("Slider_BranchLengthVariation");
  Slider_NumberOfCells = document.getElementById("Slider_NumberOfCells");

  // create vector for arm
  // initialArmLength = 60;
  // arm = createVector(0, -initialArmLength); // make it double length when drawing



}




// =============================================================================
// 



function draw() {

  noFill();

  // get GUI input
  // generate grid
  cols = Slider_NumberOfCells.value;
  rows = cols;
  cellWidth = canvasWidth / cols;
  cellHeight = cellWidth;

  // size snowflakes proportionately to cell size
  flakeMaxSize = cellWidth * 0.9;
  initialArmLength = flakeMaxSize * Slider_ArmLength.value / 100;

  // size branches proportionately to snowflakes
  branchLength = 20 * (initialArmLength / 100) * (Slider_BranchLength.value / 100);

  // get variation in length of branches
  branchLengthVariation = (Slider_BranchLengthVariation.value / 100);


  // redraw background if we're looping 
  if (!freezeframe || loopGeneration) {
    background(50, 200, 255);
  }




  while (row < rows && col < cols) {
    if (!freezeframe || loopGeneration) {
      drawSnowflakeArms(col, row, initialArmLength);
    }
    //increment for next iteration
    if (col < cols) {
      row++;
      if (row >= rows) {
        col++;
        row = 0;
      }
    }
  }

  // reset grid
  col = 0;
  row = 0;

  if (!freezeframe) {
    freezeframe = true;
  }

  // Save SVG
  if (record == true) {
    save("snowflakes-large3.svg"); // give file name
    print("saved svg");
    record = false;
  }
}



function drawSnowflakeArms(col, row, length) {

  // POSITION
  let centerOfCellX = (col * cellWidth) + (cellWidth / 2);
  let centerOfCellY = (row * cellHeight) + (cellHeight / 2);

  // ARMS
  drawArm(1, centerOfCellX, centerOfCellY, length, 0, 255);
  drawArm(2, centerOfCellX, centerOfCellY, length, 60, 255);
  drawArm(3, centerOfCellX, centerOfCellY, length, 120, 255);

  // BRANCHES
  let halfLength = length / 2;

  for (i = 10; i < halfLength; i = i + (halfLength / 5)) {

    let startOffset = i;

    let pointIn = false;
    // randomise direction of branches:
    if (random(0, 1) > 0.5) {
      pointIn = true;
    }


    // randomise whether branch is drawn at all:
    if (random(0, 1) > 0.6) {
      drawBranchOnAllArms(centerOfCellX, centerOfCellY, length, pointIn, startOffset);
    }



  }
}


function drawArm(armNumber, centerX, centerY, length, rotation, color) {

  //noFill();

  let halfLength = length / 2;
  let startX = centerX + (sin(rotation) * halfLength);
  let startY = centerY - (cos(rotation) * halfLength);
  let endX = centerX - (sin(rotation) * halfLength);
  let endY = centerY + (cos(rotation) * halfLength);

  strokeWeight(1);
  stroke(color);
  line(startX, startY, endX, endY);



}


function drawBranchOnAllArms(centerX, centerY, length, pointIn, startOffset) {

  let variedBranchLength = random(1 - branchLengthVariation, 1) * branchLength;

  for (r = 0; r < 3; r++) {

    let rotation = r * 60;
    let halfLength = (length / 2) - startOffset; // start from the outside 

    let startX = centerX + (sin(rotation) * halfLength);
    let startY = centerY - (cos(rotation) * halfLength);
    let endX = centerX - (sin(rotation) * halfLength);
    let endY = centerY + (cos(rotation) * halfLength);

    drawBranch(startX, startY, variedBranchLength, rotation, true, pointIn); // beginning
    drawBranch(endX, endY, variedBranchLength, rotation, false, pointIn); // end
  }
}



function drawBranch(branchStartX, branchStartY, branchLength, rotation, isBeginning, isPointingIn) {

  // if arm rotation is 120, and angle of branch from arm is 60
  // angle of branch left is 60, and of branch right is 180
  let branch1Rotation = rotation - 60;
  let branch2Rotation = rotation + 60;

  if (isPointingIn == true) {
    branch1Rotation = rotation + 120;
    branch2Rotation = rotation - 120;
  }

  if (isBeginning) {
    beginShape();
    vertex(branchStartX + (sin(branch1Rotation) * branchLength), branchStartY - (cos(branch1Rotation) * branchLength));
    vertex(branchStartX, branchStartY);
    vertex(branchStartX + (sin(branch2Rotation) * branchLength), branchStartY - (cos(branch2Rotation) * branchLength));
    endShape();
  }

  if (!isBeginning) {
    beginShape();
    vertex(branchStartX - (sin(branch1Rotation) * branchLength), branchStartY + (cos(branch1Rotation) * branchLength));
    vertex(branchStartX, branchStartY);
    vertex(branchStartX - (sin(branch2Rotation) * branchLength), branchStartY + (cos(branch2Rotation) * branchLength));
    endShape();
  }
}


function saveArt() {
  record = true;
}

function freeze() {
  freezeframe = !freezeframe;
}

function loopForever() {
  loopGeneration = !loopGeneration;
  if (loopGeneration) {
    document.getElementById("Generate_another_set").disabled = true;
    document.getElementById("Loop_forever").value = 'Pause Looping';
  } else {
    document.getElementById("Generate_another_set").disabled = false;
    document.getElementById("Loop_forever").value = 'Resume looping';
  }
}