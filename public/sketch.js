function setup() {
  createCanvas(800, 400);

  x = width/2;
  y = height/2;
  x_speed = -1 * newSpeed();
  y_speed = -1 * newSpeed();

  paddle_x = width-50;
  paddle_y = 10;
  paddle_speed = newSpeed()+7;
  paddle_speed_up = -1 * paddle_speed;
  paddle_speed_down = paddle_speed;

  paddle_width = 30;
  paddle_height = 150;

  fill(200,240,20);
}

// DRAWING 

function draw() {
	background(255);
	drawBall();
	drawPaddle();

	checkHitLeftWall();
	checkHitTopBottom();
	checkHitPaddle();
}

function drawBall() {
	ball_radius = 40;
  ball = ellipse(x, y, ball_radius*2, ball_radius*2);
  x += x_speed;
  y += y_speed;

}

function drawPaddle() {
	rect(paddle_x, paddle_y, paddle_width, paddle_height);
}

function movePaddleUp() {
	paddle_y += paddle_speed_up;
	drawPaddle();
}

function movePaddleDown() {
	paddle_y += paddle_speed_down;
	drawPaddle();
}

// BALL MOVEMENT - CHECK BOUNDARY HITS

function checkHitLeftWall() {
  if( x < ball_radius ) // Hits left wall
 		x_speed = 1 * newSpeed();
}

function checkHitTopBottom() {
  if( y > (height - ball_radius)) // Hits top or bottom wall
  	y_speed = -1 * newSpeed();
  else if( y < ball_radius )
  	y_speed = 1 * newSpeed();
}

function checkHitPaddle() {

	//location of paddle 
	cur_pad_top_y = paddle_y;
	cur_pad_bot_y = paddle_y + paddle_height;

  if( x > paddle_x+20 )
  {
  	textSize(100);
  	background(0,0,0);
		text("game over...", 100, height/2 - 100);
	}
	else if( x > paddle_x-5 && x < paddle_x+5 && y >= cur_pad_top_y && y <= cur_pad_bot_y )
	{
		x_speed += -1 * newSpeed();
		y_speed += -1 * newSpeed();
	}

}

function newSpeed() {
	return parseInt(random(3, 7));
}

// EVENT HANDLING

function mkymky_up() {
  // background(155, 104, 0);
  movePaddleUp();
}

function mkymky_down() {
  // background(255, 204, 110);
  movePaddleDown();
}


function mkymky_left() {
  // background(5, 4, 110);
}

function mkymky_right() {
  // background(25, 204, 0);
}

function mkymky_space() {
  // background(255, 204, 0);
}

function mkymky_lClick() {
	// moveRightPaddle( 1 );
}


