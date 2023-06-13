class Entity {
  constructor(type, x, y, w, h, dir, image) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dir = dir;
    this.image = image;
    this.dead = false;
  }

  Move() {
    this.x += this.dir.x * 2;
    this.y += this.dir.y * 2;

    if (this.x <= 0) this.dir.x *= -1;
    if (this.y <= 0) this.dir.y *= -1;
    if (this.x + 50 >= width) this.dir.x *= -1;
    if (this.y + 50 >= height) this.dir.y *= -1;
  }

  Update(showcolliders) {
    if (this.dead) {
      this.x = -10;
      this.y = -10;
      return;
    }
    this.Move();

    if (showcolliders) {
      push();
      stroke(255, 0, 0, 255);
      fill(150, 0, 0, 255);
      rect(this.x, this.y, 50, 50);
      pop();
    }
    image(this.image, this.x + (50 - this.w) / 2, this.y + (50 - this.h) / 2, this.w, this.h);
  }

  Collisions(other) {
    if (this == other) return;
    if (this.dead || other.dead) return;
    if (
      this.x <= other.x + 50 &&
      this.x + 50 >= other.x &&
      this.y <= other.y + 50 &&
      this.y + 50 >= other.y
    ) {
      //console.log("Collision");
      //console.log(this.type + " " + other.type);
      if (this.type == other.type) {
        this.dir.x *= -1;
        this.dir.y *= -1;
        return;
      }

      switch (this.type) {
        case "rock":
          if (other.type == "paper") this.dead = true;
          if (other.type == "scissors") other.dead = true;
          break;
        case "paper":
          if (other.type == "scissors") this.dead = true;
          if (other.type == "rock") other.dead = true;
          break;
        case "scissors":
          if (other.type == "rock") this.dead = true;
          if (other.type == "paper") other.dead = true;
          break;
      }
    }
  }
}
