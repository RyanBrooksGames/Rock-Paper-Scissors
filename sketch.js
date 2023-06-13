let rockimg;
let paperimg;
let scissorsimg;

let rock = [];
let paper = [];
let scissors = [];

function preload() {
  rockimg = loadImage('images/rock.png');
  paperimg = loadImage('images/paper.png');
  scissorsimg = loadImage('images/scissors.png');
}

function setup() {
  createCanvas(1270, 720);
  for (let i = 0; i < 20; i++) {
    rock[i] = new Entity("rock", random(50, width - 50), random(50, height - 50), 45, 40, p5.Vector.random2D(), rockimg);
    paper[i] = new Entity("paper", random(50, width - 50), random(50, height - 50), 40, 50, p5.Vector.random2D(), paperimg);
    scissors[i] = new Entity("scissors", random(50, width - 50), random(50, height - 50), 40, 50, p5.Vector.random2D(), scissorsimg);
  }
  //rock = new Entity("rock", random(50, width - 50), random(50, height - 50), 45, 40, p5.Vector.random2D(), rockimg);
  //paper = new Entity("paper", random(50, width - 50), random(50, height - 50), 40, 50, p5.Vector.random2D(), paperimg);
  //scissors = new Entity("scissors", random(50, width - 50), random(50, height - 50), 40, 50, p5.Vector.random2D(), scissorsimg);
}

function draw() {
  background(200);
  for (let i = 0; i < 20; i++) {
    rock[i].Update(false);
    paper[i].Update(false);
    scissors[i].Update(false);
  }

  for (let r = 0; r < 20; r++) {
    for (let j = 19; j >= 0; j--) {
      rock[r].Collisions(rock[j]);
      rock[r].Collisions(paper[j]);
      rock[r].Collisions(scissors[j]);
    }
  }
  for (let p = 0; p < 20; p++) {
    for (let j = 19; j >= 0; j--) {
      paper[p].Collisions(paper[j]);
      paper[p].Collisions(rock[j]);
      paper[p].Collisions(scissors[j]);
    }
  }
  for (let s = 0; s < 20; s++) {
    for (let j = 19; j >= 0; j--) {
      scissors[s].Collisions(scissors[j]);
      scissors[s].Collisions(rock[j]);
      scissors[s].Collisions(paper[j]);
    }
  }
  //rock.Update(true);
  //paper.Update(true);
  //scissors.Update(true);
  //rock.Collisions(paper);
  //rock.Collisions(scissors);
  //paper.Collisions(scissors);
}
