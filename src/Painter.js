class Painter
{
  constructor(random)
  {
    this.random = random;

    this.canvas = document.getElementById("canvas");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext("2d");
  }

  pixelRandom(size, color)
  {
    const x = this.random.chooseFrom0To(this.canvas.width);
  	const y = this.random.chooseFrom0To(this.canvas.height);

    this.pixel(x, y, size, color);
  }

  pixel(x, y, size, color)
  {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, size, size);
  }

  randomPlus(centerColor, exteriorColor)
  {
    const x = this.random.chooseFrom0To(this.canvas.width);
  	const y = this.random.chooseFrom0To(this.canvas.height);

    this.pixel(x, y, 1, centerColor);
  	this.circle(x, y, 1, exteriorColor)
  }

  circle(x, y, size, color) {
    this.context.fillStyle = color;

    this.context.fillRect(x + 1, y, size, size);
  	this.context.fillRect(x, y + 1, size, size);
  	this.context.fillRect(x - 1, y, size, size);
  	this.context.fillRect(x, y - 1, size, size);
  }

  all(color)
  {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  //TODO : necessary? Not used
  smoothPixels()
  {
  	this.context.translate(1, 1);
    this.context.lineWidth = 0.5;
  }

}
