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

  //TODO improve this
  randomBeam(color)
  {
    const amplitude = this.random.chooseFrom0To(this.canvas.width);

    //TODO density should be related to the amplitude
    const density = this.random.chooseFrom0To(amplitude / 100);

    const startX = this.random.chooseFrom0To(this.canvas.width);
    const startY = this.random.chooseFrom0To(this.canvas.height);

    const endX = this.random.chooseInRange(startX, this.canvas.width);
    const endY = this.random.chooseInRange(startY, this.canvas.height);

    let x, y;

    let j = startY;

    for (let i = startX; i < endX && j < endY; i++) {
        j++;

        x = i;
        for (let z = 0; z < density; z++) {
          y = this.random.chooseInRange(j - amplitude, j + amplitude);
          if (this.isInsideCanvas(x, y)) {
            this.pixel(x, y, 1, color);
          }
        }

    }
  }

  isInsideCanvas(x, y)
  {
    return !(x < 0 || x > this.canvas.width || y < 0 || y  > this.canvas.height);
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
