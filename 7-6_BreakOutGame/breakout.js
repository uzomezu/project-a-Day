//let portrait = new ScreenOrientation(); // Lock scren in portrait
let canvas = document.getElementById("breakout");
let ctx = canvas.getContext("2d");

// const newGame = function (x, y, radius, dx, paddleWidth, paddleHeight,brickRows,brickColumns) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.dx = dx;
//   this.dy = -dx;
//   this.paddleWidth = paddleWidth;
//   this.paddleHeight = paddleHeight;
//   this.bricks = makeBricksGrid(rows);

// };
//Ball
let x = canvas.width / 2; // temporary
let y = eval(canvas.height - 15); //temporary
let ballRadius = 5;
const dxStart = 3;
let dx = dxStart;
let dy = -dxStart;

//paddle variables
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

//Bricks
let brickRowCount = 1;
let brickColumnCount = 5;
let brickWidth = 50;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 15;
let brickOffsetLeft = 15;
makeBricksGrid = function (rows) {
  let bricks = [];
  for (let i = 0; i < brickColumnCount; i++) {
    bricks[i] = [];
    for (let j = 0; j < rows; j++) {
      bricks[i][j] = { x: 0, y: 0, status: 1 };
    }
  }
  return bricks;
};
bricks = makeBricksGrid(brickRowCount);
console.log(bricks[2]);
//keys and user controls
let rightKeyPress = false;
let leftKeyPress = false;
let startX = 0;
let dist = 0;
// Score
let score = 0;

drawScore = function () {
  ctx.font = "16px monospace";
  ctx.fillStyle = "#7412db";
  ctx.fillText("Score: " + score, 5, 10);
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mousMoverHandler, false);
window.addEventListener("touchstart", touchMoveHandler, false);
window.addEventListener("touchmove", touchMoveHandler, false);
function touchMoveHandler(e) {
  let touchobj = e.changedTouches[0];
  startX = parseInt(touchobj.clientX);
  let relativeX = startX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
  e.preventDefault();
}
function mousMoverHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightKeyPress = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftKeyPress = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightKeyPress = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftKeyPress = false;
  }
}
collisionDetection = function () {
  for (i = 0; i < brickColumnCount; i++) {
    for (j = 0; j < brickRowCount; j++) {
      let b = bricks[i][j];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          console.log(b);
          console.log(b.x, b.x + brickWidth);
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert(
              "YOU WIN, CONGRATULATIONS!" +
                "\n" +
                "Click OK to Go to next Level."
            );
            cancelAnimationFrame(draw);
            brickRowCount += 1;
            bricks = makeBricksGrid(brickRowCount);
            score = 0;
            x = canvas.width / 2;
            y = eval(canvas.height - 15);
            dx = dxStart;
            dy = -dxStart;
            draw();
          }
        }
      }
    }
  }
};
drawBricks = function () {
  for (i = 0; i < brickColumnCount; i++) {
    for (j = 0; j < brickRowCount; j++) {
      if (bricks[i][j].status == 1) {
        let brickX = i * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = j * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[i][j].x = brickX;
        bricks[i][j].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#7412db";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
};

drawPaddle = function () {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
};

drawBall = function () {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "#12dbd8";
  ctx.fill();
  ctx.closePath();
};

draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  drawScore();
  collisionDetection();
  // change direction of ball against walls
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("GAME OVER: Click to restart");
      document.location.reload();
    }
  }
  //

  // Change Paddle Direction
  if (rightKeyPress) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftKeyPress) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  // animate ball new position

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
};

draw();
